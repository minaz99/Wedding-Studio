import React from "react";
import { motion } from "framer-motion";
import { XCircleIcon } from "@heroicons/react/24/outline";
import ContractDetails from "./ContractDetails";
import ContractPackages from "./ContractPackages";
import ContractPayments from "./ContractPayments";
import ContractComments from "./ContractComments";
import CurrentContractStage from "./CurrentContractStage";
import { useGetContractByIDQuery } from "../../../services/api/contractSlice";

function ContractWrapper(props) {
  const { data, isLoading, isError, isSuccess } = useGetContractByIDQuery({
    token: props.token,
    id: props.contractID,
  });

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
      className="rounded-lg z-10 overflow-y-scroll absolute inset-0 p-3 items-center  mx-auto w-fit shadow-md justify-center  bg-slate-600/50 "
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
        {isLoading ? (
          <div>Loading details...</div>
        ) : isError ? (
          <div>Error getting contract details</div>
        ) : isSuccess ? (
          <ContractDetails
            status={data.contract.contractstatus}
            secondPartyName={data.contract.secondpartyname}
            brideName={data.contract.bridename}
            groomName={data.contract.groomname}
            eventType={data.contract.eventtype}
            eventPlace={data.contract.eventlocation}
            photographer={data.contract.photographer}
            video={data.contract.video}
            eventDate={data.contract.eventdate}
            price={data.contract.price}
            civilID={data.contract.civilid}
            phone1={data.contract.phone1}
            phone2={data.contract.phone2}
            contractStatus={data.contract.contractstatus}
          />
        ) : (
          <div></div>
        )}

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
