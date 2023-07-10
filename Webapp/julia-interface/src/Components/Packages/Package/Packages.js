import { PencilSquareIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import PackagesTableHeader from "./PackagesTableHeader";

import PackageRowWrapper from "./PackageRowWrapper";
import PackageEditableRow from "./PackageEditableRow";

function Packages() {
  const [newRow, setNewRow] = useState(false);
  return (
    <div className="bg-white rounded-lg p-4 w-full  space-y-6">
      <div className="text-slate-600 font-medium text-lg tracking-wider ">
        Packages
      </div>
      <div className="space-y-2">
        <PackagesTableHeader />
        <PackageRowWrapper
          name={1}
          pictures={130}
          size={"20x30"}
          magazineMini={true}
          video={true}
          openPV={true}
          studio={true}
          price={650}
        />
        <PackageRowWrapper
          name={1}
          pictures={130}
          size={"20x30"}
          magazineMini={true}
          video={true}
          openPV={true}
          studio={true}
          price={650}
        />
        <PackageRowWrapper
          name={1}
          pictures={130}
          size={"20x30"}
          magazineMini={true}
          video={true}
          openPV={true}
          studio={true}
          price={650}
        />
        <div className="rounded-md bg-slate-300 shadow-md  p-2 ">
          {newRow ? (
            <PackageEditableRow
              new={true}
              setNewRow={setNewRow}
              name=""
              pictures=""
              size=""
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
