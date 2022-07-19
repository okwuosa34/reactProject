import React, { useState } from "react";
import "./Login.css";
import LoginNavbar from "./components/LoginNavbar";
import AccountBox from "./components/AccountBox";

function Login() {
  // When button is clicked (true) box login / account creation pops up
  // Will remove confirm password due to user selecting login
  const [showBox, setShowBox] = useState(false)
  const [signingUp, setSigningUp] = useState(true)

  const authToken = false;
  const handleClick = () => {
    console.log("clicked")
    setShowBox(true)
    setSigningUp(true)
  };

  // authToken if true will allow users to sign out, if false will allow users to create account

  // for lines 28-30 if showBox is true then AccountBox will show
  // line 29 calling setState from another component

  return (
    <div className="cover">
      <div className="loginBody">
        <LoginNavbar  
            setShowBox={setShowBox} 
            showBox={showBox} 
            setSigningUp={setSigningUp} />
        <div className="login">
          <h1 className="appName">Couples Connect©</h1>
          <button className="loginButton" onClick={handleClick}>
            {authToken ? "Signout" : "Create Account"}
          </button>
          <div className="accountBox">
              {showBox && <AccountBox setShowBox={setShowBox} signingUp={signingUp} />}
         </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
