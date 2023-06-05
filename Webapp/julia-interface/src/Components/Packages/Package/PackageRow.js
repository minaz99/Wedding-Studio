import { CheckCircleIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import React from "react";

function PackageRow() {
  return (
    <div className="rounded-md  bg-slate-300 shadow-md  p-2 ">
      <div className="flex  justify-center  items-center space-x-8">
        <div className="text-slate-600 flex-1 text-center">1</div>
        <div className="text-slate-600 flex-1 text-center">130</div>
        <div className="text-slate-600 flex-1 text-center">20x30</div>
        <div className="flex-1 ">
          <CheckCircleIcon
            className="mx-auto "
            height={20}
            width={20}
            color="#475569"
          />
        </div>
        <div className=" flex-1 text-center">
          <CheckCircleIcon
            className="mx-auto"
            height={20}
            width={20}
            color="#475569"
          />
        </div>
        <div className="flex-1 text-center items-center  ">
          <CheckCircleIcon
            className="mx-auto"
            height={20}
            width={20}
            color="#475569"
          />
        </div>
        <div className="flex-1 text-center">
          <div>
            <CheckCircleIcon
              className="mx-auto"
              height={20}
              width={20}
              color="#475569"
            />
          </div>
        </div>
        <div className="text-slate-600  flex-1 text-center ">650 KD</div>
        <div className="flex-1 text-center">
          <PencilSquareIcon
            height={20}
            width={20}
            color="gray"
            className="cursor-pointer mx-auto  "
          />
        </div>
      </div>
    </div>
  );
}

export default PackageRow;
