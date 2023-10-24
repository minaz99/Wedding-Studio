import {
  ArrowPathIcon,
  CheckIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
  PencilSquareIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import ContractStage from "./ContractStage";
import EditContractStage from "./EditContractStage";
function ContractStageWrapper(props) {
  const [editStage, setEditStage] = useState(false);
  const xCircleOnClick = () => {
    props.setRefreshContract(false);
    setEditStage(false);
  };
  return (
    <div className="space-y-3 rounded-lg p-4   bg-white h-fit  ">
      <div className="flex items-center">
        <div className="font-medium text-xl flex-1">Contract Stage</div>
        {editStage ? (
          <XCircleIcon
            height={22}
            width={22}
            color="#475569"
            className="cursor-pointer"
            onClick={() => xCircleOnClick()}
          />
        ) : (
          <PencilSquareIcon
            height={22}
            width={22}
            color="#475569"
            className="cursor-pointer"
            onClick={() => setEditStage(true)}
          />
        )}
      </div>
      <div className="space-x-4 items-center justify-center flex">
        {editStage ? (
          <EditContractStage
            token={props.token}
            id={props.id}
            stages={props.stages}
            setRefreshContract={props.setRefreshContract}
          />
        ) : (
          <ContractStage stages={props.stages} />
        )}
      </div>
    </div>
  );
}

export default ContractStageWrapper;
