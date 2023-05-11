import React from "react";
import { motion } from "framer-motion";
import { XCircleIcon } from "@heroicons/react/24/outline";
import ContractDetails from "./ContractDetails";
function ContractWrapper(props) {
  return (
    <motion.div
      initial={{ opacity: 0.25, x: 0, y: -200, scale: 1.2 }} //x:200 ,x:0
      animate={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
      }}
      transition={{ duration: 1 }}
      className="rounded-lg  absolute inset-0 p-3 items-center h-screen mx-auto w-fit justify-center  shadow-lg bg-black/50"
    >
      <div className="flex ">
        <div className="flex-1 "></div>
        <XCircleIcon
          onClick={() => props.resetValues()}
          height={25}
          className=" cursor-pointer"
          width={25}
          color="white"
        />
      </div>
      <div className="p-2">
        <ContractDetails />
      </div>
    </motion.div>
  );
}

export default ContractWrapper;
