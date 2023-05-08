import { useState } from "react";
import "./App.css";
import ContractView from "./Components/Table/ContractView";
import TableWrapper from "./Components/Table/TableWrapper";
import { motion } from "framer-motion";
function App() {
  const [showContract, setShowContract] = useState(false);
  const [initialX, setIntialX] = useState(0);
  const [finalX, setFinalX] = useState(0);
  const pressedRow = () => {
    setIntialX(75);
    setFinalX(-150);
    setShowContract(true);
  };
  const resetValues = () => {
    setIntialX(0);
    setFinalX(0);
    setShowContract(false);
  };
  return (
    <div className="  bg-gray-300 h-screen ">
      <div className="flex">
        <TableWrapper
          initialX={initialX}
          finalX={finalX}
          pressedRow={pressedRow}
        />
        {showContract ? (
          <ContractView resetValues={resetValues} />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default App;
