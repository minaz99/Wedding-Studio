import { XCircleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import NewContractSteps from "./NewContractSteps";
import ContractDetails from "./ContractDetails";
import { motion } from "framer-motion";
import Packages from "./Packages";
import ContractReview from "./ContractReview";
function CreatContractWrapper(props) {
  const [contractDetailsColor, setContractDetailsColor] = useState("white");
  const [packagesColor, setPackagesColor] = useState("white");
  const [contractReviewColor, setContractReviewColor] = useState("white");
  const [activeView, setActiveView] = useState("contract details");
  const [xi, setXi] = useState(-50);
  const [xf, setXf] = useState(0);
  const onFinishSection = () => {
    if (activeView === "contract details") {
      setActiveView("packages");
      setContractDetailsColor("#86efac");
      setXi(0);
      setXf(220);
    } else if (activeView === "packages") {
      setActiveView("contract review");
      setPackagesColor("#86efac");
      setXi(220);
      setXf(937);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0.25, x: -200, y: 0, scale: 1.2 }} //x:200 ,x:0
      animate={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
      }}
      transition={{ duration: 0.75 }}
      className="rounded-r-lg  space-y-6  p-3 items-center h-full w-11/12 shadow-md   bg-slate-600"
    >
      <div className="space-y-6">
        <NewContractSteps
          xi={xi}
          xf={xf}
          packagesColor={packagesColor}
          contractDetailsColor={contractDetailsColor}
          contractReviewColor={contractReviewColor}
        />
        {activeView === "contract details" ? (
          <ContractDetails />
        ) : activeView === "packages" ? (
          <Packages />
        ) : (
          <ContractReview />
        )}
      </div>
      <motion.div
        initial={{ opacity: 0.25, x: -50, y: 0, scale: 1 }} //x:200 ,x:0
        animate={{
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
        }}
        transition={{ duration: 1 }}
        className="flex justify-center"
      >
        <button
          onClick={() => onFinishSection()}
          className="  text-center  text-lg  font-bold rounded-md p-2 w-3/12   bg-white text-slate-600"
        >
          Next
        </button>
      </motion.div>
    </motion.div>
  );
}

export default CreatContractWrapper;
