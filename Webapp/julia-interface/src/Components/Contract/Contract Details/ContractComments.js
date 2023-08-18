import {
  ChatBubbleBottomCenterIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import React from "react";

function ContractComments(props) {
  return (
    <div>
      <div className="text-gray-500">{props.comments}</div>
    </div>
  );
}

export default ContractComments;
