const express = require('express'); // express 모듈을 가져온다...
const app = express();
const port = 5000;

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const config = require("./config/key");
const {auth} = require("./middleware/auth");
const {User} = require("./models/User");

//application/json 형식 파싱
app.use(bodyParser.json());
//application/x-www-form-urlencoded 형식 파싱
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());


const mongoose = require("mongoose");
mongoose.connect(config.mongoURI, 
{})
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World!')
});


app.get("/api/hello", (req, res) => {
  res.send('Hello World!');
});

//사용자 등록 라우터
app.post("/api/users/register", async (req, res) => {

  // 회원 가입 할때 필요한 정보들을 request에서 찾아
  // 데이터베이스에 저장한다.

  const user = new User(req.body);

  // new way
  const result = await user.save().then(() => {
    res.status(200).json({
      success: true,
    });
  }).catch(err => {
    res.json({
      success: false,
      err,
    });
  })
 
  //old way
  // user.save((err, user) => {
  //   if(err) { 
  //     console.log(err); 
  //     return res.json({ success: false, err })
  //   }
  //   return res.status(200).json({ 
  //     success: true
  //   });
  // });

});

//로그인 라우터
app.post('/api/users/login', async (req, res) => {
// 1. 요청된 이메일을 데이터베이스에서 찾는다. 
await User.findOne({email: req.body.email}).then(user => {
  if(!user) {
    return res.json({
      loginSuccess: false,
      message: "제공된 이메일에 해당하는 유저가 없습니다."
    })
  }

  // 1. 요청된 이메일이 데이터베이스에 있다면 비밀번호를 확인한다.
  user.comparePassword(req.body.password, (err, isMatch) => {
    if(!isMatch) 
      return res.json({loginSuccess: false, message: "비밀번호가 틀렸습니다."});
    // 1. 비밀번호가 맞다면 토큰을 생성한다.
    user.generateToken((err, user) => {
      
      if(err){
        return res.status(400).send(err);
      } 
      console.log("user.generateToken")
      //토큰을 저장한다. 토큰을 저장할 수있는 곳은 쿠키, 로컬스토리지 등이있다. 
      res.cookie("x_auth", user.token)
        .status(200)
        .json({
          loginSuccess: true,
          userId: user._id,
        })
      })
    })
  });
})

// 인증처리 라우터
app.get('/api/users/auth', auth, (req, res) => {
  // 여기까지왔다는 이야기는 미들웨어에서의 auth를 통과했다는 것임
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true, //롤이 0이면 일반사용자 그외 관리자.
    isAuth: true,
    email: req.user.email,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image,
  })
})


//logout 라우터
app.get('/api/users/logout', auth, (req, res) => {
  User.findOneAndUpdate({_id: req.user._id}, {token: ""}).then(user => {
    return res.status(200).send({success: true});
  }).catch(err => {
    console.log(err);
    return res.json({success: false, error: err});
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});