import { CheckCircleIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import React from "react";

function MagazineRow(props) {
  return (
    <div className="rounded-md  bg-slate-300 shadow-md  p-2 ">
      <div className="flex  justify-center  items-center space-x-8">
        <div className="text-slate-600 flex-1 text-center">{props.name}</div>
        <div className="text-slate-600 flex-1 text-center">{props.size}</div>
        <div className="text-slate-600 flex-1 text-center">{props.type}</div>

        <div className="text-slate-600  flex-1 text-center ">{props.price}</div>
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

export default MagazineRow;
