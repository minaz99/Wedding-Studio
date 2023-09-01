import { CameraIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import ContractPackages from "./ContractPackages";
import ContractComponents from "./ContractComponents";
import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/24/outline";
import EditContractPackages from "./EditContractPackages";
import PackagesAndComponents from "./PackagesAndComponents";

function ContractPackagesWrapper(props) {
  const [editPackage, setEditPackage] = useState(false);
  return (
    <div className="rounded-lg p-4 w-full bg-white h-fit  ">
      <div className="space-y-2">
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
        {editPackage ? (
          <EditContractPackages
            token={props.token}
            compsIDs={props.compsIDs}
            packageID={props.packageID}
            price={props.price}
            contractID={props.contractID}
          />
        ) : (
          <PackagesAndComponents
            token={props.token}
            compsIDs={props.compsIDs}
            packageID={props.packageID}
            price={props.price}
          />
        )}
      </div>
    </div>
  );
}

export default ContractPackagesWrapper;
