import React from 'react';
import './Signup.css';
const Signup = () => {
  return (
    <body>
    <div class="container">
      <div class="form">
        <div class="btn">
          <button class="loginBtn">SIGN UP</button>
        </div>
        <form class="signUp" action="" method="get">
          <div class="formGroup">
            <input type="text" id="userName" placeholder="User Name" autocomplete="off"></input>
          </div>
          <div class="formGroup">
            <input type="email" placeholder="Email ID" name="email" required autocomplete="off"></input>
          </div>
          <div class="formGroup">
            <input type="password" id="password" placeholder="Password" required autocomplete="off"></input>
          </div>
          <div class="formGroup">
            <input type="password" id="confirmPassword" placeholder="Confirm Password" required autocomplete="off"></input>
          </div>
          <div class="checkBox">
            <input type="checkbox" name="checkbox" id="checkbox"></input>
            <span class="text">I agree with term & conditions</span>
          </div>
          <div class="formGroup">
            <button type="button" class="btn2">REGISTER</button>
          </div>
   
        </form>
          
       </div>
    </div>
   
    <script src="jQuery.js"></script>
  </body>
  );
};

export default Signup;