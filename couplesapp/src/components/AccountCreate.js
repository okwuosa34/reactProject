import React, { useState } from 'react'
import LoginNavbar from "./LoginNavbar";
import "./AccountCreate.css";


// Building the form fields for users to input information 
function AccountCreate() {
    
    const handleSubmit = () => {
        console.log('submitted')
    }

    const handleChange = () => {
        console.log('changed')
    }
  
    return (
    <>
      <LoginNavbar 
        setShowBox={() => {}} 
        showBox={false}  
      />
      <div className="creation">
          <h2>CREATE ACCOUNT</h2>
          <form onSubmit={handleSubmit}>
              <section>
                  <label htmlFor="couples_name">Names</label>
                  <input 
                        id="couples_name" 
                        type="text" 
                        name="couples_name" 
                        placeholder="Names" 
                        required={true} 
                        value={""} 
                        onChange={handleChange} 
                 /> 
                 <section className="ages"> 
                  <label>Ages</label>
                  <input 
                        id="age_range" 
                        type="number" 
                        name="age_range" 
                        placeholder="Age" 
                        required={true} 
                        value={""} 
                        onChange={handleChange} 
                 /> 
                 <input 
                        id="age_range" 
                        type="number" 
                        name="age_range" 
                        placeholder="Age" 
                        required={true} 
                        value={""} 
                        onChange={handleChange} 
                 /> 
                 </section>
                 <label>Email</label>
                  <input 
                        id="email" 
                        type="text" 
                        name="email" 
                        placeholder="email" 
                        required={true} 
                        value={""} 
                        onChange={handleChange} 
                 />
                 <label>Couple Orientation</label>
                 <div className="orientations">
                    <input 
                            id="heterosexual_id" 
                            type="radio" 
                            name="orientation_id" 
                            value={"heterosexual"} 
                            onChange={handleChange}
                            checked={false} 
                    />
                    <label htmlFor="heterosexual_id">Heterosexual</label>
                    <input 
                            id="homosexual_id" 
                            type="radio" 
                            name="orientation_id"  
                            value={"homosexual"} 
                            onChange={handleChange}
                            checked={false} 
                    />
                    <label htmlFor="homosexual_id">Homosexual</label>
                    <input 
                            id="other_id" 
                            type="radio" 
                            name="orientation_id"  
                            value={"other"} 
                            onChange={handleChange}
                            checked={false} 
                    />
                    <label htmlFor="other_id">Other</label>
                 </div>

                 <label>Interested In</label>
                 <div className="orientations">  
                    <input 
                            id="open_interest" 
                            type="radio" 
                            name="orientation_interest" 
                            placeholder="Interest" 
                            required={true} 
                            value={"open"} 
                            onChange={handleChange}
                            checked={false} 
                    />
                    <label htmlFor="open_interest">Open</label> 
                    <input 
                            id="heterosexual_interest" 
                            type="radio" 
                            name="orientation_interest" 
                            placeholder="Interest" 
                            required={true} 
                            value={"heterosexual"} 
                            onChange={handleChange}
                            checked={false} 
                    />
                    <label htmlFor="heterosexual_interest">Heterosexual</label> 
                    <input 
                            id="homosexual_interest" 
                            type="radio" 
                            name="orientation_interest" 
                            placeholder="Interest" 
                            required={true} 
                            value={"homosexual"} 
                            onChange={handleChange}
                            checked={false} 
                    /> 
                    <label htmlFor="homosexual_interest">Homosexual</label>
                 </div> 

                 <label htmlFor="bio">About Us</label>
                  <input
                    id="about_us"
                    type="text"
                    name="about_us"
                    required={true}
                    placeholder="We like hiking..."
                    value={""}
                    onChange={handleChange}

                  />

                  <input type="submit" />
              </section>
              <section>
                  <label htmlFor="imgUrl">Display Image</label>
                  <input
                    type="imgUrl"
                    name="imgUrl"
                    id="imgUrl"
                    onChange={handleChange}
                    required={true}
                  />
              </section>

          </form>
      
      </div>
    </>
  );
}

export default AccountCreate