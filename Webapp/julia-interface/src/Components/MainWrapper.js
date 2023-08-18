import React, { useState } from "react";
import Login from "./Login";
import Home from "./Home";
import { store } from "../store";
import ContractPDF from "./Contract/New Contract Components/ContractPDF";
import DownloadPDF from "./Contract/New Contract Components/DownloadPDF";
function MainWrapper() {
  const [userData, setUserData] = useState({});
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn === true ? (
    <Home userData={userData} />
  ) : (
    <Login setIsLoggedIn={setIsLoggedIn} setUserData={setUserData} />
    /*
    <ContractPDF
      brideName={"Hana El Zahed"}
      groomName={"Selim Ahmed"}
      secondPartyName={"Nasser el Khalify"}
      eventType={"Wedding"}
      eventLocation={"Movenpick"}
      eventDate={"2023/8/4"}
      civilID={"123456789"}
      phone1={"66450689"}
      packageName={"Package 1"}
      total={650}
      packageDetails={""}
      componentsSelected={[]}
      discount={150}
      />*/
    //<DownloadPDF />
  );
}

export default MainWrapper;
