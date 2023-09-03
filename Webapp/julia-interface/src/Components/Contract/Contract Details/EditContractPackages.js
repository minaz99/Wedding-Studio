import {
  PencilSquareIcon,
  PlusCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import ContractPackages from "./ContractPackages";
import ContractComponents from "./ContractComponents";
import PackageDelete from "./PackageDelete";
import ComponentDelete from "./ComponentDelete";
import AddComponentsWrapper from "./AddComponentsWrapper";

function EditContractPackages(props) {
  const [addComps, setAddComps] = useState(false);
  return (
    <div className="space-y-3">
      <PackageDelete
        token={props.token}
        id={props.packageID}
        contractID={props.contractID}
        setPkgID={props.setPkgID}
      />
      <ComponentDelete
        setCompsIDs={props.setCompsIDs}
        token={props.token}
        compsIDs={props.compsIDs}
        contractID={props.contractID}
      />
      {addComps ? (
        <AddComponentsWrapper
          setCompsIDs={props.setCompsIDs}
          token={props.token}
          contractID={props.contractID}
          compsIDs={props.compsIDs}
        />
      ) : (
        <div className="flex justify-center mx-auto">
          <PlusCircleIcon
            height={24}
            width={24}
            color="#475569"
            className="cursor-pointer"
            onClick={() => setAddComps(true)}
          />
        </div>
      )}
    </div>
  );
}

export default EditContractPackages;
