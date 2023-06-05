import { PencilSquareIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import MagazineTableHeader from "./MagazineTableHeader";
import MagazineRow from "./MagazineRow";

function Magazines() {
  return (
    <div className="bg-white rounded-lg p-4   space-y-6">
      <div
        className="text-slate-600 font-medium text-lg tr
      acking-wider "
      >
        Magazines
      </div>
      <div className="space-y-2">
        <MagazineTableHeader />
        <MagazineRow name={1} size={"20x30"} type="Magazine" price="250" />
        <MagazineRow name={2} size={"30x30"} type="Magazine" price="300" />
        <MagazineRow name={3} size={"10x15"} type="Magazine" price="100" />
        <MagazineRow name={4} size={"Mini"} type="Magazine" price="50" />
        <MagazineRow name={5} size={""} type="Ipad" price="350" />
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

export default Magazines;
