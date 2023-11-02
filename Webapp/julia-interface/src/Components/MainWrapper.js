import React, { useState } from "react";
import Login from "./Login";
import Home from "./Home";
import ContractPDF from "./Contract/New Contract Components/ContractPDF";
function MainWrapper() {
  const [userData, setUserData] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn === true ? (
    <Home setIsLoggedIn={setIsLoggedIn} userData={userData} />
  ) : (
    <Login setIsLoggedIn={setIsLoggedIn} setUserData={setUserData} />
  );
}

export default MainWrapper;
