import {
  BanknotesIcon,
  BuildingStorefrontIcon,
  CalendarDaysIcon,
  CameraIcon,
  IdentificationIcon,
  MegaphoneIcon,
  PhoneIcon,
  UserCircleIcon,
  UserGroupIcon,
  UserIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import StatusWrapper from "../../Table/StatusWrapper";
import { ClockIcon } from "@mui/x-date-pickers";
import { useGetContractByIDQuery } from "../../../services/api/contractSlice";
function EditContractDetails(props) {
  const { data, isLoading, isError, isSuccess } = useGetContractByIDQuery(
    {
      token: props.token,
      id: props.contractID,
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );
  return (
    <div className="space-y-4">
      <div className="space-y-3 ">
        <div className="flex flex-1 space-x-2">
          <UserIcon height={22} width={22} color="#ec4899" />
          <div className="text-gray-500">Bride</div>
          <input
            value={data.bridename}
            style={{
              background: "#94a3b8",
              borderRadius: "6px",
              border: "none",
              color: "#475569",
              padding: "3px 3px 3px 3px",
              outline: "none",
            }}
            className="font-medium "
            disabled
          />
        </div>
        <div className="flex space-x-2">
          <UserIcon height={22} width={22} color="#3b82f6" />
          <div className="text-gray-500">Groom</div>
          <input
            value={data.groomname}
            style={{
              background: "#94a3b8",
              borderRadius: "6px",
              border: "none",
              color: "#475569",
              padding: "3px 3px 3px 3px",
              outline: "none",
            }}
            className="font-medium "
            disabled
          />
        </div>
        <div className="flex space-x-2">
          <UserGroupIcon height={22} width={22} color="#78716c" />
          <div className="text-gray-500">Second Party</div>
          <input
            value={data.secondpartyname}
            style={{
              background: "#94a3b8",
              borderRadius: "6px",
              border: "none",
              color: "#475569",
              padding: "3px 3px 3px 3px",
              outline: "none",
            }}
            className="font-medium "
            disabled
          />
        </div>
      </div>
      <div className="flex space-x-2 flex-1">
        <CalendarDaysIcon height={22} width={22} color="#818cf8" />
        <div className="text-gray-500">Date Created</div>
        <input
          type="date"
          value={data.datecreated.toString().split("T")[0]}
          style={{
            background: "#94a3b8",
            borderRadius: "6px",
            color: "#475569",
            padding: "4px 4px 4px 4px",
            border: "none",
            outline: "none",
          }}
          className="font-medium"
          disabled
        />
        <div></div>
      </div>
      <div className="space-y-3">
        <div className="flex space-x-2 flex-1">
          <MegaphoneIcon height={22} width={22} color="#a78bfa" />
          <div className="text-gray-500">Type</div>
          <input
            value={data.eventtype}
            style={{
              background: "#94a3b8",
              borderRadius: "6px",
              border: "none",
              color: "#475569",
              padding: "3px 3px 3px 3px",
              outline: "none",
            }}
            className="font-medium "
            disabled
          />
        </div>
        <div className="flex space-x-2 flex-1">
          <BuildingStorefrontIcon height={22} width={22} color="#2dd4bf" />
          <div className="text-gray-500">Location</div>
          <input
            value={data.eventlocation}
            style={{
              background: "#e2e8f0",
              borderRadius: "6px",
              border: "none",
              color: "#475569",
              padding: "3px 3px 3px 3px",
              outline: "none",
            }}
            className="font-medium "
            onChange={(e) => props.setLocation(e.target.value)}
          />
        </div>
        <div className="flex space-x-2 flex-1">
          <CalendarDaysIcon height={22} width={22} color="#818cf8" />
          <div className="text-gray-500">Event Date</div>
          <input
            type="date"
            value={data.eventdate.toString().split("T")[0]}
            style={{
              background: "#e2e8f0",
              borderRadius: "6px",
              color: "#475569",
              padding: "4px 4px 4px 4px",
              border: "none",
              outline: "none",
            }}
            className="font-medium"
            onChange={(e) => props.setDate(e.target.value)}
          />
          <div></div>
        </div>

        <div className="space-y-3">
          <div className="flex space-x-2 flex-1">
            <IdentificationIcon height={22} width={22} color="#475569" />
            <div className="text-gray-500">Civil ID</div>
            <input
              value={data.civilid}
              style={{
                background: "#94a3b8",
                borderRadius: "6px",
                border: "none",
                color: "#475569",
                padding: "3px 3px 3px 3px",
                outline: "none",
              }}
              className="font-medium "
              disabled
            />
          </div>
          <div className="flex space-x-2 flex-1">
            <PhoneIcon height={22} width={22} color="#4ade80" />

            <div className="text-gray-500">Phone 1</div>
            <input
              value={data.phone1}
              style={{
                background: "#e2e8f0",
                borderRadius: "6px",
                border: "none",
                color: "#475569",
                padding: "3px 3px 3px 3px",
                outline: "none",
              }}
              className="font-medium "
              onChange={(e) => props.setPhone1(e.target.value)}
            />
          </div>
          <div className="flex space-x-2 flex-1">
            <PhoneIcon height={22} width={22} color="#4ade80" />

            <div className="text-gray-500">Phone 2</div>
            <input
              value={data.phone2}
              style={{
                background: "#e2e8f0",
                borderRadius: "6px",
                border: "none",
                color: "#475569",
                padding: "3px 3px 3px 3px",
                outline: "none",
              }}
              className="font-medium "
              onChange={(e) => props.setPhone2(e.target.value)}
            />
          </div>
          <div className="flex space-x-2">
            <ClockIcon height={22} width={22} color="#475569" />
            <div className="text-gray-500">Contract Status </div>
            <div>
              <input
                value={data.contractstatus}
                style={{
                  background: "#94a3b8",
                  borderRadius: "6px",
                  border: "none",
                  color: "#475569",
                  padding: "3px 3px 3px 3px",
                  outline: "none",
                }}
                className="font-medium "
                disabled
              />
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex space-x-2 flex-1">
            <CameraIcon height={22} width={22} color="#db2777" />
            <div className="text-gray-500">Photographer</div>
            <input
              value={data.photographer}
              style={{
                background: "#e2e8f0",
                borderRadius: "6px",
                border: "none",
                color: "#475569",
                padding: "3px 3px 3px 3px",
                outline: "none",
              }}
              className="font-medium "
              onChange={(e) => props.setPhotographer(e.target.value)}
            />
          </div>
          <div className="flex space-x-2 flex-1">
            <VideoCameraIcon height={22} width={22} color="#db2777" />
            <div className="text-gray-500">Video</div>
            <input
              value={data.video}
              style={{
                background: "#e2e8f0",
                borderRadius: "6px",
                border: "none",
                color: "#475569",
                padding: "3px 3px 3px 3px",
                outline: "none",
              }}
              className="font-medium "
              onChange={(e) => props.setVideo(e.target.value)}
            />
          </div>
          {props.hasAddonsForVideo("21") >= 0 ? (
            <div className="flex space-x-2 flex-1">
              <VideoCameraIcon height={22} width={22} color="#db2777" />
              <div className="text-gray-500">Zoom Light</div>
              <input
                value={data.zoomlight}
                style={{
                  background: "#e2e8f0",
                  borderRadius: "6px",
                  border: "none",
                  color: "#475569",
                  padding: "3px 3px 3px 3px",
                  outline: "none",
                }}
                className="font-medium "
                onChange={(e) => props.setZoomLight(e.target.value)}
              />
            </div>
          ) : (
            <div></div>
          )}
          {props.hasAddonsForVideo("2") >= 0 ? (
            <div className="flex space-x-2 flex-1">
              <VideoCameraIcon height={22} width={22} color="#db2777" />
              <div className="text-gray-500">Camera Crane</div>
              <input
                value={data.cameracrane}
                style={{
                  background: "#e2e8f0",
                  borderRadius: "6px",
                  border: "none",
                  color: "#475569",
                  padding: "3px 3px 3px 3px",
                  outline: "none",
                }}
                className="font-medium "
                onChange={(e) => props.setCameraCrane(e.target.value)}
              />
            </div>
          ) : (
            <div></div>
          )}
          {props.hasAddonsForVideo("4") >= 0 ? (
            <div className="flex space-x-2 flex-1">
              <VideoCameraIcon height={22} width={22} color="#db2777" />
              <div className="text-gray-500">Hanging Camera</div>
              <input
                value={data.hangingcamera}
                style={{
                  background: "#e2e8f0",
                  borderRadius: "6px",
                  border: "none",
                  color: "#475569",
                  padding: "3px 3px 3px 3px",
                  outline: "none",
                }}
                className="font-medium "
                onChange={(e) => props.setHangingCamera(e.target.value)}
              />
            </div>
          ) : (
            <div></div>
          )}
          {props.hasAddonsForVideo("10") >= 0 ? (
            <div className="flex space-x-2 flex-1">
              <VideoCameraIcon height={22} width={22} color="#db2777" />
              <div className="text-gray-500">Camera Ronin</div>
              <input
                value={data.cameraronin}
                style={{
                  background: "#e2e8f0",
                  borderRadius: "6px",
                  border: "none",
                  color: "#475569",
                  padding: "3px 3px 3px 3px",
                  outline: "none",
                }}
                className="font-medium "
                onChange={(e) => props.setCameraRonin(e.target.value)}
              />
            </div>
          ) : (
            <div></div>
          )}
          <div className="flex space-x-2 flex-1">
            <UserCircleIcon height={22} width={22} color="#fed7aa" />
            <div className="text-gray-500">Created by</div>
            <input
              value={data.createdby}
              style={{
                background: "#94a3b8",
                borderRadius: "6px",
                border: "none",
                color: "#475569",
                padding: "3px 3px 3px 3px",
                outline: "none",
              }}
              className="font-medium "
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditContractDetails;
