import { PencilSquareIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import MagazineTableHeader from "./MagazineTableHeader";
import MagazineRowWrapper from "./MagazineRowWrapper";
import MagazineEditableRow from "./MagazineEditableRow";

function Magazines() {
  const [newRow, setNewRow] = useState(false);
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
        <MagazineRowWrapper
          name={1}
          size={"20x30"}
          type="Magazine"
          price="250"
        />
        <MagazineRowWrapper
          name={2}
          size={"30x30"}
          type="Magazine"
          price="300"
        />
        <MagazineRowWrapper
          name={3}
          size={"10x15"}
          type="Magazine"
          price="100"
        />
        <MagazineRowWrapper name={4} size={"Mini"} type="Magazine" price="50" />
        <MagazineRowWrapper name={5} size={""} type="Ipad" price="350" />
        <div className="rounded-md bg-slate-300 shadow-md  p-2 ">
          {newRow ? (
            <MagazineEditableRow
              new={true}
              setNewRow={setNewRow}
              name=""
              size=""
              type=""
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

export default Magazines;
