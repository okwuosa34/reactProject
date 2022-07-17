import React from 'react'
import Banner from "../CoupleLogo.jpeg";
import './LoginNavbar.css';


// if authToken does exist log in button will render to screen
// handlClick function allows for showBox to be accessed from create account button as well as login button
// Line 27 showBox variable will decide disabled feature
function LoginNavbar({ setShowBox, showBox, setSigningUp }) {

  const handleClick = () => {
    setShowBox(true)
    setSigningUp(false)
  }

  const authToken = false
  return (
    <nav> 
        <div className="navLogo">
            <img 
            className="logo"
            src={Banner} 
            alt="couple logo"
            />
        </div>
        {!authToken && <button 
        className="navButton" 
        onClick={handleClick}
        disabled={showBox}
        >Log in</button>}
    </nav> 
  )
}

export default LoginNavbar