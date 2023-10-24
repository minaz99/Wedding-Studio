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
import { useGetContractByIDQuery } from "../../../services/api/contractSlice";
function ContractDetails(props) {
  const { data, isLoading, isError, isSuccess } = useGetContractByIDQuery(
    {
      token: props.token,
      id: props.id,
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );
  return isLoading ? (
    <div>Loading details...</div>
  ) : isError ? (
    <div>Error getting contract details</div>
  ) : isSuccess ? (
    <div className="flex space-x-10">
      <div className="space-y-3 ">
        <div className="flex flex-1 space-x-2">
          <UserIcon height={22} width={22} color="#ec4899" />
          <div className="text-gray-500">Bride</div>
          <div className="rounded-full">{data.bridename}</div>
        </div>
        <div className="flex space-x-2">
          <UserIcon height={22} width={22} color="#3b82f6" />
          <div className="text-gray-500">Groom</div>
          <div>{data.groomname}</div>
        </div>
        <div className="flex space-x-2">
          <UserGroupIcon height={22} width={22} color="#78716c" />
          <div className="text-gray-500">Second Party</div>
          <div>{data.secondpartyname}</div>
        </div>
        <div className="flex space-x-2 flex-1">
          <UserCircleIcon height={22} width={22} color="#fbbf24" />
          <div className="text-gray-500">Created by</div>
          <div>{data.createdby}</div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex space-x-2 flex-1">
          <MegaphoneIcon height={22} width={22} color="#a78bfa" />
          <div className="text-gray-500">Type</div>
          <div>{data.eventtype}</div>
        </div>
        <div className="flex space-x-2 flex-1">
          <BuildingStorefrontIcon height={22} width={22} color="#2dd4bf" />
          <div className="text-gray-500">Location</div>
          <div>{data.eventlocation}</div>
        </div>
        <div className="flex space-x-2 flex-1">
          <CalendarDaysIcon height={22} width={22} color="#818cf8" />
          <div className="text-gray-500">Event Date</div>
          <div>{data.eventdate.toString().split("T")[0]}</div>
        </div>
        <div className="flex space-x-2 flex-1">
          <CalendarDaysIcon height={22} width={22} color="#818cf8" />
          <div className="text-gray-500">Date Written</div>
          <div>{data.datecreated.toString().split("T")[0]}</div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex space-x-2 flex-1">
          <IdentificationIcon height={22} width={22} color="#475569" />
          <div className="text-gray-500">Civil ID</div>
          <div>{data.civilid}</div>
        </div>
        <div className="flex space-x-2 flex-1">
          <PhoneIcon height={22} width={22} color="#4ade80" />

          <div className="text-gray-500">Phone1</div>
          <div>{data.phone1}</div>
        </div>
        <div className="flex space-x-2 flex-1">
          <PhoneIcon height={22} width={22} color="#4ade80" />

          <div className="text-gray-500">Phone2</div>
          <div>{data.phone2}</div>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex space-x-2">
          <ClockIcon height={22} width={22} color="#475569" />
          <div className="text-gray-500">Status</div>
          <div>
            <StatusWrapper status={data.contractstatus} />
          </div>
        </div>
        <div className="flex space-x-2 flex-1">
          <CameraIcon height={22} width={22} color="#db2777" />
          <div className="text-gray-500">Photographer</div>
          <div>{data.photographer}</div>
        </div>
        <div className="flex space-x-2 flex-1">
          <VideoCameraIcon height={22} width={22} color="#db2777" />
          <div className="text-gray-500">Video</div>
          <div>{data.video}</div>
        </div>
        {props.hasAddonsForVideo("21", data.componentids) >= 0 ? (
          <div className="flex space-x-2 flex-1">
            <VideoCameraIcon height={22} width={22} color="#db2777" />
            <div className="text-gray-500">Zoom Light</div>
            <div>{data.zoomlight}</div>
          </div>
        ) : (
          <div></div>
        )}
        {props.hasAddonsForVideo("2", data.componentids) >= 0 ? (
          <div className="flex space-x-2 flex-1">
            <VideoCameraIcon height={22} width={22} color="#db2777" />
            <div className="text-gray-500">Camera Crane</div>
            <div>{data.camercrane}</div>
          </div>
        ) : (
          <div></div>
        )}
        {props.hasAddonsForVideo("4", data.componentids) >= 0 ? (
          <div className="flex space-x-2 flex-1">
            <VideoCameraIcon height={22} width={22} color="#db2777" />
            <div className="text-gray-500">Hanging Camera</div>
            <div>{data.hangingcamera}</div>
          </div>
        ) : (
          <div></div>
        )}
        {props.hasAddonsForVideo("10", data.componentids) >= 0 ? (
          <div className="flex space-x-2 flex-1">
            <VideoCameraIcon height={22} width={22} color="#db2777" />
            <div className="text-gray-500">Camera Ronin</div>
            <div>{data.cameraronin}</div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  ) : (
    <div></div>
  );
}

export default ContractDetails;
