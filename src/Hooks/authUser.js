import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthUser() {
  const navigate = useNavigate();

  const getToken = () => {
    const tokenString = localStorage.getItem("access");
    const userToken = JSON.parse(tokenString);
    return userToken;
  };

  const getUser = () => {
    const userString = localStorage.getItem("phone");
    const user_detail = JSON.parse(userString);
    return user_detail;
  };

  const getUserRole = () => {
    const roleString = localStorage.getItem("role");
    const role_name = JSON.parse(roleString);
    return role_name;
  };
  const getUserInfo = () => {
    const userInfoString = localStorage.getItem("renix_user_info");
    const user_info = JSON.parse(userInfoString);
    return user_info;
  };

  const [token, setToken] = useState(getToken());
  const [user, setUser] = useState(getUser());
  const [userRole, setUserRole] = useState(getUserRole());
  const [email, setEmail] = useState(getUser());
  const [userInfo, setUserInfo] = useState(getUserInfo());

  const saveToken = (email, access, role, userInfo, userIp) => {
    localStorage.setItem("access", JSON.stringify(access));
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("role", JSON.stringify(role));
    localStorage.setItem("renix_user_info", JSON.stringify(userInfo));
    localStorage.setItem("user_ip", JSON.stringify(userIp));

    setEmail(email);
    setToken(token);
    setUserInfo(userInfo);
    setUser(user);
    setUserRole(userRole);
    // setUserIp(userIp);
    navigate("/");
  };

  const logout = () => {
    console.log(userInfo);
    localStorage.clear();
    fetch(
      ` https://renixserver.niroghealthplus.com/api/v1/user/delete-ip/${userInfo?._id}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data?.modifiedCount === 1) {
          navigate("/");
          window.location.reload();
        }
      });
  };

  const http = axios.create({
    baseURL: " https://renixserver.niroghealthplus.com/api/v1",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return {
    setToken: saveToken,
    token,
    userRole,
    getToken,
    http,
    email,
    getUserInfo,
    userInfo,
    logout,
    // userIp,
  };
}
