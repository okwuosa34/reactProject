import React from 'react'
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { brown } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import './Payments.css';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.PUBLISHABLE_KEY);

function Payments({ children, title }) {
  return (
    <div>
        <Link to="/">
        <IconButton>
          <ArrowBackIosIcon sx={{ color: brown[200] }} fontSize="large" className="header__icon" />
        </IconButton>
        </Link>
        
        <form className="card" id="payment-form">
            <label htmlFor="card-element">Card</label>
            <Elements id="card-element" stripe={stripePromise}>{children}</Elements>
            <button>Pay</button>
        </form>
        

        
    </div>
  );
}

export default Payments;