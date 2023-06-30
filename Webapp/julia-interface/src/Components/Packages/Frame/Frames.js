import React from "react";
import FrameTableHeader from "./FrameTableHeader";
import FrameRow from "./FrameRow";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
function Frames() {
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
        <FrameRow name={1} size={"50x70"} price="50" />
        <FrameRow name={1} size={"50x70"} price="50" />
      </div>
      <PlusCircleIcon
        height={26}
        width={26}
        color="#475569"
        className="mx-auto cursor-pointer"
      />
    </div>
  );
}

export default Frames;
