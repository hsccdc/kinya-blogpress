import React from 'react';
import {useEffect, useState } from 'react';


function Registration() {
    const [username, setUsername] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [confPassword , setConfPassword] = useState('');
    const [blogName , setBlogName] = useState('');
    const [captcha , setCaptcha] = useState('');
    const[errors , setErrors] = useState({});

  
    // function to update state of username with
    // value enter by user in form
    const handleChange =(e)=>{
      setUsername(e.target.value);
    }

    // function to update state of email with value
    // enter by user in form
    const handleEmailChange =(e)=>{
      setEmail(e.target.value);
    }
      // function to update state of password with
      // value enter by user in form
    const handlePasswordChange =(e)=>{
      setPassword(e.target.value);
    }
      // function to update state of confirm password
      // with value enter by user in form
    const handleConfPasswordChange =(e)=>{
      setConfPassword(e.target.value);
    }

         // function to update state of password with
      // value enter by user in form
      const handleBlogNameChange =(e)=>{
        setBlogName(e.target.value);
      }

           // function to update state of password with
      // value enter by user in form
    const handleCaptchaChange =(e)=>{
        setCaptcha(e.target.value);
      }
    // below function will be called when user
    // click on submit button .
    const handleSubmit=(e)=>{
      if(password!=confPassword)
      {
        // if 'password' and 'confirm password'
        // does not match.
        setErrors({...errors, password : "Passwords do not match. Try again"});
        
      }


      else{
        // display alert box with user
        // 'name' and 'email' details .
        alert('Form successfully submitted');
      }
      e.preventDefault();
 
    }

        return (
            <>
                <h3>Register for Blogpress!</h3>
                <form onSubmit={(e) => {handleSubmit(e)}}>
                    <div className="mb-3">
                        <label for="username" className="form-label">Username</label>
                        <input type="text" className="form-control" name="username" id="username" aria-describedby="emailHelp" value={username} required onChange={(e) => {handleChange(e)}} />
                        <div id="userErr" className="form-text" classNameName="errorMsg"></div>
                    </div>
                    <div className="mb-3">
                        <label for="emailadd" className="form-label">Email Address</label>
                        <input type="email" className="form-control" name="emailadd" id="emailadd" aria-describedby="emailHelp" value={email} required onChange={(e) => {handleEmailChange(e)}}/>
                        <div id="emailErr" className="form-text" classNameName="errorMsg">

                        </div>
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" id="password" value={password} required onChange={(e) => {handlePasswordChange(e)}}/>
                        <div id="pwHelp" className="form-text">Weak passwords will be rejected. A weak password is ≤10 characters. A moderate password is 11-17 characters. A strong password is above 17 characters.</div>
                        <div id="pwErr" className="form-text errorMsg">{errors['password']}</div>
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" name="password" id="password" value={confPassword} required onChange={(e) => {handleConfPasswordChange(e)}}/>
                    </div>
                    <div className="mb-3">
                        <label for="blogname" className="form-label">Blog Name</label>
                        <input type="text" className="form-control" name="blogname" id="blogname" value={blogName} required onChange={(e) => {handleBlogNameChange(e)}}/>
                        <div id="blogErr" className="form-text" classNameName="errorMsg"></div>
                    </div>
                    <div className="mb-3">
                        <label for="captcha" className="form-label"><b>What is 3 x 3?</b></label>
                        <input type="text" className="form-control" name="captcha" id="captcha" value={captcha} required onChange={(e) => {handleCaptchaChange(e)}}/>
                        <div id="captchaErr" className="form-text" classNameName="errorMsg"></div>
                        <div id="captchaErr" className="form-text" classNameName="errorMsg"></div>
                    </div>
                    <input type="submit" className="btn btn-dark" value="Submit" />

                </form>
            </>

        );

    }

export default Registration;