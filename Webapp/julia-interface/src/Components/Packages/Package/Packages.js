import { PencilSquareIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import PackagesTableHeader from "./PackagesTableHeader";

import PackageRowWrapper from "./PackageRowWrapper";
import PackageEditableRow from "./PackageEditableRow";
import GetPackages from "../../Table/Contracts Fetching Components/GetPackages";
import {
  useCreatePackageMutation,
  useDeletePackageMutation,
  useEditPackageMutation,
} from "../../../services/api/packageSlice";

function Packages(props) {
  const [newRow, setNewRow] = useState(false);
  const [editPackage, result] = useEditPackageMutation();
  const [deletePackage, result2] = useDeletePackageMutation();
  const [createPackage, result3] = useCreatePackageMutation();
  return (
    <div className="bg-white rounded-lg p-4 w-full  space-y-6">
      <div className="text-slate-600 font-medium text-lg tracking-wider ">
        Packages
      </div>
      <div className="space-y-2">
        <PackagesTableHeader />
        {result.isLoading || result2.isLoading || result3.isLoading ? (
          <div className="text-center text-blue-400 text-xl p-4">
            Loading...
          </div>
        ) : (
          <GetPackages
            deletePackage={deletePackage}
            editPackage={editPackage}
            token={props.token}
          />
        )}
        <div className="rounded-md bg-slate-300 shadow-md  p-2 ">
          {newRow ? (
            <PackageEditableRow
              createPackage={createPackage}
              token={props.token}
              new={true}
              setNewRow={setNewRow}
              name=""
              pictures=""
              size=""
              albumCrystal=""
              magazineMini=""
              video=""
              openPV=""
              studio=""
              price=""
            />
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <PlusCircleIcon
        height={26}
        width={26}
        color="#475569"
        className="mx-auto cursor-pointer"
        onClick={() => setNewRow(true)}
      />
    </div>
  );
}

export default Packages;
