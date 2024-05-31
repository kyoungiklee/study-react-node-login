import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { loginUser } from "../../../_actions/user_action";

function LoginPage(props) {
  // redux를 사용하기 위해 dispatch()를 사용한다. 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.target.value);
  }

  const onPasswordHandler = (event) => {
    setPassword(event.target.value);
  }
  
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("Email:", Email);
    console.log("Password:", Password);

    let body = {
      email: Email,
      password: Password,
    }

    // loginUser Action을 dispatch()로 전달한다. 
    dispatch(loginUser(body))
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