import { CameraIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import ContractPackages from "./ContractPackages";
import ContractComponents from "./ContractComponents";
import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/24/outline";

function ContractPackagesWrapper(props) {
  const [editPackage, setEditPackage] = useState(false);
  return (
    <div className="space-y-3 rounded-lg p-4 w-full bg-white h-fit  ">
      <div className="flex items-center">
        <div className="font-medium text-xl flex-1">Packages</div>
        {editPackage ? (
          <XCircleIcon
            height={22}
            width={22}
            color="#475569"
            className="cursor-pointer"
            onClick={() => setEditPackage(false)}
          />
        ) : (
          <PencilSquareIcon
            height={22}
            width={22}
            color="#475569"
            className="cursor-pointer"
            onClick={() => setEditPackage(true)}
          />
        )}
      </div>
      <ContractPackages token={props.token} id={props.packageID} />

      <div className="flex space-x-6 items-center">
        <div className="text-gray-800">Add ons</div>
        <ContractComponents token={props.token} compsIDs={props.compsIDs} />
      </div>
      <div className="space-y-3">
        <div className="flex">
          <div className="flex-1"></div>
          <div className="space-x-2 flex items-center">
            <div className="font-bold">Price</div>
            <div className="rounded-md bg-blue-100 font-medium h-fit p-1">
              {props.price} KD
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContractPackagesWrapper;
