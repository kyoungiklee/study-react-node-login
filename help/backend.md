# Introduction
- boilerplate 만들기 
- 항상 존재하는 코드를 계속 만들기 귀찮음

#  node, express 설치
- node: cross-platform, javascript runtime enviroment,
- execute javascript code outside of a browser

- node 설치 여부 확인
    - node -v
- 프로젝트 디렉토리 만들기 
    - mkdir study-react-node-login
- 새로운 npm package 만들기
    - npm init
    - package.json 이 생성됨
    - index.js : 백엔드 시작점
- express.js 다운로드 : node_module -> 다운받은 dependency 들은 이 폴더에서 관리됨
- index.js에서 express앱 만들기
    - [EXPRESSJS 예제 링크](https://expressjs.com/en/starter/hello-world.html "Hello world example")

```javascript
    const express = require('express') // express 모듈을 가져온다...
    const app = express()
    const port = 5000

    app.get('/', (req, res) => { //express를 이용하여 요청을 처리
    res.send('Hello World!')
    })

    app.listen(port, () => { //express를 이용하여 서버 기동
    console.log(`Example app listening on port ${port}`)
    })
```

# MongoDB 연결
 - [몽고DB 사이트 가기](https://www.mongodb.com/) 
 - 회원가입하기
 - cluster 만들기
 - 몽고DB 유저 생성 (아이디 / 비번 메모장에 기록)

 - [mongoose 알아보기](https://www.npmjs.com/package/mongoose "몽구스알아보기")
 - mongoose 다운로드
    - nmp install mongoose --save

```javascript
    {
    "name": "study-react-node-login",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "start": "node index.js",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
        "express": "^4.19.2",
        "mongoose": "^8.3.5"
    }
    }
```
- APP에 MongoDB 연결하기
```javascript
    const express = require('express') // express 모듈을 가져온다...
    const app = express()
    const port = 5000

    const mongoose = require("mongoose")
    mongoose.connect('mongodb+srv://roadseeker:1q2w3e4r1!@boilerplate.rfd3gnc.mongodb.net/?retryWrites=true&w=majority&appName=boilerplate', 
    {})
        .then(() => console.log("MongoDB Connected..."))
        .catch(err => console.log(err))

    app.get('/', (req, res) => {
    res.send('Hello World!  안녕하세요')
    })

    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })

```

# 모델 생성하기
- db가 이해할수 있는 schema 작성
- db schema를 객체 모델로 연결
- Mongoose model provides an interface to the database for creating, updating, deleting, records, etc
```javascript
//User.js
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxLength: 50;
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        maxLength: 5
    },
    lastname: {
        type: String,
        maxLength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String,
    },
    tokenExp: {
        type: Number,
    },
})

const User = mongoose.model("User", userSchema)

module.exports = {User}

```

# Git 설치하기 및 사용하기

- Git이 무엇인가
    - Git is a distributed version controll system designed to handle everything from small
    to very large projects with speed and efficiency
- Git 설치 여부 확인
    - git --version
- Git 저장소 초기화
```shell
$ git init
Initialized empty Git repository in C:/study/study-react-node-login/.git/
```
- Git 상태확인
    - git status
```shell
$ git status
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   .gitignore
        new file:   index.js
        new file:   models/User.js
        new file:   package-lock.json
        new file:   package.json

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        help.md
```
- Git add
    - git add .
```shell
$ git add .

$ git status
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   .gitignore
        new file:   help.md
        new file:   index.js
        new file:   models/User.js
        new file:   package-lock.json
        new file:   package.json
```
- gitignore파일 만들기
```shell
$ touch .gitignore
```
- gitignore.io 에서 node,react,visualstudiocode 환경의 gitignore contents 만들기
    - [gitignore.io](https://www.toptal.com/developers/gitignore/)는 언어, OS 나 Framework, IDE 별로 저장소에 추가되면 안 되는 파일과 폴더 목록인 .gitignore 를 자동으로 생성해 주는 서비스이다.

- Git 커밋하기
```shell
$ git config user.email kyoungik.lee+1@gmail.com

$ git config user.email
kyoungik.lee+1@gmail.com

$ git config user.name kyoungik.lee

$ git config user.name
kyoungik.lee

$ git commit -m "initial commit"
[main (root-commit) 93109a7] initial commit
 6 files changed, 1278 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 help.md
 create mode 100644 index.js
 create mode 100644 models/User.js
 create mode 100644 package-lock.json
 create mode 100644 package.json
```

- 참고 add 한 파일을 staging에서 지우기
```
$ git rm --cached node_module -r
```

# ssh github 설정하기

- github repository 생성
- 접속 설정
```
$ git remote add origin https://github.com/kyoungiklee/study-react-node-login.git
$ git branch -M main
$ git push -u origin main
```
- ssh 설정
```shell
$ ssh-keygen -t rsa -b 4096 -C "kyoungik.lee+1@gmail.com"
Generating public/private rsa key pair.
Enter file in which to save the key (/c/Users/LG/.ssh/id_rsa): 
/c/Users/LG/.ssh/id_rsa already exists.
Overwrite (y/n)? y
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /c/Users/LG/.ssh/id_rsa
Your public key has been saved in /c/Users/LG/.ssh/id_rsa.pub
The key fingerprint is:
SHA256:N/C5fsY0Xk7FCvIbKG/5sp+bqjEXiBTW618MhUAkp+I kyoungik.lee+1@gmail.com
The key's randomart image is:
+---[RSA 4096]----+
|      ++=. .     |
|     . =. . .    |
|    . o .. .   . |
|   . o ..+o..   o|
|    E ..S ** . o |
|        o..+B +  |
|        o+o* B   |
|         =* *o.  |
|        .o+O*.   |
+----[SHA256]-----+


$ eval "$(ssh-agent -s)"
Agent pid 1734

$ ssh-add ~/.ssh/id_rsa
Identity added: /c/Users/LG/.ssh/id_rsa (kyoungik.lee+1@gmail.com)


$ cat ~/.ssh/id_rsa.pub
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDGzvne4O1Eb9CP38b0Q3i/dtfoGYwmZuryxZGqDDyGZQbOJ3yFDvt1xM9z/c3AsUoIJJK+X2iJq98wfrt1QRfdnKABcOI7f21lc7VYwUPWwpwjjrMabbcuFlWcx7/TM/pkydZEPDiDCC5/qaHl89cqvGSCFvItgrp2HtmnnkBsr26m7pJmI6Is0g3b9vcy5KebxQmAhrUa/X5t2M2E4we/v4jiZu/O5sbPwAeDPa9sit3mgq/H/QN+9xL1ThmvSQwBAJBLC8SLJE6ni+8NGEQucf88FmF3BRJj9HNxcEsIO+Nx9uki98Yh42u2Zfk2l7Ys/YAHKiuFtLQN7mw3KeyqMBH8r7bSSee6yQ/TbNOGWOMuAsCKA8CfPrXvZWmuCEWRV0hvQr4XWfJTuAJnR4w3CHw12Pv0IX3/VRVVuXiiv+PPw527icpEnBDXP+dn+k5fRNH1ooiHcx7hkTFKVp4368wZjg/wXTHmIBXHDJYRLePRwUjhC2tYYRPKk9AA7l3k3eyD682QWz4FZLEelVRIxu7GpjyjLt9aqtQFSM+9nk1+KUccOHtzn2kETHczL+kuvCXP6Zlu8LTSYeC8k3M39E/sweo23SSQ1qxE++B+JLT1Oywd0cbendk7tqlBexzCjgr8HLN1rUryLhRsT8GCTrqQwFE3qjRCeWgZhVe+gQ== kyoungik.lee+1@gmail.com

$  git remote add origin https://github.com/kyoungiklee/study-react-node-login.git

$  git branch -M main

$  git push -u origin main
Enumerating objects: 9, done.
Counting objects: 100% (9/9), done.
Delta compression using up to 8 threads
Compressing objects: 100% (7/7), done.
Writing objects: 100% (9/9), 13.25 KiB | 2.21 MiB/s, done.
Total 9 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/kyoungiklee/study-react-node-login.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.

```

# 회원 가입 기능 만들기
- body-paser dependency 인스톨하기
```sh

$ npm install body-parser --save

up to date, audited 85 packages in 820ms

13 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

- postman 설치
    - 클라이언트 없이 데이터를 보내고 응답을 받을 수 있는 툴

- 사용자 등록 라우터 만들기
```js
....
const bodyParser = require("body-parser");
const {User} = require("./models/User");

//application/json 형식 파싱
app.use(bodyParser.json());
//application/x-www-form-urlencoded 형식 파싱
app.use(bodyParser.urlencoded({extended: true}));

....

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
});

....
```

# Node Mon 설치
- 소스 변경 시 소스의 변경을 감지하여 반영하는 툴
```sh
$ npm install nodemon --save-dev

added 29 packages, and audited 114 packages in 2s

17 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```
- --save-dev 로 옵션을 주었을 경우 dependency가 devDependencies에 위치한다.
```json
{
  "name": "study-react-node-login",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.20.2",
    "express": "^4.19.2",
    "mongoose": "^8.3.5"
  },
  "devDependencies": {
    "nodemon": "^3.1.0"
  }
}
```
- package.json 내용 변경
```json
  "scripts": {
    "start": "node index.js",
    "server": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
- server로 실행하면 nodemon으로 제어됨
```sh
$ npm run server

> study-react-node-login@1.0.0 server
> nodemon index.js

[nodemon] 3.1.0
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node index.js`
Example app listening on port 5000
MongoDB Connected...


```

# 비밀정보 보호하기
- index.js에 있는 몽고db 아이디 / 패스가 평문으로 보여지고 있음
- 개발환경과 운영환경에서의 접속 환경이 다르므로 분리할 할 필요가 있음
```js
//key.js
if(process.env.NODE_ENV === "production") { //process.env.NODE_ENV 가 production이면 ./prd 파일을 읽는다.
    module.exports = require("./prd");
} else { // 아니면 개발환경 파일 읽기
    module.exports = require("./dev"); 
}
```
- dev.js를 .gitignore에 등록 하여 remote에 해당 파일이 올라 가지 않도록 함
```sh
//.gitignore 
# Dependency directories
node_modules/
jspm_packages/

# password file
dev.js
```

```sh
$ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   .gitignore
        modified:   help.md
        modified:   index.js
        modified:   models/User.js
        modified:   package-lock.json
        modified:   package.json

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        config/

no changes added to commit (use "git add" and/or "git commit -a")
```

# Bcrypt로 비밀번호 암호화 하기
- Bcrypt 인스톨하기
```sh
$ npm install bcrypt --save

added 54 packages, and audited 168 packages in 5s

20 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```
# 11. 로그인 기능 구현

1. 요청된 이메일을 데이터베이스에서 찾는다. 
1. 요청된 이메일이 데이터베이스에 있다면 비밀번호를 확인한다.
1. 비밀번호가 맞다면 토큰을 생성한다.


- jsonwebtoken 인스톨
```sh
$ npm install jsonwebtoken --save

added 13 packages, and audited 181 packages in 2s

20 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

 - [jsonwebtoken 사이트 참조](https://www.npmjs.com/package/jsonwebtoken)

 - cookie-parser 인스톨
 ```sh
 $ npm install cookie-parser --save

added 2 packages, and audited 183 packages in 2s

20 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

 ```

 # 12. JWT 생성 및 저장
 - jsonwebtoken을 이용하여 token을 만든다. 
 - user._id와 '문자열'을 합하여 token 만든다.
 - db에 생성한 token을 저장한다. 
 - 생성한 토큰을 cookie를 이용하여 클라이언트에 전달한다. 

 - index.js 로그인 라우터 만들기
 ```javascript
 //로그인 라우터
app.post('/api/users/login', async (req, res) => {
// 1. 요청된 이메일을 데이터베이스에서 찾는다. 
await User.findOne({email: req.body.email}).then(user => {
  // user가 없는 경우 처리
  if(!user) {
    return res.json({
      loginSuccess: false,
      message: "제공된 이메일에 해당하는 유저가 없습니다."
    })
  }

  // 1. 요청된 이메일이 데이터베이스에 있다면 비밀번호를 확인한다.
  //User model에 comparePassword() 메서드를 만든어 사용한다. 
  user.comparePassword(req.body.password, (err, isMatch) => {
    if(!isMatch) 
    // 비밀번호가 맞지 않는 경우 오류를 클라이언트에 전달한다.
      return res.json({loginSuccess: false, message: "비밀번호가 틀렸습니다."});

    // 1. 비밀번호가 맞다면 토큰을 생성한다.
    user.generateToken((err, user) => {
      if(err){
        return res.status(400).send(err);
      } 

      //토큰을 저장한다. 토큰을 저장할 수있는 곳은 쿠키, 로컬스토리지 등이있다. 
      //쿠키에 토큰을 저장한다.
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
 ```

- User.js comparePasswrod()와 generateToken() 메서드 구현
 ```javascript
 // 처리 결과에 따라 callback함수로 결과를 전달한다. 
 userSchema.methods.comparePassword = function(plainPassword, callback) {
    // 전달받은 평문의 password를 bcrypt.compare() 함수로 암호화되어 저장된 
    // password와 비교하여 결과값을 callback 함수에 전달한다. 
    bcrypt.compare(plainPassword, this.password, function (err, isMatch){
        if (err) callback(err);
        callback(null, isMatch);
    })
}

userSchema.methods.generateToken = function(callback) {
    var user = this;
    // jsonwebtoken을 이용해서 token을 생성하기
    // token에서 'secretToken' 문자열을 이용하여 user._id를 토큰으로 생성한다. 
    // 이후 요청에서 'secretToke' 문자열로 user._id를 찾을 수 있다.
    var token = jwt.sign(user._id.toHexString(), 'secretToken')
    user.token = token;

    // token을 db에 저장하고 callback 함수를 이용하여 처리결과를 전달한다.
    user.save().then(() => {
        callback(null, user);
    }).catch(err => {
        callback(err);
    }) 
}
 ```
# 13. auth 기능 구현하기
- 로그인한 사용자가 접근할 수 있는 기능 구현
- db에 저장된 token과 클라이언트에서 전달된 token과 비교한다. 
- 쿠키에서 token을 찾고 decode 하여 user._id를 찾는다. 

 - auth.js 인증처리하는 기능 구현
 ```javascript
 const { User } = require('../models/User');

let auth = (req, res, next) => {

    // 클라이언트 쿠키에서 토큰을 가져온다
    let token = req.cookies.x_auth;
    // 토큰을 복호화 한후 유저를 찾는다. 
    User.findByToken(token, (err, user) => {
        if (err) throw err;
        if (!user) return res.json({isAuth: false, error: true});

        req.token = token;
        req.user = user;
        next();
    })

    // User.findByToken(token).then((user) => {
    //     if(!user) return res.json({isAuth: false, error: true});
    //     req.token = token;
    //     req.user = user;
    //     next();
    // }).catch(err => {
    //     throw err;
    // })
}
// 다른 파일에서도 사용할 수 있도록 exports 함
module.exports = { auth };
 ```

 - User.js 모델에 findByToken() 기능을 추가한다.
 ```javascript
 userSchema.statics.findByToken = function(token, callback) {
    var user = this;
    // token을 디코드한다.
    // jwt.verify() 함수를 이용하여 token에서 user._id를 찾는다. 
    jwt.verify(token, 'secretToken', function(err, decoded){
        //user._id와 token으로 사용자를 찾는다. 
        user.findOne({ "_id": decoded, "token": token }).then((user) => {
            if(!user) thorw("사용자가 인증되지 않았습니다.");
            callback(null, user);
        }).catch(err => {
            callback(err);
        })
    })
}
 ```

 - index.js 에 auth 라우터 구현
 ```javascript

 // 인증처리 라우터 
 // auth 미들웨어를 구현하여 인증 구현
app.get('api/users/ahth', auth, (req, res) => {
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
 ```

# 14. 로그아웃 기능 만들기
- 로그아웃 라우터를 만든다.
- 로그아웃 하려는 유저를 데이터베이스에서 찾는다. 
- 그 유저의 토큰을 지워준다.

- index.js logout 라우터 기능 구현
```javascript
//logout 라우터
app.get('/api/users/logout', auth, (req, res) => {
  // 사용자를 찾아서 token을 지워준다
  User.findOneAndUpdate({_id: req.user._id}, {token: ""}).then(user => {
    //처리결과를 클라이언트에 보내준다. 
    return res.status(200).send({success: true});
  }).catch(err => {
    console.log(err);
    return res.json({success: false, error: err});
  })
})
```