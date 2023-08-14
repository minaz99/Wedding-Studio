import {
  ArrowPathIcon,
  CheckIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import ContractStage from "./ContractStage";
function ContractStageWrapper(props) {
  return (
    <div className="space-y-3 rounded-lg p-4   bg-white h-fit  ">
      <div className="flex items-center">
        <div className="font-medium text-xl flex-1">Contract Stage</div>
        <PencilSquareIcon
          height={22}
          width={22}
          color="#475569"
          className="cursor-pointer"
        />
      </div>
      <div className="space-x-4 items-center justify-center flex">
        <ContractStage stage={props.stage} />
      </div>
    </div>
  );
}

export default ContractStageWrapper;
