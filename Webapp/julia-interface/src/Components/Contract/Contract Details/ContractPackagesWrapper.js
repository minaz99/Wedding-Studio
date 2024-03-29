import React, { useState } from "react";
import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/24/outline";
import EditContractPackages from "./EditContractPackages";
import PackagesAndComponents from "./PackagesAndComponents";

function ContractPackagesWrapper(props) {
  const [editPackage, setEditPackage] = useState(false);
  const [pkgID, setPkgID] = useState(props.packageID);
  const [compsIDs, setCompsIDs] = useState(props.compsIDs);
  const [price, setPrice] = useState(props.price);
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
            setEditPackage={setEditPackage}
            token={props.token}
            compsIDs={compsIDs}
            packageID={pkgID}
            price={price}
            setPrice={setPrice}
            contractID={props.contractID}
            setPkgID={setPkgID}
            setCompsIDs={setCompsIDs}
          />
        ) : (
          <PackagesAndComponents
            token={props.token}
            contractID={props.contractID}
            compsIDs={compsIDs}
            packageID={pkgID}
            price={price}
          />
        )}
      </div>
    </div>
  );
}

export default ContractPackagesWrapper;
