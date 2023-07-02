import React from "react";
import StatusWrapper from "../../Table/StatusWrapper";
import {
  BanknotesIcon,
  BuildingStorefrontIcon,
  CalendarDaysIcon,
  CameraIcon,
  ClockIcon,
  IdentificationIcon,
  MegaphoneIcon,
  PencilSquareIcon,
  PhoneIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import PhotographersAssigned from "./PhotographersAssigned";

function ContractDetails(props) {
  return (
    <div className="space-y-3 rounded-lg shadow-md p-4  w-full bg-white h-fit  ">
      <div className="flex items-center">
        <div className="font-medium text-xl flex-1">
          {props.secondPartyName}
        </div>
        <PencilSquareIcon
          height={22}
          width={22}
          color="#475569"
          className="cursor-pointer"
        />
      </div>
      <div className="flex space-x-10">
        <div className="space-y-3 ">
          <div className="flex flex-1 space-x-2">
            <UserIcon height={22} width={22} color="#ec4899" />
            <div className="text-gray-500">Bride name</div>
            <div className="rounded-full">{props.brideName}</div>
          </div>
          <div className="flex space-x-2">
            <UserIcon height={22} width={22} color="#3b82f6" />
            <div className="text-gray-500">Groom name</div>
            <div>{props.groomName}</div>
          </div>
          <div className="flex space-x-2">
            <UserGroupIcon height={22} width={22} color="#78716c" />
            <div className="text-gray-500">Second Party name</div>
            <div>{props.groomName}</div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex space-x-2 flex-1">
            <MegaphoneIcon height={22} width={22} color="#a78bfa" />
            <div className="text-gray-500">Event type</div>
            <div>{props.eventType}</div>
          </div>
          <div className="flex space-x-2 flex-1">
            <BuildingStorefrontIcon height={22} width={22} color="#2dd4bf" />
            <div className="text-gray-500">Event location</div>
            <div>{props.eventPlace}</div>
          </div>
          <div className="flex space-x-2 flex-1">
            <CalendarDaysIcon height={22} width={22} color="#818cf8" />
            <div className="text-gray-500">Event date</div>
            <div>25/05/2023</div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex space-x-2 flex-1">
            <IdentificationIcon height={22} width={22} color="#475569" />
            <div className="text-gray-500">Civil ID</div>
            <div>2468205820582</div>
          </div>
          <div className="flex space-x-2 flex-1">
            <PhoneIcon height={22} width={22} color="#4ade80" />

            <div className="text-gray-500">Contact</div>
            <div>696658340</div>
          </div>
          <div className="flex space-x-2">
            <ClockIcon height={22} width={22} color="#475569" />
            <div className="text-gray-500">Contract Status </div>
            <div>
              <StatusWrapper status={props.status} />
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex space-x-2 flex-1">
            <BanknotesIcon height={22} width={22} color="#7dd3fc" />
            <div className="text-gray-500">Contract price</div>
            <div>600 KD</div>
          </div>
          <div className="flex space-x-2 flex-1">
            <CameraIcon height={22} width={22} color="#db2777" />
            <div className="text-gray-500">Photographer</div>
            <div>Maria Wahed</div>
          </div>
          <div className="flex space-x-2 flex-1">
            <CameraIcon height={22} width={22} color="#db2777" />
            <div className="text-gray-500">Video</div>
            <div>Not assigned</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContractDetails;
