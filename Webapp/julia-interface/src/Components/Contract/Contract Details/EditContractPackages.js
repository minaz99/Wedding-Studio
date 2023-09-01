import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

function EditContractPackages(props) {
  return (
    <div className="flex space-x-2 items-center">
      <div className="flex items-center">
        <div className="font-medium text-xl flex-1">Packages</div>
        <XCircleIcon
          height={22}
          width={22}
          color="#475569"
          className="cursor-pointer"
          onClick={() => props.setEditPackage(false)}
        />
      </div>
    </div>
  );
}

export default EditContractPackages;
