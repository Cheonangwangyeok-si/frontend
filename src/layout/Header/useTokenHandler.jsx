import { useNavigate } from "react-router-dom";
import axios from "axios";
const useTokenHandler = () => {
  const navigate = useNavigate();

  const config = {
    headers: {
      Authorization: `${localStorage.getItem("accessToken")}`,
    }
  };

  const config2 = {
    headers: {
      Authorization: `${localStorage.getItem("accessToken")}`,
      refreshToken: `${localStorage.getItem("refreshToken")}`,
    },
  };

  const handlelogin_tk2 = async () => {
    try {
      const res = await axios.get("/api/v1/checkToken", config2);
      console.log(res);
    } catch (err) {
      console.log(err);
      if (err.response.data === "refreshToken 만료") {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        navigate("/");
      } else if (err.response.data === "Access 토큰 발급") {
        localStorage.setItem("accessToken", err.response.headers.authorization);
        console.log("Access token 재발급");
      }
    }
  };

  const checkToken = async () => {
    try {
      console.log(localStorage.getItem("accessToken"));
      const res = await axios.get("/api/v1/checkToken", config);
      console.log(res);
    } catch (err) {
      if (err.response?.data === "만료된 토큰") {
        console.log("만료된 토큰");
        await handlelogin_tk2();
      } else {
        navigate("/");
      }
    }
  };

  return { handlelogin_tk2, checkToken, config };
};
export default useTokenHandler;