import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import ContractPackages from "./ContractPackages";
import ContractComponents from "./ContractComponents";
import PackageDelete from "./PackageDelete";
import ComponentDelete from "./ComponentDelete";

function EditContractPackages(props) {
  return (
    <div className="space-y-3">
      <PackageDelete
        token={props.token}
        id={props.packageID}
        contractID={props.contractID}
        setPkgID={props.setPkgID}
      />
      {/*<ComponentDelete token={props.token} compsIDs={props.compsIDs} />*/}
    </div>
  );
}

export default EditContractPackages;
