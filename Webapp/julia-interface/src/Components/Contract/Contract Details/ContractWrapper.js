import React from "react";
import { motion } from "framer-motion";
import { XCircleIcon } from "@heroicons/react/24/outline";
import ContractDetails from "./ContractDetails";
import ContractPackages from "./ContractPackages";
import ContractPayments from "./ContractPayments";
import ContractComments from "./ContractComments";
import CurrentContractStage from "./CurrentContractStage";
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
      className="rounded-lg overflow-y-scroll absolute inset-0 p-3 items-center h-screen mx-auto w-fit shadow-md justify-center  bg-black/50 "
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
      <div className="space-y-1">
        <div className="p-2 flex space-x-6">
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
          </div>
        </div>
        <div className=" space-y-4">
          <div className="space-x-2">
            <ContractPayments />
          </div>

          <ContractComments comments=" Sasuke will not be able to attend Uzumaki's wedding" />
          <CurrentContractStage />
        </div>
      </div>
    </motion.div>
  );
}

export default ContractWrapper;
