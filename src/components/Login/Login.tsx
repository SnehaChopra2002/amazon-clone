import "./Login.css";
import amazonLogo from "../../images/pngimg.com - amazon_PNG2.png";
import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSignIn = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    // Some firebase login
    signInWithEmailAndPassword(auth,email,password)
    .then(()=>{
      history.push('/')
    })
    .catch()
  };

  const handleRegister = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    // Some firebase registration
    createUserWithEmailAndPassword(auth, email, password)
    .then(()=>{
      // window.localStorage.setItem('emailForSignIn',email)
      console.log(auth)
      if(auth){
        history.push('/')
      }
    })
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={amazonLogo} alt="" />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form action="" onSubmit={handleSignIn}>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to Sneha's Amazon Clone Condition's of Use &
          sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads
        </p>

        <div className="separator">
          <div className="separator__line"></div>
          <span>OR</span>
          <div className="separator__line"></div>
        </div>

        <button onClick={handleRegister} className="login__registerButton">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
