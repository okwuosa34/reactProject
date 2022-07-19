import React, { useState } from 'react'
import LoginNavbar from "./LoginNavbar";
import "./AccountCreate.css";


// Building the form fields for users to input information 
function AccountCreate() {

    // storing form data
    const[accountInfo, setAccountInfo] = useState({
        couple_id: '',
        couples_name: '',
        age_range1: '',
        age_range2: '',
        email: '',
        orientation_id: 'heterosexual',
        orientation_interest: 'no_preference',
        imgUrl: '',
        about_us: '',
        matches: [] 
    })
    
    const handleSubmit = () => {
        console.log('submitted')
    }

    const handleChange = (e) => {
        console.log('e', e)
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        const name = e.target.name

        // passing previous state
        setAccountInfo((prevState) => ({
            ...prevState,
            [name] : value
        }))
    }

   console.log(accountInfo) 
  
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
                  <label htmlFor="couples_name">Names (Ex. John & Jane)</label>
                  <input 
                        id="couples_name" 
                        type="text" 
                        name="couples_name" 
                        placeholder="Names" 
                        required={true} 
                        value={accountInfo.couples_name} 
                        onChange={handleChange} 
                 /> 
                 <section className="ages"> 
                  <label>Ages</label>
                  <input 
                        id="age_range1" 
                        type="text" 
                        name="age_range1" 
                        placeholder="Age" 
                        required={true} 
                        value={accountInfo.age_range1} 
                        onChange={handleChange} 
                 /> 
                 <input 
                        id="age_range2" 
                        type="text" 
                        name="age_range2" 
                        placeholder="Age" 
                        required={true} 
                        value={accountInfo.age_range2} 
                        onChange={handleChange} 
                 /> 
                 </section>
                 <label>Couple Orientation</label>
                 <div className="orientations">
                    <input 
                            id="heterosexual_id" 
                            type="radio" 
                            name="orientation_id" 
                            value={"heterosexual"} 
                            onChange={handleChange}
                            checked={accountInfo.orientation_id === 'heterosexual'} 
                    />
                    <label htmlFor="heterosexual_id">Heterosexual</label>
                    <input 
                            id="homosexual_id" 
                            type="radio" 
                            name="orientation_id"  
                            value={"homosexual"} 
                            onChange={handleChange}
                            checked={accountInfo.orientation_id === 'homosexual'} 
                    />
                    <label htmlFor="homosexual_id">Homosexual</label>
                    <input 
                            id="not_defined_id" 
                            type="radio" 
                            name="orientation_id"  
                            value={"not_defined"} 
                            onChange={handleChange}
                            checked={accountInfo.orientation_id === 'not_defined'} 
                    />
                    <label htmlFor="not_defined_id">Not Defined</label>
                 </div>

                 <label>Couple Match Preference</label>
                 <div className="orientations">  
                    <input 
                            id="no_preference_interest" 
                            type="radio" 
                            name="orientation_interest"  
                            required={true} 
                            value={"no_preference"} 
                            onChange={handleChange}
                            checked={accountInfo.orientation_interest === 'no_preference'} 
                    />
                    <label htmlFor="no_preference_interest">No Preference</label> 
                    <input 
                            id="heterosexual_interest" 
                            type="radio" 
                            name="orientation_interest" 
                            required={true} 
                            value={"heterosexual"} 
                            onChange={handleChange}
                            checked={accountInfo.orientation_interest === 'heterosexual'} 
                    />
                    <label htmlFor="heterosexual_interest">Heterosexual</label> 
                    <input 
                            id="homosexual_interest" 
                            type="radio" 
                            name="orientation_interest" 
                            required={true} 
                            value={"homosexual"} 
                            onChange={handleChange}
                            checked={accountInfo.orientation_interest === 'homosexual'} 
                    /> 
                    <label htmlFor="homosexual_interest">Homosexual</label>
                 </div> 

                 <label htmlFor="bio">Short Bio</label>
                  <input
                    id="about_us"
                    type="text"
                    name="about_us"
                    required={true}
                    placeholder="We enjoy bowling..."
                    value={accountInfo.about_us}
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
                  <div className="pictureFrame">
                      <img src={accountInfo.imgUrl} alt="display img" />
                  </div>                  
              </section>

          </form>
      
      </div>
    </>
  );
}

export default AccountCreate