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
  UserCircleIcon,
  UserGroupIcon,
  UserIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import PhotographersAssigned from "./PhotographersAssigned";

function ContractDetails(props) {
  return (
    <div className="flex space-x-10">
      <div className="space-y-3 ">
        <div className="flex flex-1 space-x-2">
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
          <div>{props.secondPartyName}</div>
        </div>
        <div className="flex space-x-2 flex-1">
          <CalendarDaysIcon height={22} width={22} color="#818cf8" />
          <div className="text-gray-500">Date Created</div>
          <div>{props.dateCreated.toString().split("T")[0]}</div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex space-x-2 flex-1">
          <MegaphoneIcon height={22} width={22} color="#a78bfa" />
          <div className="text-gray-500">Type</div>
          <div>{props.eventType}</div>
        </div>
        <div className="flex space-x-2 flex-1">
          <BuildingStorefrontIcon height={22} width={22} color="#2dd4bf" />
          <div className="text-gray-500">Location</div>
          <div>{props.eventPlace}</div>
        </div>
        <div className="flex space-x-2 flex-1">
          <CalendarDaysIcon height={22} width={22} color="#818cf8" />
          <div className="text-gray-500">Date</div>
          <div>{props.eventDate.toString().split("T")[0]}</div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex space-x-2 flex-1">
          <IdentificationIcon height={22} width={22} color="#475569" />
          <div className="text-gray-500">Civil ID</div>
          <div>{props.civilID}</div>
        </div>
        <div className="flex space-x-2 flex-1">
          <PhoneIcon height={22} width={22} color="#4ade80" />

          <div className="text-gray-500">Contact</div>
          <div>{props.phone1}</div>
        </div>
        <div className="flex space-x-2">
          <ClockIcon height={22} width={22} color="#475569" />
          <div className="text-gray-500">Contract Status </div>
          <div>
            <StatusWrapper status={props.contractStatus} />
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex space-x-2 flex-1">
          <CameraIcon height={22} width={22} color="#db2777" />
          <div className="text-gray-500">Photographer</div>
          <div>{props.photographer}</div>
        </div>
        <div className="flex space-x-2 flex-1">
          <VideoCameraIcon height={22} width={22} color="#db2777" />
          <div className="text-gray-500">Video</div>
          <div>{props.video}</div>
        </div>
        <div className="flex space-x-2 flex-1">
          <UserCircleIcon height={22} width={22} color="#fbbf24" />
          <div className="text-gray-500">Created by</div>
          <div>{props.createdBy}</div>
        </div>
      </div>
    </div>
  );
}

export default ContractDetails;
