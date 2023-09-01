import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import ContractPackages from "./ContractPackages";
import ContractComponents from "./ContractComponents";
import PackageDelete from "./PackageDelete";

function EditContractPackages(props) {
  return (
    <div>
      <PackageDelete
        token={props.token}
        id={props.packageID}
        contractID={props.contractID}
        setPkgID={props.setPkgID}
      />
    </div>
  );
}

export default EditContractPackages;
