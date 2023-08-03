import React, { useState } from "react";
import Login from "./Login";
import Home from "./Home";
import { store } from "../store";
function MainWrapper() {
  const [userData, setUserData] = useState({});
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn === true ? (
    <Home userData={userData} />
  ) : (
    <Login setIsLoggedIn={setIsLoggedIn} setUserData={setUserData} />
  );
}

export default MainWrapper;
