import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import ContractDetails from "./ContractDetails";
import EditContractDetails from "./EditContractDetails";

function ContractDetailsWrapper(props) {
  const [editContract, setEditContract] = useState(false);

  const hasAddonsForVideo = (compID, compsIDs) => {
    let IDsArray = compsIDs.split(",").filter((id) => id !== "," && id !== "");
    return IDsArray.indexOf(compID);
  };

  return (
    <div className="space-y-3 rounded-lg shadow-md p-4  w-full bg-white h-fit  ">
      <div className="flex items-center">
        <div className="font-medium text-xl flex-1">Details</div>
        {editContract ? (
          <XCircleIcon
            height={22}
            width={22}
            color="#475569"
            className="cursor-pointer"
            onClick={() => setEditContract(false)}
          />
        ) : (
          <PencilSquareIcon
            height={22}
            width={22}
            color="#475569"
            className="cursor-pointer"
            onClick={() => setEditContract(true)}
          />
        )}
      </div>
      {editContract ? (
        <EditContractDetails
          token={props.token}
          id={props.id}
          hasAddonsForVideo={hasAddonsForVideo}
          setEditContract={setEditContract}
        />
      ) : (
        <ContractDetails
          hasAddonsForVideo={hasAddonsForVideo}
          token={props.token}
          id={props.id}
        />
      )}
    </div>
  );
}

export default ContractDetailsWrapper;
