import React from "react";
import CompsTableHeader from "./CompsTableHeader";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import CompsRow from "./CompsRow";
function Comps() {
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
        <CompsRow name={"Album Crystal"} type={"Album"} price="50" />
        <CompsRow name={"Usb Photo"} type={"E-Photos"} price="50" />
        <CompsRow
          name={"Video Extra (Double Crane)"}
          type={"Video"}
          price="400"
        />
        <CompsRow name={"Camera Crane"} type={"Video"} price="300" />
        <CompsRow name={"Hanging Camera"} type={"Video"} price="400" />
        <CompsRow name={"Camera Ronin"} type={"Video"} price="150" />
        <CompsRow name={"Zoome Lite"} type={"Video"} price="50" />
        <CompsRow name={"Seperate Promo"} type={"Video"} price="80" />
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

export default Comps;
