import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";

import Auth from "./hoc/auth"


function App() {

  const AuthLandingPage = Auth(LandingPage, null);
  const AuthLoginPage = Auth(LoginPage, false);
  const AuthRegisterPage = Auth(RegisterPage, false);
  return (
    // v6.x 이상
    
      <Routes>
        <Route path="/" element={<AuthLandingPage />} />
        <Route path="/login" element={<AuthLoginPage/>}/>
        <Route path="/register" element={<AuthRegisterPage/>}/>
      </Routes>

    //https://velog.io/@fe1/React-React-Router-v6-HOC-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0
    // 1. 컴포넌트를 반환하는 함수로 만든 후 적용한다.

    //   function App() {
    //     const AuthLandingPage = Auth(LandingPage, null);
    //     const AuthLoginPage = Auth(LoginPage, false);
    //     const AuthRegisterPage = Auth(RegisterPage, false);

    //     return (
    //       <div className="App">
    //         <Router>
    //           <Routes>
    //             <Route path="/" element={<AuthLandingPage />} />
    //             <Route path="/login" element={<AuthLoginPage />} />
    //             <Route path="/register" element={<AuthRegisterPage />} />
    //           </Routes>
    //         </Router>
    //       </div>
    //     );
    //   }

    // 2. HOC를 적용할 컴포넌트, export에 적용한다.
    // import Auth from "../hoc/auth"

    // const LandingPage = () => {
    //   return (
    //     { ...}
    //   );
    // };

    // export default Auth(LandingPage, null);

    // v5.1 이하
    // <Router>
    //   <div>
    //     <Switch>
    //       <Route exact path="/">
    //         <LandingPage/>
    //       </Route>
    //       <Route exact path="/">
  
    //       </Route>
    //       <Route exact path="/">

    //       </Route>

    //     </Switch>
    //   </div>
    // </Router>

  );
}

export default App;
