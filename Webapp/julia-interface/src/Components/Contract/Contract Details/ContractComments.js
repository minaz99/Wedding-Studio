import {
  ChatBubbleBottomCenterIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import React from "react";

function ContractComments(props) {
  return (
    <div className="space-y-3 rounded-lg p-4 bg-white  h-fit ">
      <div className="flex items-center">
        <div className="font-medium flex-1 text-xl">Comments</div>
        <PencilSquareIcon
          height={22}
          width={22}
          color="#475569"
          className="cursor-pointer"
        />
      </div>
      <div className="text-gray-500">{props.comments}</div>
    </div>
  );
}

export default ContractComments;
