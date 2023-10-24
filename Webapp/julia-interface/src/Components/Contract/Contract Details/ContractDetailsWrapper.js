import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import ContractDetails from "./ContractDetails";
import EditContractDetails from "./EditContractDetails";
import { useUpdateContractMutation } from "../../../services/api/contractSlice";

function ContractDetailsWrapper(props) {
  const [editContract, setEditContract] = useState(false);
  const [location, setLocation] = useState(props.eventPlace);
  const [date, setDate] = useState(props.eventDate);
  const [phone1, setPhone1] = useState(props.phone1);
  const [phone2, setPhone2] = useState(props.phone2);
  const [photographer, setPhotographer] = useState(props.photographer);
  const [video, setVideo] = useState(props.video);
  const [zoomLight, setZoomLight] = useState(props.zoomLight);
  const [cameraCrane, setCameraCrane] = useState(props.cameraCrane);
  const [hangingCamera, setHangingCamera] = useState(props.hangingCamera);
  const [cameraRonin, setCameraRonin] = useState(props.cameraRonin);
  const [updateContract, result] = useUpdateContractMutation();
  const hasAddonsForVideo = (compID) => {
    let IDsArray = props.compsIDs
      .split(",")
      .filter((id) => id !== "," && id !== "");
    return IDsArray.indexOf(compID);
  };
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
    setEditContract(false);
  };
  return (
    <div className="space-y-3 rounded-lg shadow-md p-4  w-full bg-white h-fit  ">
      <div className="flex items-center">
        <div className="font-medium text-xl flex-1">Details</div>
        {editContract ? (
          <XCircleIcon
            height={22}
            width={22}
            color="#475569"
            className="cursor-pointer"
            onClick={() => setEditContract(false)}
          />
        ) : (
          <PencilSquareIcon
            height={22}
            width={22}
            color="#475569"
            className="cursor-pointer"
            onClick={() => setEditContract(true)}
          />
        )}
      </div>
      {result.isLoading ? (
        <div className="text-center text-blue-400 text-xl p-4">Saving</div>
      ) : result.isError ? (
        <div className="text-center text-red-400 text-xl p-4">
          Error updating contract
        </div>
      ) : editContract ? (
        <EditContractDetails
          token={props.token}
          id={props.id}
          hasAddonsForVideo={hasAddonsForVideo}
          setCameraCrane={setCameraCrane}
          setCameraRonin={setCameraRonin}
          setHangingCamera={setHangingCamera}
          setZoomLight={setZoomLight}
          setDate={setDate}
          setLocation={setLocation}
          setPhone1={setPhone1}
          setPhone2={setPhone2}
          setPhotographer={setPhotographer}
          setVideo={setVideo}
          set
        />
      ) : (
        <ContractDetails
          hasAddonsForVideo={hasAddonsForVideo}
          token={props.token}
          id={props.id}
        />
      )}
      {editContract ? (
        <div
          className="rounded-md text-center  cursor-pointer text-xl   mx-auto p-2 w-1/6  bg-slate-500 font-medium text-white"
          onClick={() => onClickSave()}
        >
          Save
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default ContractDetailsWrapper;
