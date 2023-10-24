import React from "react";
import { motion } from "framer-motion";
import { XCircleIcon } from "@heroicons/react/24/outline";
import ContractDetails from "./ContractDetails";
import ContractPackages from "./ContractPackagesWrapper";
import ContractPayments from "./ContractPayments";
import ContractComments from "./ContractComments";
import { useGetContractByIDQuery } from "../../../services/api/contractSlice";
import ContractPackagesWrapper from "./ContractPackagesWrapper";
import ContractStageWrapper from "./ContractStageWrapper";
import ContractDetailsWrapper from "./ContractDetailsWrapper";
import ContractCommentsWrapper from "./ContractCommentsWrapper";

function ContractWrapper(props) {
  const { data, isLoading, isError, isSuccess } = useGetContractByIDQuery(
    {
      token: props.token,
      id: props.contractID,
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );

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

      {isLoading ? (
        <div>Loading details...</div>
      ) : isError ? (
        <div>Error getting contract details</div>
      ) : isSuccess ? (
        <div className=" space-y-4">
          <ContractDetailsWrapper token={props.token} id={props.contractID} />

          <ContractPackagesWrapper
            token={props.token}
            id={props.contractID}
            packageID={data.contract.packageid}
            price={data.contract.price}
            compsIDs={data.contract.componentids}
            contractID={data.contract.id}
          />
          <div className="space-x-2">
            <ContractPayments token={props.token} id={props.contractID} />
          </div>

          <ContractCommentsWrapper
            token={props.token}
            id={props.contractID}
            comments={data.contract.comments}
          />
          <ContractStageWrapper
            token={props.token}
            id={props.contractID}
            stages={data.stages}
          />
        </div>
      ) : (
        <div></div>
      )}
    </motion.div>
  );
}

export default ContractWrapper;
