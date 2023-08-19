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
      },
    });
    setEditContract(false);
  };
  return (
    <div className="space-y-3 rounded-lg shadow-md p-4  w-full bg-white h-fit  ">
      <div className="flex items-center">
        <div className="font-medium text-xl flex-1">
          {props.secondPartyName}
        </div>
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
          brideName={props.brideName}
          groomName={props.groomName}
          secondPartyName={props.secondPartyName}
          eventType={props.eventType}
          location={location}
          date={date}
          civilID={props.civilID}
          phone1={phone1}
          phone2={phone2}
          contractStatus={props.contractStatus}
          price={props.price}
          photographer={photographer}
          video={video}
          setLocation={setLocation}
          setDate={setDate}
          setPhone1={setPhone1}
          setPhone2={setPhone2}
          setPhotographer={setPhotographer}
          setVideo={setVideo}
          createdBy={props.createdBy}
          dateCreated={props.dateCreated}
        />
      ) : (
        <ContractDetails
          brideName={props.brideName}
          groomName={props.groomName}
          secondPartyName={props.secondPartyName}
          eventType={props.eventType}
          eventPlace={location}
          eventDate={date}
          civilID={props.civilID}
          phone1={phone1}
          phone2={phone2}
          contractStatus={props.contractStatus}
          price={props.price}
          photographer={photographer}
          video={video}
          createdBy={props.createdBy}
          dateCreated={props.dateCreated}
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
