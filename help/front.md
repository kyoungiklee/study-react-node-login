# 15. 리액트란
- 라이브러리, 페이스북에서 만듬, 2013년에 릴리즈
- 컴포넌트 모듈과 비슷하게 컴포넌트로 이뤄져 있어서 재사용성이 뛰어남 
- Real DOM vs VitualDOM
- jsx를 렌더링한다. 그러면 virtual DOM이 update가 됨
- virtual DOM이 이전 virtual DOM에서 찍어둔 Snapshot과 비교를 해서 바뀐 부분을 찾는다.(diffing) 
- 바뀐 부분만 Real DOM에서 바꿔준다

# 16. create react app으로 리액트 시작하기
- 리액트를 앱을 처음 실행하기 위해선 webpack이나 babel 같은 것을 설정하기 위해서 많이 시간이 소요됨
- babel이란 최신 자바스트립트 문법을 지원하지 않는 브라우저들을 위해서 최신 자바스크립트 문법을 구형브라우저에서 돌수 있게 변환 시켜줌
- webpack이란 웹 애플리케이션을 구성하는 자원(HTML, CSS, Javscript, Images 등)을 모두 각각의 모듈로 보고 이를 조합해서 병합된 하나의 결과물을 만드는 도구를 의미한다. 간단하게 Webpack은 여러 파일을 하나 이상의 파일로 합쳐주는 자바스크립트 번들러이다.

- npx create-react-app으로 react project 초기화 하기
```sh
$ npx create-react-app .

Creating a new React app in C:\study\study-react-node-login\client.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...


added 1489 packages in 2m

258 packages are looking for funding
  run `npm fund` for details

Installing template dependencies using npm...

added 67 packages, and changed 1 package in 13s

262 packages are looking for funding
  run `npm fund` for details
Removing template package using npm...


removed 1 package, and audited 1556 packages in 7s

262 packages are looking for funding
  run `npm fund` for details

8 vulnerabilities (2 moderate, 6 high)

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

Success! Created client at C:\study\study-react-node-login\client
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd C:\study\study-react-node-login\client
  npm start

Happy hacking!
```
# 17. npm vs npx
- npm 이란 npm은 Node Packaged Manager의 약자
- Node.js로 만들어진 모듈을 웹에서 받아서 설치하고 관리해주는 프로그램
- Java랑 비교를 하자면 메이븐과 비슷한 역할을 하는 것
- node.js를 설치하면 내장(built in)되어 있다
- node.js 프로젝트의 온라인 레포지토리 
- 패키지 인스톨, 버전관리, 의존성관리를 위한 코맨드라인 유틸리티

 - npm에 관리내용은 package.json에 기록됨
 ```json
 {
  "name": "client",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
 ```

 - npx는 npm registry에서 create-react-app을 찾아서 다운로드 없이 실행
 - disk space를 낭비하지 않는다. 
 - 항상 최신버전을 사용할 수 있다. 

 # 18. create-react-app 으로 만들어진 react app의 구조
  - public > index.html
  ```html
  <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
        name="description"
        content="Web site created using create-react-app"
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <title>React App</title>
    </head>
    <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root"></div>
    </body>
    </html>

  ```
  - src > app.js
  ```javascript
    import logo from './logo.svg';
    import './App.css';

    function App() {
    return (
        <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a>
        </header>
        </div>
    );
    }

    export default App;
  ```
  - src > index.js react app 진입점
  ```javascript
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import './index.css';
    import App from './App';
    import reportWebVitals from './reportWebVitals';

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    <React.StrictMode>
        <App /> 
    </React.StrictMode>
    );

    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();
  ```

  # 19. boiler plate에 특성화된 구조 설명

  -  _actions, _reducer Redux를 위한 폴더들
  - components/views 이 안에 페이지를 넣는다.
  - components/views/Sections 이안에 해당 페이지에 관련된 css 파일이나, component들을 넣는다.
  - App.js Routing 관련 일을 처리한다.
  - Config.js 환경변수 같은 것들을 정하는 곳이다. 
  - hoc higher order component의 약자로 function안에 컴포넌트를 가지고 있다. 선행처리 역활은 수행한다. 
  - util 여러군데에서 쓰일 수 있는 것들을 이곳에 넣어둬서 어디서든 쓸수있게 해줌

# 20. App.js React Router Dom
 - 페이지를 이동할때 React Router Dom 이라는 것을 사용한다. 
 - [어떻게 사용하는지 참조 웹 사이트](https://reactrouter.com/en/main/start/tutorial)
 - dependency 다운로드 
 ```sh
 $ npm install react-router-dom --save

added 3 packages, and audited 1559 packages in 10s

262 packages are looking for funding
  run `npm fund` for details

8 vulnerabilities (2 moderate, 6 high)

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
 ```

 -App.js 라우터 구성
 ```javascript
import React from "react";

//라우터 구성을 위해 react-router-dom을 가져온다.
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

//이동할 페이지들을 임포트 한다. 
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";


function App() {
  return (
    // v6.x 이상
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

 ```

 # 21. Data Request, Response Flow Axios

 - Axios 다운로드 
 ```sh
 $ npm install axios --save

added 3 packages, and audited 1562 packages in 5s

262 packages are looking for funding
  run `npm fund` for details

8 vulnerabilities (2 moderate, 6 high)

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
 ```


# 22. CORS 이슈, Proxy 설정 
- Cross-Origin Resource Sharing(CORS)
- 처음 접근한 서버 이외에 자바스크립트를 이용하여 다른 서버로의 요청 막는다.(보안을 위하여)
- 이를 해결하기 위한 여러가지 방법이 있다
- 그중에서 Proxy를 사용하여 해결한다. 
- [proxy를 이용하여 하는 방법 참고](https://create-react-app.dev/docs/proxying-api-requests-in-development)

- http-proxy-middleware 인스톨하기
```sh
$ npm install http-proxy-middleware --save

added 1 package, changed 1 package, and audited 1563 packages in 5s

262 packages are looking for funding
  run `npm fund` for details

8 vulnerabilities (2 moderate, 6 high)

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
```

- setupProxy.js 생성하기
```javascript
// proxy 역활을 하는 http-proxy-middleware를 사용한다.
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api', //api로 오는 호출은
        createProxyMiddleware({
            target: 'http://localhost:5000/api', // 이쪽으로 보낸다.
            changeOrigin: true,
        })
    );
};
```

- LandingPage 모듈에서 axios를 이용하여 호출하기
```javascript
  import React, {useEffect} from 'react'
import axios from "axios";


function LandingPage() {

  useEffect(() => {
    //axios를 이용하여 localhost:3000번 서버로 '/api/hello' 를 호출하면
    // proxy middleware에서 localhost:5000/api/hello로 호출을 전환하여 처리한다. 
    axios.get('/api/hello').then(response => { 
      console.log(response.data);
    })
  }, [])

  return (
    <div>LandingPage... 랜딩</div>
  )
}

export default LandingPage
```

# 23. Proxy는 무엇인가. 
- 프록시 서버는 장치와 인터넷 웹 사이트 간의 중개자 역할
- 브라우저에 웹 사이트 주소를 입력합니다.
- 프록시 서버가 사용자의 요청을 수신 받습니다.
- 프록시 서버는 액세스하려는 웹 서버로 요청을 전달합니다.
- 웹 서버는 응답(웹 사이트 데이터)을 프록시 서버로 되보냅니다.
- 프록시 서버가 사용자에게 응답을 전달합니다.

# 24. Concurrently를 이용해서 프론트, 백엔드서버 한번에 기동하기
- concurrently를 인스톨한다.
```sh
$ npm install concurrently --save

added 26 packages, and audited 209 packages in 25s

27 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

```
- package.json concurrently 내용 추가
```json
  "scripts": {
    "start": "node ./server/index.js",
    "server": "nodemon ./server/index.js",
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "concurrently \"npm run server\" \"npm run start --prefix client\""
  },
```

- concurrently 실행결과
```sh
$ npm run dev

> study-react-node-login@1.0.0 dev
> concurrently "npm run server" "npm run start --prefix client"

[1] 
[1] > client@0.1.0 start
[1] > react-scripts start
[1] 
[0] 
[0] > study-react-node-login@1.0.0 server
[0] > nodemon ./server/index.js
[0]
[0] [nodemon] 3.1.0
[0] [nodemon] to restart at any time, enter `rs`
[0] [nodemon] watching path(s): *.*
[0] [nodemon] watching extensions: js,mjs,cjs,json
[0] [nodemon] starting `node ./server/index.js`
[0] Example app listening on port 5000
[0] MongoDB Connected...
[1] (node:42120) [DEP_WEBPACK_DEV_SERVER_ON_AFTER_SETUP_MIDDLEWARE] DeprecationWarning: 'onAfterSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.
[1] (Use `node --trace-deprecation ...` to show where the warning was created)
[1] (node:42120) [DEP_WEBPACK_DEV_SERVER_ON_BEFORE_SETUP_MIDDLEWARE] DeprecationWarning: 'onBeforeSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.
[1] Starting the development server...
[1]
[1] Compiled successfully!
[1]
[1] You can now view client in the browser.
[1]
[1]   Local:            http://localhost:3000
[1]   On Your Network:  http://172.29.208.1:3000
[1]
[1] Note that the development build is not optimized.
[1] To create a production build, use npm run build.
[1]
[1] webpack compiled successfully
```

# 25. CSS Framework Ant Design
- CSS Framework를 사용하는 이유 -> 기능만드는 것에 집중하기 위해
- CSS Framework for React JS
  - Material UI
  - React Bootstrap
  - Semantic UI
  - Ant Design
  - Materialize
- [Ant Design site](https://ant.design)
- antd 인스톨하기
```sh
$ npm install antd --save

added 65 packages, and audited 1628 packages in 29s

263 packages are looking for funding
  run `npm fund` for details

8 vulnerabilities (2 moderate, 6 high)

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details
```
```json
  "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "antd": "^5.17.4", //antd가 추가됨
    "axios": "^1.7.2",
    "http-proxy-middleware": "^3.0.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.23.1",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
```


# 26. Redux
- Redux란 상태관리 컨테이너이다. 
- Props vs State
  - props: 컨테이너간에 정보전달이 필요할때 prop을 사용하여 전달한다. 
  - props: 부모컴포넌트에서 자식컴포넌트로 정보를 전달한다. 
  - props: props는 불변성을 가진다.
  - state: 컴포넌트 안에서 데이터를 전달하고자 할때 사용한다. 
  - state: mutable이다. 
  - state: state가 변하면 컴포넌트가 리렌더링된다. 

- Redux는 state를 관리하는 것이다. 
- Redux 데이터 Flow (strict unidirectional data flow)
  - React Component -> Dispatch(action) -> Action -> Reducer -> Store -> Subscribe -> React Component
  - Action -> a plain object describing what happened (무엇이 일어났는지 설명하는 객체)
  - Reducer -> a function describing how the application's state changes (이전 State과 action object를 받은후에 next state을 리턴한다.)
  - Store -> application의 state을 감싸주는 역할을 한다. 여러 메소드를 가지고 있다.

# 27. Redux Setting
 - Redux 관련 패키지 인스톨
 ```sh
 $ npm install redux react-redux redux-promise redux-thunk --save

added 10 packages, and audited 1638 packages in 11s

263 packages are looking for funding
  run `npm fund` for details

8 vulnerabilities (2 moderate, 6 high)

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
 ```
```json
  "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "antd": "^5.17.4",
    "axios": "^1.7.2",
    "http-proxy-middleware": "^3.0.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-redux": "^9.1.2", //추가됨
    "react-router-dom": "^6.23.1",
    "react-scripts": "5.0.1",
    "redux": "^5.0.1", //추가됨
    "redux-promise": "^0.6.0", //추가됨
    "redux-thunk": "^3.1.0", //추가됨
    "web-vitals": "^2.1.4"
  }
```
- Redux-promise 와 Redux-thunk
 - Redux-promise and Redux-thunk are middleware.
 - A Redux Store will only accept dispatching plain object actions
 - A middleware can "teach" dispatch() how to accept something that's not a plain action object (promise, function)
 - redux-promise "teaches" dispatch how to accept promises, by intercepting the promise and dispatching actions when the promise resolves or rejects
 - redux-thunk "teaches" dispatch how to accept functions, by intercepting the function and calling it instead of passing it on to the reducers

 - Redux 와 App.js 연결
 ```javascript
  // App 컴포넌트와 Redux를 연결하기위한 Provider를 가져온다.
  import { Provider } from "react-redux";
  // promise와 function을 Redux Store에서 관리하기 위한 redux-promise와 redux-thunk에서 
  // promiseMiddleware, thunk를 가져온다. 
  import promiseMiddleware from "redux-promise";
  import { thunk } from 'redux-thunk';

  // Store 생성과 middleware를 적용하기 위해 applyMiddleware와 createStore를 가져온다.
  import { applyMiddleware, createStore } from 'redux';

  // Store에 관리되는 reducer들을 가져온다
  import Reducer from "./_reducer";

  //Redux를 위한 Store를 생성한다. Reducer정보와 Chrom Extention을 위한 정보를 생성시 전달한다.     
  const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, thunk)(createStore)

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <Provider store={createStoreWithMiddleware(Reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    )}>
      <App />
    </Provider>

  );
 ```
# 28. React vs React Hooks

-  React Component
  - Class Component
  - Functional Component
  - constructor -> render -> componentDidMount, componentDidUpdate -> componentWillUnmount

# 29. Login 페이지 만들기(Form 구성)

- LoginPage 구성(폼, 이벤트 핸들러, redux)
```javascript
//components/views/LoginPage/LoginPage.js
import React, { useState } from 'react' //react hook 사용
import { useNavigate } from "react-router-dom"; //페이지 이동을 위한 react-router-dom
import { useDispatch } from 'react-redux'; // 비즈로직 처리를 위한 redux 사용
import { loginUser } from "../../../_actions/user_action"; // redux 사용을 위한 액션

function LoginPage(props) {
  // redux를 사용하기 위해 dispatch()를 사용한다. 
  const dispatch = useDispatch(); // redux dispatch를 위한 선언
  const navigate = useNavigate(); // 페이지 이동을 위한 선언

  const [Email, setEmail] = useState(""); //페이지 업데이트 렌더링을 위한 state
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => { //Email onChange 이벤트 핸들러
    setEmail(event.target.value);
  }

  const onPasswordHandler = (event) => { //Password onChange 이벤트 핸들러
    setPassword(event.target.value);
  }
  
  const onSubmitHandler = (event) => { //form onSubmit 이벤트 핸들러
    event.preventDefault(); // 페이지 reload 방지

    // redux action에 전달하기 위한 plain object
    let body = {
      email: Email,
      password: Password,
    }

    // loginUser Action을 dispatch()로 전달한다. 
    // reducer에서 처리된 결과를 받아 화면 처리 로직을 구성한다. 
    dispatch(loginUser(body)) //loginUser action을 생성하여 reducer로 dispatch한다. 
      .then(response => {
        if(response.payload.loginSuccess) {
          alert("로그인에 성공하였습니다.");
          navigate("/");
        } else {
          alert("Error");
        }
      })
  }

  return (
    <div style={
      {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}>
      <form style={{display: "flex", flexDirection: "column",}} onSubmit={onSubmitHandler}>
        <label>Email</label>
        <input type='email' value={Email} onChange={onEmailHandler}></input>
        <label>Password</label>
        <input type='password' value={Password} onChange={onPasswordHandler}></input>
        <br/>
        <button>Login</button>
      </form>
    </div>
  )
}
export default LoginPage
```
# 30. Login 페이지 만들기(Redux 구성)
- Redux를 위한 loginUser 액션을 만든다

```javascript
//_action/user_action.js
import axios from "axios"; //api 호출을 위한 라이브러리
import {LOGIN_USER} from "./types" // action의 구분을 위한 타입들  

//login user action
export function loginUser(dataToSubmit) {
    // api를 호출하고 결과를 가지고 action을 만들어 리턴한다. 
    const request = axios.post('/api/users/login', dataToSubmit)
        .then(response => response.data)
        return { //plain object
            type: LOGIN_USER,
            payload: request
        }
}
```

- Redux를 위한 user_reducer 만들기
```javascript
//_reducer/user_reducer.js
import { LOGIN_USER } from "../_actions/types";

// (previousState, action) => nextStat 를 만드는것이 reducer임
export default function(state = {}, action) { 
    switch (action.type) {
        case LOGIN_USER:
            return {...state, loginSuccess: action.payload} // Redux Store에서 관리된다.
            break;
        default:
            return state;
    }
}
```
- reducer를 한나의 페이지에서 관리하기 위한 rootReducer 만들기
```javascript
//_reducer/index.js
import { combineReducers } from "redux"; //Reducer를 관리하기 위한 combineReducers 
import user from "./user_reducer";

const rootReducer = combineReducers({
    user,
})

export default rootReducer;
```

# 31. Register 페이지 만들기

- RegisterPage form 만들기
```javascript
import React, { useState } from 'react'

import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { registerUser } from "../../../_actions/user_action";

function RegisterPage() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");


  const onEmailHandler = (event) => {
    setEmail(event.target.value);
  }
  
  const onNameHandler = (event) => {
    setName(event.target.value);
  }

  const onPasswordHandler = (event) => {
    setPassword(event.target.value);
  }

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.target.value);
  }


  const onSubmitHandler = (event) => {
    event.preventDefault();

    //confirm password를 확인한다. 
    if(Password !== ConfirmPassword) {
      return alert("비밀번호와 비밀번호 확인 값이 같아야 합니다.");
    }

    //reducer에 전달할 plain object 
    let body = {
      email: Email,
      name: Name, 
      password: Password,
    }

    // registerUser Action을 dispatch()로 전달한다. 
    dispatch(registerUser(body))
      .then(response => {
        if (response.payload.success) {
          navigate("/");
        } else {
          alert("Failed to sign up");
        }
      })

  }

  return (
    <div style={
      {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}>
      <form style={{ display: "flex", flexDirection: "column", }} onSubmit={onSubmitHandler}>
        <label>Email</label>
        <input type='email' value={Email} onChange={onEmailHandler}></input>
        <label>Name</label>
        <input type='name' value={Name} onChange={onNameHandler}></input>
        <label>Password</label>
        <input type='password' value={Password} onChange={onPasswordHandler}></input>
        <label>Comfirm Password</label>
        <input type='password' value={ConfirmPassword} onChange={onConfirmPasswordHandler}></input>

        <br />
        <button>회원가입</button>
      </form>
    </div>
  )
}

export default RegisterPage
```

- registerUser action 만든기
```javascript
import axios from "axios";
import {
    LOGIN_USER
    , REGISTER_USER 
} from "./types"

//login user action
.......
.......

//register user action
export function registerUser(dataToSubmit) {

    //요청을 서버에 보내서 받은 응답을 가지고 action을 생성한다. 
    const request = axios.post('/api/users/register', dataToSubmit)
        .then(response => response.data)

    return {
        type: REGISTER_USER,
        payload: request
    }
}
```
- register user reducer 만들기
```javascript
import { LOGIN_USER, REGISTER_USER } from "../_actions/types";

export default function(state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {...state, loginSuccess: action.payload}
            break;
        case REGISTER_USER: // type이 register_user인 경우
            return {...state, register: action.payload}
        default:
            return state;
    }
}
```

- register user type 추가하기
```javascript
export const LOGIN_USER = "login_user";
export const REGISTER_USER = "register_user";
```

# 32. 로그아웃 기능 구현
 - axios를 이용하여 LandingPage에 구현
 ```javascript
 import React, {useEffect} from 'react'
import axios from "axios";
// useNavigate를 이용하여 다음페이지 이동에 사용함
import { useNavigate } from 'react-router-dom';


function LandingPage() {

  const navigator = useNavigate();

  useEffect(() => {
    axios.get('/api/hello').then(response => {
      console.log(response.data);
    })
  }, [])

  // 로그아웃 버튼에 onClickHandler를 구현하여 로그아웃 구현
  const onClickHandler = () => {
    axios.get('/api/users/logout')
    .then(response => {
      if(response.data.success) {
        navigator("/login")
      }else{
        alert("로그아웃에 실패하였습니다.");
      }
    })
  }

  return (
    <div style={
      {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }
    }>
      <h2>시작페이지</h2>
      <button onClick={onClickHandler}>로그아웃</button>
    </div>
  )
}

export default LandingPage
 ```

 # 33. 인증기능 구현하기
 - hoc: A higher-order component is a function that takes a compoenent and returns a new component
 - Auth라는 hoc를 만들어 페이지 진입여부를 확인하고 접근이 가능하면 해당 페이지의 component를 리턴하도록 구현
 


