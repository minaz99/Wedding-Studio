import React from "react";
import { motion } from "framer-motion";
import { XCircleIcon } from "@heroicons/react/24/outline";
import ContractDetails from "./ContractDetails";
import ContractPackages from "./ContractPackages";
import ContractPayments from "./ContractPayments";
import ContractComments from "./ContractComments";
import CurrentContractStage from "./CurrentContractStage";
import ContractDetailsNewUI from "./ContractDetailsNewUI";
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
      className="rounded-lg overflow-y-scroll absolute inset-0 p-3 items-center  mx-auto w-fit shadow-md justify-center  bg-slate-600/50 "
    >
      <div className="flex p-2 ">
        <div className="flex-1 "></div>
        <XCircleIcon
          onClick={() => props.resetValues()}
          height={30}
          className=" cursor-pointer"
          width={30}
          color="white"
        />
      </div>
      <div className=" space-y-4">
        {
          <ContractDetails
            status="In progress"
            secondPartyName="Tamara"
            brideName="Hinata Hyouga"
            groomName="Naruto Uzumaki"
            eventType="Wedding"
            eventPlace="Movenpick"
          />
        }
        {/*}
          <ContractDetailsNewUI
            secondPartyName="Tamara"
            brideName="Hinata Hyouga"
            eventType="Wedding"
            eventLocation="Movenpick"
            eventDate="24/06/1998"
    />*/}
        <ContractPackages />
        <div className="space-x-2">
          <ContractPayments />
        </div>

        <ContractComments comments=" Sasuke will not be able to attend Uzumaki's wedding" />
        <CurrentContractStage />
      </div>
    </motion.div>
  );
}

export default ContractWrapper;
