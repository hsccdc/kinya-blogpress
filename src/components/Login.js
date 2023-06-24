import React from 'react';
import { Outlet, Link } from "react-router-dom";
  
function Login (){
    return(
    <>
     <h1>Login Here!</h1>
     <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"/>
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="rememberMe"/>
                <label class="form-check-label" for="Remember Me">Remember Me</label>
            </div>
            <div class="mb-3"><Link to="/Registration">Don't have an account?</Link></div>
            <button type="submit" class="btn btn-dark">Submit</button>
            </form>
    </>
    );
    
}
  
export default Login;