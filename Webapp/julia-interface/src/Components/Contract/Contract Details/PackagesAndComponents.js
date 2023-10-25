import React from "react";
import ContractPackages from "./ContractPackages";
import ContractComponents from "./ContractComponents";

function PackagesAndComponents(props) {
  return (
    <div className="space-y-3">
      <div className="space-y-3">
        <ContractPackages token={props.token} id={props.packageID} />

        <div className="flex space-x-6 items-center">
          <div className="text-gray-800">Add ons</div>
          <ContractComponents
            token={props.token}
            id={props.contractID}
            compsIDs={props.compsIDs}
          />
        </div>
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

export default PackagesAndComponents;
