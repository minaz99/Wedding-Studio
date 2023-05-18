import { ChevronDownIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import StatusWrapper from "./StatusWrapper";
import UserIconWrapper from "./UserIconWrapper";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

function TableRow(props) {
  const userColor =
    props.color === "red"
      ? "#fde047"
      : props.color === "blue"
      ? "#155e75"
      : "#1d4ed8";
  const rowColor = props.status === "Done" ? "#dcfce7" : "white";

  const [chevronColor, setChevronColor] = useState("gray");
  return (
    <div
      className="border-t-2 border-r-2   bg-rose-50 shadow-md rounded-md my-1 border-l-2 border-gray-400"
      style={{ backgroundColor: rowColor }}
    >
      <div className="flex font-semibold  border-gray-400 text-black p-2 ">
        <div className="flex flex-1 items-center">
          <UserIconWrapper letter="A" color={userColor} /> Amina Khalil
        </div>
        <div className="flex-1">Wedding</div>
        <div className="flex-1">Movenpick</div>
        <div className="flex-1">
          <StatusWrapper status={props.status} />
        </div>

        <ArrowRightIcon
          onClick={() => props.pressedRow()}
          className="cursor-pointer"
          height={30}
          width={25}
          onMouseEnter={() => setChevronColor("black")}
          onMouseLeave={() => setChevronColor("gray")}
          color={chevronColor}
        />
      </div>
    </div>
  );
}

export default TableRow;