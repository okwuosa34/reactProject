import React from 'react'
import './AccountBox.css';

function AccountBox({ setShowBox }) {

    const handleClick = () => {
        setShowBox(false)
    }
  return (
    <div className="portal">
        <div onClick={handleClick}>ⓧ</div>
        ACCOUNT BOX 
    </div>
  )
}

export default AccountBox