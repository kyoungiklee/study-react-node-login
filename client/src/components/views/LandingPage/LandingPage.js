import React, {useEffect} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';


function LandingPage() {

  const navigator = useNavigate();

  useEffect(() => {
    axios.get('/api/hello').then(response => {
      console.log(response.data);
    })
  }, [])

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