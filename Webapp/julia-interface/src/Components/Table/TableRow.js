import { ChevronDownIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import StatusWrapper from "./StatusWrapper";
import UserIconWrapper from "./UserIconWrapper";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  EllipsisHorizontalCircleIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";

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
      key={props.id}
      className="border-t-2 border-r-2 flex items-center   bg-rose-50 shadow-md rounded-md my-1 border-l-2 border-gray-400  text-black p-2 font-semibold "
      style={{ backgroundColor: rowColor }}
    >
      <div className="flex  flex-1 items-center">
        <UserIconWrapper letter={props.letter} color={userColor} />{" "}
        {props.brideName}
      </div>
      <div className="flex-1 ">{props.eventType}</div>
      <div className="flex-1">{props.eventPlace}</div>

      <div className="">
        {/*<StatusWrapper status={props.status} />*/}
        {props.eventDate.toString().split("T")[0]}
      </div>

      <EllipsisHorizontalCircleIcon
        onClick={() => props.pressedRow(props.id)}
        className="cursor-pointer"
        height={30}
        width={25}
        onMouseEnter={() => setChevronColor("black")}
        onMouseLeave={() => setChevronColor("gray")}
        color={chevronColor}
      />
    </div>
  );
}

export default TableRow;
