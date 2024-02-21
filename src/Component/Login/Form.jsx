import React, { useContext, useState, createContext } from "react";
import loginImg from "../Image/login.jpg";
import "./Form.css";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../Dashboard/Usercontext/Usercontext";
import axios from "axios";

const Form = () => {
  const { user } = useUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalidCredentials, setInvalidCredentials] = useState(false);

  const navigate = useNavigate();

  const handleButtonclick = async () => {
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username: email,
        password: password,
      });
      if (response.status === 200 && response.data.token) {
        localStorage.setItem("token", response.data.token);
        console.log(response);
        navigate("/dashboard");
      } else {
        alert("Login failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      setInvalidCredentials(true);
    }
  };

  // const loginUser = user.find(
  //   (user) => user.email === email && user.password === password
  // );

  // if (loginUser && loginUser.Token === "abc") {
  //   navigate("/dashboard");
  // } else {
  //   alert("lah fuck.");
  // }

  return (
    <div className="login_Container">
      <div className="login_items">
        <div>
          <img src={loginImg} alt="Login image" />
        </div>
        <div className="login_background">
          <h3 className="heading">Hello ! Welcome back.</h3>
          <p className="paragraph">
            Log in with your data that you entered
            <br /> during your registration.
          </p>
          <p>Email address</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="Email"
            className="input_field"
            placeholder="enter your email"
          ></input>
          <div className="password_txt">
            <p>Password</p>
            <p className="forgot_password_txt">Forgot Password?</p>
          </div>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="input_field"
            placeholder="enter your password"
          ></input>

          {invalidCredentials && (
            <p className="errror_message">
              Invalid credentials. Please try again
            </p>
          )}
          <button className="btn_startnow" onClick={handleButtonclick}>
            Start now !
          </button>
          <p className="paragraph">or</p>
          <div className="login_google">
            <i>
              <FcGoogle size={27} />
            </i>
            <p className="paragraph">Sign with Google</p>
          </div>
          <p className="paragraph">
            Don't have an account? <span className="signup">Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;
