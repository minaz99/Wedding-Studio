import React from "react";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
function FrameRow() {
  return (
    <div className="rounded-md  bg-slate-300 shadow-md  p-2 ">
      <div className="flex  justify-center  items-center space-x-8">
        <div className="text-slate-600 flex-1 text-center">1</div>
        <div className="text-slate-600 flex-1 text-center">50x70</div>

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

export default FrameRow;
