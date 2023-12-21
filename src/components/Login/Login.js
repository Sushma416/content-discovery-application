import React from 'react';
import './Login.css';
const Login = () => {
  return (
    <body>
  <div class="container">
    <div class="form">
      <div class="btn">
        <button class="loginBtn">LOG IN</button>
      </div>
      <form class="signUp" action="addtocart.html" method="get">
       <div class="formGroup">
          <input type="email" placeholder="Email ID" name="email" required autocomplete="off"></input>
        </div>
        <div class="formGroup">
          <input type="password" id="password" placeholder="Password" required autocomplete="off"></input>
        </div>
        <div class="checkBox">
          <input type="checkbox" name="checkbox" id="checkbox"></input>
          <span class="text">I agree with term & conditions</span>
        </div>
        <div class="formGroup">
          <center><a href="C:\Users\praka\OneDrive\Desktop\devpoint-react-js-simple-website-for-beginners-master\src\components\Login\Signup.js" className="btn2">LOG IN</a></center>
        </div>
 
      </form>
        
      
      
    </div>
  </div>
 
  <script src="jQuery.js"></script>
</body>
  );
};

export default Login;