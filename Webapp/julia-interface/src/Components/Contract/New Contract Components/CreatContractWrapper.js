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
      setXf(260);
    } else if (activeView === "packages") {
      setActiveView("contract review");
      setPackagesColor("#86efac");
      setXi(260);
      setXf(519);
    }
  };

  return (
    <div className="rounded-lg  space-y-6 absolute inset-0 p-3 items-center h-screen mx-auto w-6/12 shadow-md justify-center  bg-black/80">
      <div className="flex">
        <div className="flex-1"></div>
        <XCircleIcon
          height={26}
          width={26}
          color="white"
          className="cursor-pointer"
          onClick={() => props.setShowContract(false)}
        />
      </div>
      <div className="space-y-12">
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
    </div>
  );
}

export default CreatContractWrapper;
