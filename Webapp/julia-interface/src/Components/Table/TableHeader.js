import {
  BuildingStorefrontIcon,
  ChevronDownIcon,
  ClockIcon,
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
  MegaphoneIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import THEventTypeFilter from "./Filters/THEventTypeFilter";
import THEventLocationFilter from "./Filters/THEventLocationFilter";
import THContractStatus from "./Filters/THContractStatus";
import THBrideNameFilter from "./Filters/THBrideNameFilter";

function TableHeader() {
  const [chevronColor, setChevronColor] = useState("gray");
  const [searchColor, setSearchColor] = useState("#9ca3af");
  const [searchBride, setSearchBride] = useState(false);
  return (
    <div className="flex   bg-gray-100 justify-between rounded-md text-gray-600 border-gray-400 p-2">
      <div className="items-center  flex text-lg font-semibold">
        <UserIcon height={20} width={20} className="mx-2" color="#ec4899" />
        {!searchBride ? <div>Bride's name</div> : <div></div>}
        {!searchBride ? (
          <MagnifyingGlassIcon
            onMouseEnter={() => setSearchColor("#4b5563")}
            onMouseLeave={() => setSearchColor("#9ca3af")}
            height={20}
            width={20}
            className="mx-2 cursor-pointer"
            color={searchColor}
            onClick={() => setSearchBride(true)}
          />
        ) : (
          <THBrideNameFilter setSearchBride={setSearchBride} />
        )}
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
        <THEventTypeFilter />
      </div>

      <div className="text-lg items-center flex  font-semibold">
        <BuildingStorefrontIcon
          height={20}
          width={20}
          className="mx-2"
          color="#2dd4bf"
        />
        Event place
        <div className="flex-1 w-2"></div>
        <THEventLocationFilter />
      </div>
      <div className="items-center flex  text-lg font-semibold">
        <ClockIcon height={20} width={20} className="mx-2" color="#475569" />
        Contract status
        <div className="flex-1 w-2"></div>
        <THContractStatus />
      </div>
      <div></div>
    </div>
  );
}

export default TableHeader;
