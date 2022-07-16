import React, { useState } from 'react'
import './AccountBox.css';

function AccountBox({ setShowBox, signingUp }) {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [passwordConfirm, setPasswordConfirm] = useState(null)
    const [invalid, setInvalid] = useState(null)

    console.log(email, password, passwordConfirm)

    const handleClick = () => {
        setShowBox(false)
    }

// User will be able to choose sign-up or create form
// e.preventDefault to prevent page refresh
// try statement to define if password does not equal passwordConfirm error msg will occur 
// line 58-65 will only appear if users are creating account
 

  const handleSubmit = (e) => {
      e.preventDefault()
      try {
          if( signingUp && (password !== passwordConfirm)){
              setInvalid('Passwords must match!')
          }
          console.log('make database post request')
      } catch (invalid) {
          console.log(invalid)
      }
  }

  return (
    <div className="portal">
        <div className="exitButton" onClick={handleClick}>ⓧ</div>
        <h2>{signingUp ? 'CREATE ACCOUNT' : 'LOG IN'}</h2>
        <p>Please note that your use of our site constitutes your acceptance of these Terms of Use and your agreement to be bound by them.</p>
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="email"
                required={true}
                onChange={(e) => setEmail(e.target.value)}           
            />
            <input
                type="password"
                id="password"
                name="password"
                placeholder="password"
                required={true}
                onChange={(e) => setPassword(e.target.value)}           
            />
            {signingUp && <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                placeholder="confirm password"
                required={true}
                onChange={(e) => setPasswordConfirm(e.target.value)}           
            />}
            <input className="confirmButton" type="submit" />
            <p>{invalid}</p>

        </form>

        
    </div>
  )
}

export default AccountBox