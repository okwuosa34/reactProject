import React, { useState } from "react";
import "./Login.css";
import LoginNavbar from "./components/LoginNavbar";
import AccountBox from "./components/AccountBox";

function Login() {
  // When button is clicked (true) box login / account creation pops up
  const [showBox, setShowBox] = useState(false);

  const authToken = false;
  const handleClick = () => {
    console.log("clicked");
    setShowBox(true);
  };

  // authToken if true will allow users to sign out, if false will allow users to create account

  // for lines 30-32 if showBox is true then AccountBox will show
  // line 31 calling setState from another component

  return (
    <div className="cover">
      <div className="loginBody">
        <LoginNavbar authToken={authToken} setShowBox={setShowBox} showBox={showBox} />
        <div className="login">
          <h1>Couples Connect©</h1>
          <button className="loginButton" onClick={handleClick}>
            {authToken ? "Signout" : "Create Account"}
          </button>
          <div className="accountBox">
              {showBox && <AccountBox setShowBox={setShowBox} />}
         </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
