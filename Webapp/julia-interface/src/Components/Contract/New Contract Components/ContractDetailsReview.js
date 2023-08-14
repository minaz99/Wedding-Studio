import React from "react";

import {
  BanknotesIcon,
  BuildingStorefrontIcon,
  CalendarDaysIcon,
  ClockIcon,
  IdentificationIcon,
  MegaphoneIcon,
  PhoneIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

function ContractDetailsReview(props) {
  return (
    <div className="space-y-3 rounded-lg h-fit shadow-md p-4   bg-white   ">
      <div className="font-medium text-xl">{props.secondPartyName}</div>
      <div className="space-y-3 ">
        <div className="flex space-x-2">
          <UserIcon height={22} width={22} color="#ec4899" />
          <div className="text-gray-500">Bride</div>
          <div className="rounded-full">{props.brideName}</div>
        </div>
        <div className="flex space-x-2">
          <UserIcon height={22} width={22} color="#3b82f6" />
          <div className="text-gray-500">Groom</div>
          <div>{props.groomName}</div>
        </div>
        <div className="flex space-x-2">
          <UserGroupIcon height={22} width={22} color="#78716c" />
          <div className="text-gray-500">Second Party</div>
          <div>{props.groomName}</div>
        </div>
      </div>
      <div className=" space-y-3  ">
        <div className="flex space-x-2 ">
          <MegaphoneIcon height={22} width={22} color="#a78bfa" />
          <div className="text-gray-500">Type</div>
          <div>{props.eventType}</div>
        </div>
        <div className="flex space-x-2 ">
          <BuildingStorefrontIcon height={22} width={22} color="#2dd4bf" />
          <div className="text-gray-500">Location</div>
          <div>{props.eventLocation}</div>
        </div>
        <div className="flex space-x-2 ">
          <CalendarDaysIcon height={22} width={22} color="#818cf8" />
          <div className="text-gray-500">Date</div>
          <div>{props.eventDate}</div>
        </div>
      </div>

      <div className="flex space-x-2 ">
        <IdentificationIcon height={22} width={22} color="#475569" />
        <div className="text-gray-500">Civil ID</div>
        <div>{props.civilID}</div>
      </div>
      <div className="flex space-x-2 ">
        <PhoneIcon height={22} width={22} color="#4ade80" />

        <div className="text-gray-500">Contact</div>
        <div>{props.phone1}</div>
      </div>
    </div>
  );
}

export default ContractDetailsReview;
