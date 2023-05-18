import React from "react";
import { motion } from "framer-motion";
import { XCircleIcon } from "@heroicons/react/24/outline";
import ContractDetails from "./ContractDetails";
import ContractPackages from "./ContractPackages";
import ContractPayments from "./ContractPayments";
import ContractComments from "./ContractComments";
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
      transition={{ duration: 0.75 }}
      className="rounded-lg  absolute inset-0 p-3 items-center h-screen mx-auto w-9/12 shadow-md justify-center  bg-black/50 "
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
      <div className="space-y-6">
        <div className="p-2 flex space-x-12">
          <ContractDetails
            status="In progress"
            secondPartyName="Tamara"
            brideName="Hinata Hyouga"
            groomName="Naruto Uzumaki"
            eventType="Wedding"
            eventPlace="Movenpick"
          />
          <div className="space-y-8">
            <ContractPackages />
            <ContractPayments />
          </div>
        </div>
        <ContractComments comments="Sasuke will not be able to attend Uzumaki's wedding" />
      </div>
    </motion.div>
  );
}

export default ContractWrapper;
