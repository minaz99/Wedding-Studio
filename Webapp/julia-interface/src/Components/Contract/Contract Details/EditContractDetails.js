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
import React, { useState } from "react";
import StatusWrapper from "../../Table/StatusWrapper";
import { ClockIcon } from "@mui/x-date-pickers";
import {
  useGetContractByIDQuery,
  useUpdateContractMutation,
} from "../../../services/api/contractSlice";
function EditContractDetails(props) {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [photographer, setPhotographer] = useState("");
  const [video, setVideo] = useState("");
  const [zoomLight, setZoomLight] = useState("");
  const [cameraCrane, setCameraCrane] = useState("");
  const [hangingCamera, setHangingCamera] = useState("");
  const [cameraRonin, setCameraRonin] = useState("");
  const [updateContract, result] = useUpdateContractMutation();
  const { data, isLoading, isError, isSuccess } = useGetContractByIDQuery(
    {
      token: props.token,
      id: props.id,
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );
  const onClickSave = async () => {
    await updateContract({
      token: props.token,
      id: props.id,
      body: {
        eventLocation: location,
        eventDate: date,
        phone1: phone1,
        phone2: phone2,
        photographer: photographer,
        video: video,
        zoomLight: zoomLight,
        cameraCrane: cameraCrane,
        hangingCamera: hangingCamera,
        cameraRonin: cameraRonin,
      },
    });
    props.setEditContract(false);
  };
  return isLoading ? (
    <div>Loading details...</div>
  ) : isError ? (
    <div>Error getting contract details</div>
  ) : isSuccess ? (
    result.isLoading ? (
      <div>Updating</div>
    ) : result.isError ? (
      <div>Error updating contract</div>
    ) : result.isSuccess ? (
      <div>Contract updated</div>
    ) : (
      <div>
        <div className="space-y-4">
          <div className="space-y-3 ">
            <div className="flex flex-1 space-x-2">
              <UserIcon height={22} width={22} color="#ec4899" />
              <div className="text-gray-500">Bride</div>
              <input
                value={data.contract.bridename}
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
                value={data.contract.groomname}
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
                value={data.contract.secondpartyname}
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
              value={data.contract.datecreated.toString().split("T")[0]}
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
                value={data.contract.eventtype}
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
                value={location || data.contract.eventlocation}
                style={{
                  background: "#e2e8f0",
                  borderRadius: "6px",
                  border: "none",
                  color: "#475569",
                  padding: "3px 3px 3px 3px",
                  outline: "none",
                }}
                className="font-medium "
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="flex space-x-2 flex-1">
              <CalendarDaysIcon height={22} width={22} color="#818cf8" />
              <div className="text-gray-500">Event Date</div>
              <input
                type="date"
                value={data.contract.eventdate.toString().split("T")[0]}
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
                  value={data.contract.civilid}
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
                  value={data.contract.phone1}
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
                  value={data.contract.phone2}
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
                    value={data.contract.contractstatus}
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
                  value={data.contract.photographer}
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
                  value={data.contract.video}
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
              {props.hasAddonsForVideo("21", data.contract.componentids) >=
              0 ? (
                <div className="flex space-x-2 flex-1">
                  <VideoCameraIcon height={22} width={22} color="#db2777" />
                  <div className="text-gray-500">Zoom Light</div>
                  <input
                    value={data.contract.zoomlight}
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
              {props.hasAddonsForVideo("2", data.contract.componentids) >= 0 ? (
                <div className="flex space-x-2 flex-1">
                  <VideoCameraIcon height={22} width={22} color="#db2777" />
                  <div className="text-gray-500">Camera Crane</div>
                  <input
                    value={data.contract.cameracrane}
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
              {props.hasAddonsForVideo("4", data.contract.componentids) >= 0 ? (
                <div className="flex space-x-2 flex-1">
                  <VideoCameraIcon height={22} width={22} color="#db2777" />
                  <div className="text-gray-500">Hanging Camera</div>
                  <input
                    value={data.contract.hangingcamera}
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
              {props.hasAddonsForVideo("10", data.contract.componentids) >=
              0 ? (
                <div className="flex space-x-2 flex-1">
                  <VideoCameraIcon height={22} width={22} color="#db2777" />
                  <div className="text-gray-500">Camera Ronin</div>
                  <input
                    value={data.contract.cameraronin}
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
                  value={data.contract.createdby}
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
        <div
          className="rounded-md text-center  cursor-pointer text-xl   mx-auto p-2 w-1/6  bg-slate-500 font-medium text-white"
          onClick={() => onClickSave()}
        >
          Save
        </div>
      </div>
    )
  ) : (
    <div></div>
  );
}

export default EditContractDetails;
