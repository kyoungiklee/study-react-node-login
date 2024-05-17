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
 - [몽고DB 사이드 가기](https://www.mongodb.com/) 
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
```
$ git init
Initialized empty Git repository in C:/study/study-react-node-login/.git/
```
- Git 상태확인
    - git status
```
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
```
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
```
$ touch .gitignore
```
- gitignore.io 에서 node,react,visualstudiocode 환경의 gitignore contents 만들기
    - [gitignore.io](https://www.toptal.com/developers/gitignore/)는 언어, OS 나 Framework, IDE 별로 저장소에 추가되면 안 되는 파일과 폴더 목록인 .gitignore 를 자동으로 생성해 주는 서비스이다.

- Git 커밋하기
```
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
```
$ ls -a ~/.ssh
./  ../  id_rsa  id_rsa.pub  known_hosts


```


# 아래내용은 마크다운 사용법 참조용(세미나와 관련없음)

# 제목 1
## 제목 2
### 제목 3
#### 제목 4
##### 제목 5
###### 제목 6

제목 1
======

제목 2
------

이텔릭체는 *별표(asterisks)* 혹은 _언더바(underscore)_를 사용하세요.
두껍게는 **별표(asterisks)** 혹은 __언더바(underscore)__를 사용하세요.
**_이텔릭체_와 두껍게**를 같이 사용할 수 있습니다.
취소선은 ~~물결표시(tilde)~~를 사용하세요.
<u>밑줄</u>은 `<u></u>`를 사용하세요.

1. 순서가 필요한 목록
1. 순서가 필요한 목록
- 순서가 필요하지 않은 목록(서브)
- 순서가 필요하지 않은 목록(서브)
1. 순서가 필요한 목록
1. 순서가 필요한 목록(서브)
1. 순서가 필요한 목록(서브)
1. 순서가 필요한 목록

- 순서가 필요하지 않은 목록에 사용 가능한 기호
    - 대쉬(hyphen)
    * 별표(asterisks)
    + 더하기(plus sign)

[GOOGLE](https://google.com)

[NAVER](https://naver.com "링크 설명(title)을 작성하세요.")

[상대적 참조](../users/login)

[Dribbble][Dribbble link]

[GitHub][1]

문서 안에서 [참조 링크]를 그대로 사용할 수도 있습니다.

다음과 같이 문서 내 일반 URL이나 꺾쇠 괄호(`< >`, Angle Brackets)안의 URL은 자동으로 링크를 사용합니다.
구글 홈페이지: https://google.com
네이버 홈페이지: <https://naver.com>

[Dribbble link]: https://dribbble.com
[1]: https://github.com
[참조 링크]: https://naver.com "네이버로 이동합니다!"


![springio_setting](https://user-images.githubusercontent.com/5433728/148364927-3e907ac5-577e-4ef1-be5c-3619814ee78b.jpg) "링크 설명(title)을 작성하세요.")

![Kayak][logo]

[logo]: http://www.gstatic.com/webp/gallery/2.jpg "To go kayaking."

[![Vue](/images/vue.png)](https://kr.vuejs.org/)


```html
<a href="https://www.google.co.kr/" target="_blank">GOOGLE</a>
```

```css
.list > li {
  position: absolute;
  top: 40px;
}
```

```javascript
function func() {
  var a = 'AAA';
  return a;
}
```

```bash
$ vim ./~zshrc
```

```python
s = "Python syntax highlighting"
print s
```

```
No language indicated, so no syntax highlighting. 
But let's throw in a tag.
```

``` java
public class HelloWorld {
    public void hello() {
        system.out.println("Hello");
}
```

| 값 | 의미 | 기본값 |
|---|:---:|---:|
| `static` | 유형(기준) 없음 / 배치 불가능 | `static` |
| `relative` | 요소 자신을 기준으로 배치 |  |
| `absolute` | 위치 상 부모(조상)요소를 기준으로 배치 |  |
| `fixed` | 브라우저 창을 기준으로 배치 |  |


 | 값          | 의미 | 기본값|
|------------|:---:|---:|
| `static`   | 유형(기준) 없음 / 배치 불가능 | `static`|
| `relative` | 요소 **자신**을 기준으로 배치 ||
| `absolute` | 위치 상 **_부모_(조상)요소**를 기준으로 배치 ||
|  `fixed`   | **브라우저 창**을 기준으로 배치 ||


인용문(blockQuote)

> 남의 말이나 글에서 직접 또는 간접으로 따온 문장.
> _(네이버 국어 사전)_

BREAK!

> 인용문을 작성하세요!
>> 중첩된 인용문(nested blockquote)을 만들 수 있습니다.
>>> 중중첩된 인용문 1
>>> 중중첩된 인용문 2
>>> 중중첩된 인용문 3


<u>마크다운에서 지원하지 않는 기능</u>을 사용할 때 유용하며 대부분 잘 동작합니다.

<img width="150" src="http://www.gstatic.com/webp/gallery/4.jpg" alt="Prunus" title="A Wild Cherry (Prunus avium) in flower">

![Prunus](http://www.gstatic.com/webp/gallery/4.jpg)


---
(Hyphens)

***
(Asterisks)

___
(Underscores)


동해물과 백두산이 마르고 닳도록
하느님이 보우하사 우리나라 만세   <!--띄어쓰기 2번-->
무궁화 삼천리 화려 강산<br>
대한 사람 대한으로 길이 보전하세