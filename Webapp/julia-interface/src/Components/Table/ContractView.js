import React from "react";
import { motion } from "framer-motion";
import { XCircleIcon } from "@heroicons/react/24/outline";
function ContractView(props) {
  return (
    <motion.div
      initial={{ opacity: 0.25, x: 200, scale: 1.2 }}
      animate={{
        opacity: 1,
        x: -315,
        scale: 1,
      }}
      transition={{ duration: 1.5 }}
      className="rounded-lg space-y-96  p-3  items-center h-screen mx-4  shadow-lg bg-pink-100"
    >
      {" "}
      <div className="flex ">
        <div className="flex-1 "></div>
        <XCircleIcon
          onClick={() => props.resetValues()}
          height={25}
          className=" cursor-pointer"
          width={25}
          color="black"
        />
      </div>
      <div className="font-semibold text-black text-center">
        Display Contractd
      </div>
    </motion.div>
  );
}

export default ContractView;
