const express = require('express'); // express 모듈을 가져온다...
const app = express();
const port = 5000;

const bodyParser = require("body-parser");

const config = require("./config/key");
const {User} = require("./models/User");

//application/json 형식 파싱
app.use(bodyParser.json());
//application/x-www-form-urlencoded 형식 파싱
app.use(bodyParser.urlencoded({extended: true}));


const mongoose = require("mongoose");
mongoose.connect(config.mongoURI, 
{})
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

//사용자 등록 라우터
app.post("/register", async (req, res) => {

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});