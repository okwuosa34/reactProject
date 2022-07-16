import React from 'react'
import './Login.css';
import LoginNavbar from "./components/LoginNavbar";

function Login() {
  
  const authToken = false
  const handleClick = () => {
      console.log('clicked')
  } 


  /* authToken if true will allow users to sign out, if false 
  will allow users to create account */
  
  return (
    <div className="cover">  
    <div className="loginBody"> 
    <LoginNavbar authToken={authToken} />
    <div className="login">
        <h1>Couples Connect©</h1>
        <button className="loginButton" onClick={handleClick}>
            {authToken ? 'Signout' : 'Create Account'}
        </button>
    </div>
    </div>
    </div> 
  )
}

export default Login