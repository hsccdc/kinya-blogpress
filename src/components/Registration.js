import React from 'react';
import { useEffect, useState } from 'react';
import { getUser } from '../services/user';
import { getBlog } from '../services/blogs';

function Registration() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [blogName, setBlogName] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [errors, setErrors] = useState({});
  const [formValues, setFormValues] = useState (
    {
      username: '',
      email: '',
      password: '',
      blogName: '',
    }
  );
  
  // function to update state of username with
  // value enter by user in form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  // function to update state of confirm password
  // with value enter by user in form
  const handleConfPasswordChange = (e) => {
    setConfPassword(e.target.value);
  }

  // function to update state of password with
  // value enter by user in form
  const handleCaptchaChange = (e) => {
    setCaptcha(e.target.value);
  }
  // below function will be called when user
  // click on submit button .
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    const captchaKey = 9;

    if (formValues.password != confPassword) {
      // if 'password' and 'confirm password'
      // does not match.
      newErrors["password"] = "Passwords do not match. Try again.";
    }
  
    if (formValues.password.length <= 10) {
      // if 'password' and 'confirm password'
      // does not match.
      newErrors["passwordLength"] = "Passwords must be at least 10 characters.";
    }
    
    //Check if username already exists in the API call
    if (formValues.username) {
      try {
        const user = await getUser(formValues.username);

        if (user["success"]) {
          newErrors["userExists"] = "Username already in use.";
        }
      } catch (error) {
        //Handle any error that occured during the API call
        console.error(error);
      }
    }
    //Check if email already exists in the API call
    if (formValues.email) {
      try {
        const user = await getUser(formValues.email);

        if (user["success"]) {
          newErrors["emailExists"] = "Email address already in use.";
        }
      } catch (error) {
        //Handle any error that occured during the API call
        console.error(error);
      }
    }
    //Check if username already exists in the API call
    if (formValues.blogName) {
      try {
        const user = await getBlog(formValues.blogName);

        if (user["success"]) {
          newErrors["blogExists"] = "Blog name already in use..";
        }
      } catch (error) {
        //Handle any error that occured during the API call
        console.error(error);
      }
    }
    //captcha verification
    if (captcha) {
      if(captcha != captchaKey)
      {
        newErrors["captcha"] = "Captcha response is incorrect. Try again.";
      }
    }

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
  }

  else {
    // display alert box with user
    // 'name' and 'email' details .
    //pass form values as object for processing
    //formValues.username = username;

    alert('Form successfully submitted');
  }
}

return (
  <>
    <h3>Register for Blogpress!</h3>
    <form method="POST" onSubmit={(e) => { handleSubmit(e) }}>
      <div className="mb-3">
        <label for="username" className="form-label">Username</label>
        <input type="text" className="form-control" name="username" id="username" aria-describedby="emailHelp" value={formValues.username} required onChange={(e) => { handleChange(e) }} />
        <div id="userErr" className="form-text text-danger fw-bold">{errors['userExists']}</div>
      </div>
      <div className="mb-3">
        <label for="emailadd" className="form-label">Email Address</label>
        <input type="email" className="form-control" name="email" id="emailadd" aria-describedby="emailHelp" value={formValues.email} required onChange={(e) => { handleChange(e) }} />
        <div id="emailErr" className="form-text text-danger fw-bold">
       {errors['emailExists']}
        </div>
      </div>
      <div className="mb-3">
        <label for="password" className="form-label">Password</label>
        <input type="password" className="form-control" name="password" id="password" value={formValues.password} required onChange={(e) => { handleChange(e) }} />
        <div id="pwHelp" className="form-text">Weak passwords will be rejected. A weak password is ≤10 characters. A moderate password is 11-17 characters. A strong password is above 17 characters.</div>
        <div id="pwErr" className="form-text text-danger fw-bold"> {errors['passwordLength']}</div>
      </div>
      <div className="mb-3">
        <label for="password" className="form-label">Confirm Password</label>
        <input type="password" className="form-control" name="password2" id="password" value={confPassword} required onChange={(e) => { handleConfPasswordChange(e) }} />
        <div id="pwErr" className="form-text text-danger fw-bold">{errors['password']} </div>
      </div>
      <div className="mb-3">
        <label for="blogname" className="form-label">Blog Name</label>
        <input type="text" className="form-control" name="blogName" id="blogname" value={formValues.blogName} required onChange={(e) => { handleChange(e) }} />
        <div id="blogErr" className="form-text" classNameName="errorMsg"></div>
      </div>
      <div className="mb-3">
        <label for="captcha" className="form-label"><b>What is 3 x 3?</b></label>
        <input type="text" className="form-control" name="captcha" id="captcha" value={captcha} required onChange={(e) => { handleCaptchaChange(e) }} />
        <div id="captchaErr" className="form-text text-danger fw-bold">{errors["captcha"]}</div>
      </div>
      <input type="submit" className="btn btn-dark" value="Submit" />

    </form>
  </>

);

}

export default Registration;