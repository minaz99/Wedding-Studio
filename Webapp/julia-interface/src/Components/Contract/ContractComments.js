import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline";
import React from "react";

function ContractComments(props) {
  return (
    <div className="space-y-3 rounded-lg p-4 bg-white h-fit ">
      <div className="flex space-x-2 items-center">
        <div className="text-medium flex">Comments</div>
        <ChatBubbleBottomCenterIcon height={22} width={22} color="#84cc16" />
      </div>
      <div className="text-gray-500">{props.comments}</div>
    </div>
  );
}

export default ContractComments;
