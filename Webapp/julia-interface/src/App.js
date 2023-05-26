import { useState } from "react";
import "./App.css";
import TableWrapper from "./Components/Table/TableWrapper";
import ContractWrapper from "./Components/Contract/Contract Details/ContractWrapper";

import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
function App() {
  const [showContract, setShowContract] = useState(false);
  const [initialX, setIntialX] = useState(0);
  const [finalX, setFinalX] = useState(0);
  const pressedRow = () => {
    setIntialX(0);
    setFinalX(0); //finalX: -250, InitialX: 0 //we need to animate the whole component (Table + Contract so that they move together in the same transition )
    setShowContract(true);
  };
  const resetValues = () => {
    setIntialX(0);
    setFinalX(0);
    setShowContract(false);
  };
  return (
    <div className="  bg-gray-300 h-screen  ">
      <div className="justify-evenly ">
        <TableWrapper
          initialX={initialX}
          finalX={finalX}
          pressedRow={pressedRow}
        />
        {showContract ? (
          <ContractWrapper resetValues={resetValues} />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default App;
