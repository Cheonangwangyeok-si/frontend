import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import axios from "axios";
import "./auth.css";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Client ID:", process.env.REACT_APP_GOOGLE_CLIENT_ID);
  }, []);

  const handleLoginSuccess = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/v1/account/login");

      if (res.status === 200) {
        const { accessToken, refreshToken } = res.data;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        navigate("/");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleLoginFailure = (error) => {
    console.error("Google login failed:", error);
  };

  return (
    <div className="login-container">
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="구글로 로그인"
        onSuccess={handleLoginSuccess}
        onFailure={handleLoginFailure}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default Login;
