import React, { useState } from "react";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
function CompsRowInfo(props) {
  return (
    <div className="flex  justify-center  items-center space-x-8">
      <div className="text-slate-600 flex-1 text-center">{props.name}</div>
      <div className="text-slate-600 flex-1 text-center">{props.type}</div>
      <div className="text-slate-600  flex-1 text-center ">{props.price}</div>
      <div className="flex-1 text-center">
        <PencilSquareIcon
          height={20}
          width={20}
          color="gray"
          className="cursor-pointer mx-auto  "
          onClick={() => props.setEditRow(true)}
        />
      </div>
    </div>
  );
}

export default CompsRowInfo;
