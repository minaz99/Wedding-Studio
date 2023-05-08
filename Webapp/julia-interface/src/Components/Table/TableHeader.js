import {
  BuildingStorefrontIcon,
  ChevronDownIcon,
  ClockIcon,
  MegaphoneIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

function TableHeader() {
  const [chevronColor, setChevronColor] = useState("gray");
  return (
    <div className="flex justify-between bg-gray-100  rounded-md text-gray-600 border-gray-400 p-2">
      <div className="items-center flex text-lg font-semibold">
        <UserIcon height={20} width={20} className="mx-2" color="#ec4899" />
        Bride's name
      </div>
      <div className="text-lg flex  font-semibold items-center ">
        <MegaphoneIcon
          height={20}
          width={20}
          className="mx-2"
          color="#a78bfa"
        />
        Event type
        <div className="flex-1 w-2"></div>
        <ChevronDownIcon
          className="mx-2 cursor-pointer "
          onMouseEnter={() => setChevronColor("black")}
          onMouseLeave={() => setChevronColor("gray")}
          color={chevronColor}
          height={15}
          width={15}
        />
      </div>
      <div className="text-lg items-center flex font-semibold">
        <BuildingStorefrontIcon
          height={20}
          width={20}
          className="mx-2"
          color="#2dd4bf"
        />
        Event place
        <div className="flex-1 w-2"></div>
        <ChevronDownIcon
          className="mx-2 cursor-pointer "
          onMouseEnter={() => setChevronColor("black")}
          onMouseLeave={() => setChevronColor("gray")}
          color={chevronColor}
          height={15}
          width={15}
        />
      </div>
      <div className="items-center flex text-lg font-semibold">
        <ClockIcon height={20} width={20} className="mx-2" color="#475569" />
        Contract status
        <div className="flex-1 w-2"></div>
        <ChevronDownIcon
          className="mx-2 cursor-pointer "
          onMouseEnter={() => setChevronColor("black")}
          onMouseLeave={() => setChevronColor("gray")}
          color={chevronColor}
          height={15}
          width={15}
        />
      </div>
      <div></div>
    </div>
  );
}

export default TableHeader;
