import {
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
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { ClockIcon } from "@mui/x-date-pickers";
import {
  useGetContractByIDQuery,
  useSetPhotographerToContractMutation,
  useUpdateContractMutation,
} from "../../../services/api/contractSlice";
import DropdownButton from "react-bootstrap/DropdownButton";
import GetAvailablePhotographersForContract from "../../Table/Contracts Fetching Components/GetAvailablePhotographersForContract";
import EditPhotographersWrapper from "./EditPhotographersWrapper";
function EditContractDetails(props) {
  const { data, isLoading, isError, isSuccess } = useGetContractByIDQuery(
    {
      token: props.token,
      id: props.id,
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const [location, setLocation] = useState(
    isSuccess ? data.contract.eventlocation : ""
  );
  const [date, setDate] = useState(isSuccess ? data.contract.eventdate : "");
  const [phone1, setPhone1] = useState(isSuccess ? data.contract.phone1 : "");
  const [phone2, setPhone2] = useState(isSuccess ? data.contract.phone2 : "");
  const [photographer, setPhotographer] = useState("");
  const [video, setVideo] = useState(isSuccess ? data.contract.video : "");
  const [zoomLight, setZoomLight] = useState(
    isSuccess ? data.contract.zoomlight : ""
  );
  const [cameraCrane, setCameraCrane] = useState(
    isSuccess ? data.contract.cameracrane : ""
  );
  const [hangingCamera, setHangingCamera] = useState(
    isSuccess ? data.contract.hangingcamera : ""
  );
  const [cameraRonin, setCameraRonin] = useState(
    isSuccess ? data.contract.cameraronin : ""
  );
  const [updateContract, result] = useUpdateContractMutation();

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
    <div>Loading</div>
  ) : isError ? (
    <div>Error loading contract details</div>
  ) : isSuccess ? (
    result.isLoading ? (
      <div className="text-center text-blue-400 text-xl p-4">Saving</div>
    ) : result.isError ? (
      <div className="text-center text-red-400 text-xl p-4">
        Error saving contract
      </div>
    ) : (
      <div>
        <div className="flex ">
          <div className="space-y-3 flex-1 ">
            <div className="flex flex-1 space-x-2 items-center">
              <UserIcon height={22} width={22} color="#ec4899" />
              <div className="text-gray-500">Bride</div>
              <input
                value={data.contract.bridename}
                style={{
                  background: "#e2e8f0",
                  borderRadius: "6px",
                  border: "none",
                  color: "#475569",
                  padding: "3px 3px 3px 3px",
                  outline: "none",
                }}
                className="font-medium "
                disabled
              />
              <LockClosedIcon height={22} width={22} color="#94a3b8" />
            </div>
            <div className="flex space-x-2 items-center">
              <UserIcon height={22} width={22} color="#3b82f6" />
              <div className="text-gray-500">Groom</div>
              <input
                value={data.contract.groomname}
                style={{
                  background: "#e2e8f0",
                  borderRadius: "6px",
                  border: "none",
                  color: "#475569",
                  padding: "3px 3px 3px 3px",
                  outline: "none",
                }}
                className="font-medium "
                disabled
              />
              <LockClosedIcon height={22} width={22} color="#94a3b8" />
            </div>
            <div className="flex space-x-2 items-center break-normal">
              <UserGroupIcon height={22} width={22} color="#78716c" />
              <div className="text-gray-500">Second Party</div>
              <input
                value={data.contract.secondpartyname}
                style={{
                  background: "#e2e8f0",
                  borderRadius: "6px",
                  border: "none",
                  color: "#475569",
                  padding: "3px 3px 3px 3px",
                  outline: "none",
                }}
                className="font-medium "
                disabled
              />
              <LockClosedIcon height={22} width={22} color="#94a3b8" />
            </div>
          </div>
          <div className="space-y-3 flex-1 ">
            <div className="flex space-x-2 items-center flex-1">
              <MegaphoneIcon height={22} width={22} color="#a78bfa" />
              <div className="text-gray-500">Type</div>
              <input
                value={data.contract.eventtype}
                style={{
                  background: "#e2e8f0",
                  borderRadius: "6px",
                  border: "none",
                  color: "#475569",
                  padding: "3px 3px 3px 3px",
                  outline: "none",
                }}
                className="font-medium "
                disabled
              />
              <LockClosedIcon height={22} width={22} color="#94a3b8" />
            </div>
            <div className="flex space-x-2 items-center flex-1">
              <BuildingStorefrontIcon height={22} width={22} color="#2dd4bf" />
              <div className="text-gray-500">Location</div>
              <input
                value={location}
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
            <div className="flex space-x-2 items-center flex-1">
              <CalendarDaysIcon height={22} width={22} color="#818cf8" />
              <div className="text-gray-500">Event Date</div>
              <input
                type="date"
                value={date.toString().split("T")[0]}
                style={{
                  background: "#e2e8f0",
                  borderRadius: "6px",
                  color: "#475569",
                  padding: "4px 4px 4px 4px",
                  border: "none",
                  outline: "none",
                }}
                className="font-medium"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-3 ">
            <div className="flex space-x-2 items-center flex-1">
              <IdentificationIcon height={22} width={22} color="#475569" />
              <div className="text-gray-500">Civil ID</div>
              <input
                value={data.contract.civilid}
                style={{
                  background: "#e2e8f0",
                  borderRadius: "6px",
                  border: "none",
                  color: "#475569",
                  padding: "3px 3px 3px 3px",
                  outline: "none",
                }}
                className="font-medium "
                disabled
              />
              <LockClosedIcon height={22} width={22} color="#94a3b8" />
            </div>
            <div className="flex space-x-2 items-center flex-1">
              <PhoneIcon height={22} width={22} color="#4ade80" />

              <div className="text-gray-500">Phone 1</div>
              <input
                value={phone1}
                style={{
                  background: "#e2e8f0",
                  borderRadius: "6px",
                  border: "none",
                  color: "#475569",
                  padding: "3px 3px 3px 3px",
                  outline: "none",
                }}
                className="font-medium "
                onChange={(e) => setPhone1(e.target.value)}
              />
            </div>
            <div className="flex space-x-2 items-center flex-1">
              <PhoneIcon height={22} width={22} color="#4ade80" />

              <div className="text-gray-500">Phone 2</div>
              <input
                value={phone2}
                style={{
                  background: "#e2e8f0",
                  borderRadius: "6px",
                  border: "none",
                  color: "#475569",
                  padding: "3px 3px 3px 3px",
                  outline: "none",
                }}
                className="font-medium "
                onChange={(e) => setPhone2(e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <ClockIcon height={22} width={22} color="#475569" />
              <div className="text-gray-500">Status </div>

              <input
                value={data.contract.contractstatus}
                style={{
                  background: "#e2e8f0",
                  borderRadius: "6px",
                  border: "none",
                  color: "#475569",
                  padding: "3px 3px 3px 3px",
                  outline: "none",
                }}
                className="font-medium "
                disabled
              />
              <LockClosedIcon height={22} width={22} color="#94a3b8" />
            </div>
            <div className="flex space-x-2 items-center flex-1">
              <CalendarDaysIcon height={22} width={22} color="#818cf8" />
              <div className="text-gray-500">Date Created</div>
              <input
                type="date"
                value={data.contract.datecreated.toString().split("T")[0]}
                style={{
                  background: "#e2e8f0",
                  borderRadius: "6px",
                  color: "#475569",
                  padding: "4px 4px 4px 4px",
                  border: "none",
                  outline: "none",
                }}
                className="font-medium"
                disabled
              />
              <LockClosedIcon height={22} width={22} color="#94a3b8" />
            </div>
            <div className="flex space-x-2 items-center flex-1">
              <UserCircleIcon height={22} width={22} color="#fed7aa" />
              <div className="text-gray-500">Created by</div>
              <input
                value={data.contract.createdby}
                style={{
                  background: "#e2e8f0",
                  borderRadius: "6px",
                  border: "none",
                  color: "#475569",
                  padding: "3px 3px 3px 3px",
                  outline: "none",
                }}
                className="font-medium "
                disabled
              />
              <LockClosedIcon height={22} width={22} color="#94a3b8" />
            </div>
          </div>
        </div>
        <div
          className="rounded-md text-center  cursor-pointer text-xl space-y-2  mx-auto p-2 w-1/6  bg-slate-500 font-medium text-white"
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
