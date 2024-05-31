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

    if(Password !== ConfirmPassword) {
      return alert("비밀번호와 비밀번호 확인 값이 같아야 합니다.");
    }

    let body = {
      email: Email,
      name: Name,
      password: Password,
    }

    // loginUser Action을 dispatch()로 전달한다. 
    dispatch(registerUser(body))
      .then(response => {
        if (response.payload.success) {
          navigate("/login");
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