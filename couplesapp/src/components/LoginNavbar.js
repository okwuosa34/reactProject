import React from 'react'
import Banner from "../CoupleLogo.jpeg";
import './LoginNavbar.css';


// if authToken does exist log in button will render to screen
function LoginNavbar({authToken}) {
  return (
    <nav> 
        <div className="navLogo">
            <img 
            className="logo"
            src={Banner} 
            alt="couple logo"
            />
        </div>
        {!authToken && <button className="navButton">Log in</button>}
    </nav> 
  )
}

export default LoginNavbar