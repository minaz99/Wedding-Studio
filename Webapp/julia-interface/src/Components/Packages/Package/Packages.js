import { PencilSquareIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import PackagesTableHeader from "./PackagesTableHeader";
import PackageRow from "./PackageRow";

function Packages() {
  return (
    <div className="bg-white rounded-lg p-4 w-full  space-y-6">
      <div className="text-slate-600 font-medium text-lg tracking-wider ">
        Packages
      </div>
      <div className="space-y-2">
        <PackagesTableHeader />
        <PackageRow />
        <PackageRow />
        <PackageRow />
      </div>
      <PlusCircleIcon
        height={26}
        width={26}
        color="#475569"
        className="mx-auto cursor-pointer"
      />
    </div>
  );
}

export default Packages;
