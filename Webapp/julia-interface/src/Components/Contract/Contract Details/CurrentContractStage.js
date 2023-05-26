import {
  ArrowPathIcon,
  CheckIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import React from "react";
function CurrentContractStage() {
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
        <div className="flex items-center space-x-2">
          <div className="font-bold flex  text-gray-700 rounded-full bg-green-500 w-fit p-1 items-center justify-center font-mono">
            <div className="items-center ">
              <CheckIcon height={16} width={16} color="white" />
            </div>
          </div>
          <div className="text-gray-600  ">Signed</div>
        </div>
        <div>
          <ChevronRightIcon height={16} width={16} color="#475569" />
        </div>
        <div className="flex items-center space-x-2">
          <div className="font-bold flex rounded-full bg-blue-500 w-fit p-1 items-center justify-center font-mono">
            <div className="items-center ">
              <ArrowPathIcon height={16} width={16} color="white" />
            </div>
          </div>
          <div className="text-gray-600  ">Event Finished</div>
        </div>
        <div>
          <ChevronRightIcon height={16} width={16} color="#475569" />
        </div>
        <div className="flex items-center space-x-2">
          <div className="font-bold flex rounded-full bg-gray-400 w-fit p-1 items-center justify-center font-mono">
            <div className="items-center ">
              <EllipsisHorizontalIcon height={16} width={16} color="white" />
            </div>
          </div>
          <div className="text-gray-600  ">Pics Collected</div>
        </div>
        <div>
          <ChevronRightIcon height={16} width={16} color="#475569" />
        </div>
        <div className="flex items-center space-x-2">
          <div className="font-bold flex rounded-full bg-gray-400 w-fit p-1 items-center justify-center font-mono">
            <div className="items-center ">
              <EllipsisHorizontalIcon height={16} width={16} color="white" />
            </div>
          </div>
          <div className="text-gray-600  "> Finished</div>
        </div>
        <div>
          <ChevronRightIcon height={16} width={16} color="#475569" />
        </div>
      </div>
    </div>
  );
}

export default CurrentContractStage;
