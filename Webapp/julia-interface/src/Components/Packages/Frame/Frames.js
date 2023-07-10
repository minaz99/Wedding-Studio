import React, { useState } from "react";
import FrameTableHeader from "./FrameTableHeader";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import FrameRowWrapper from "./FrameRowWrapper";
import FrameEditableRow from "./FrameEditableRow";
function Frames() {
  const [newRow, setNewRow] = useState(false);
  return (
    <div className="bg-white rounded-lg p-4   space-y-6">
      <div
        className="text-slate-600 font-medium text-lg tr
      acking-wider "
      >
        Frames
      </div>
      <div className="space-y-2">
        <FrameTableHeader />
        <FrameRowWrapper name={1} size={"50x70"} price="50" />
        <FrameRowWrapper name={1} size={"50x70"} price="50" />
        <div className="rounded-md bg-slate-300 shadow-md  p-2 ">
          {newRow ? (
            <FrameEditableRow
              new={true}
              setNewRow={setNewRow}
              name=""
              size=""
              price=""
            />
          ) : (
            <div></div>
          )}
        </div>
      </div>

      <PlusCircleIcon
        height={26}
        width={26}
        color="#475569"
        className="mx-auto cursor-pointer"
        onClick={() => setNewRow(true)}
      />
    </div>
  );
}

export default Frames;
