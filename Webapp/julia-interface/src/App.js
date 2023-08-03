import { useState } from "react";
import "./App.css";
import TableWrapper from "./Components/Table/TableWrapper";
import ContractWrapper from "./Components/Contract/Contract Details/ContractWrapper";

import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import MainWrapper from "./Components/MainWrapper";
import Login from "./Components/Login";
function App() {
  return (
    <div className="  bg-gray-300 h-screen  ">
      <div className="justify-evenly ">
        <MainWrapper />
      </div>
    </div>
  );
}

export default App;
