import React, { useState } from "react";
import CompsTableHeader from "./CompsTableHeader";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import CompsRowWrapper from "./CompsRowWrapper";
import CompsEditableRow from "./CompsEditableRow";
function Comps() {
  const [newRow, setNewRow] = useState(false);
  return (
    <div className="bg-white rounded-lg p-4   space-y-6">
      <div
        className="text-slate-600 font-medium text-lg tr
    acking-wider "
      >
        Components
      </div>
      <div className="space-y-2">
        <CompsTableHeader />
        <CompsRowWrapper name={"Album Crystal"} type={"Album"} price="50" />
        <CompsRowWrapper name={"Usb Photo"} type={"E-Photos"} price="50" />
        <CompsRowWrapper
          name={"Video Extra (Double Crane)"}
          type={"Video"}
          price="400"
        />
        <CompsRowWrapper name={"Camera Crane"} type={"Video"} price="300" />
        <CompsRowWrapper name={"Hanging Camera"} type={"Video"} price="400" />
        <CompsRowWrapper name={"Camera Ronin"} type={"Video"} price="150" />
        <CompsRowWrapper name={"Zoome Lite"} type={"Video"} price="50" />
        <CompsRowWrapper name={"Seperate Promo"} type={"Video"} price="80" />
        <div className="rounded-md bg-slate-300 shadow-md  p-2 ">
          {newRow ? (
            <CompsEditableRow
              new={true}
              setNewRow={setNewRow}
              name=""
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

export default Comps;
