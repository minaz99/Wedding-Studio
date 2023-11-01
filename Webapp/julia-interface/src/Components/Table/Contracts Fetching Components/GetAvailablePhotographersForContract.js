import React, { useEffect, useState } from "react";
import {
  useGetPhotographersByTypeAndDateQuery,
  useUnsetPhotographerToContractMutation,
} from "../../../services/api/photographersSlice";
import { useSetPhotographerToContractMutation } from "../../../services/api/contractSlice";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { XCircleIcon, CameraIcon } from "@heroicons/react/24/outline";
import { Spinner } from "react-bootstrap";
function GetAvailablePhotographersForContract(props) {
  const [photographer, setPhotographer] = useState(props.photographer);
  const { data, isLoading, isError, isSuccess } =
    useGetPhotographersByTypeAndDateQuery(
      {
        token: props.token,
        date: props.date,
        type: props.type,
      },
      { refetchOnMountOrArgChange: true }
    );
  const [unsetPhotographerToContract, result2] =
    useUnsetPhotographerToContractMutation();
  const [setPhotographerToContract, result] =
    useSetPhotographerToContractMutation();
  const savePhotographer = async (photographerID, photographerName) => {
    await setPhotographerToContract({
      token: props.token,
      id: props.id,
      body: { photographerID: photographerID },
    });
    setPhotographer(photographerName);
  };
  const unsetPhotographer = async () => {
    await unsetPhotographerToContract({
      token: props.token,
      body: { photographerID: props.photographerID },
    });
    setPhotographer("");
  };

  //alert(`Date: ${props.date.toString().split("T")[0]} and type: ${props.type}`);
  return result2.isLoading ? (
    <Spinner animation="border" role="status"></Spinner>
  ) : result2.isError ? (
    <div className="text-center text-red-400 text-xl p-4">
      Error unsetting photographer
    </div>
  ) : photographer === "" ? (
    <div className="flex items-center space-x-2">
      <CameraIcon height={22} width={22} color="#db2777" />
      <div className="text-gray-500">{photographer.type}</div>
      <DropdownButton id="dropdown-basic-button" title={photographer}>
        {isLoading ? (
          <div className="text-center text-blue-400 text-xl p-4">Loading</div>
        ) : isError ? (
          <div className="text-center text-red-400 text-xl p-4">
            Error loading photographers
          </div>
        ) : result.isLoading ? (
          <div className="text-center text-blue-400 text-xl p-4">Saving</div>
        ) : result.isError ? (
          <div className="text-center text-red-400 text-xl p-4">
            Error setting photographer
          </div>
        ) : (
          data.Photographers.map((photographer) => {
            return (
              <Dropdown.Item
                onClick={async () =>
                  savePhotographer(photographer.id, photographer.name)
                }
              >
                {photographer.name}
              </Dropdown.Item>
            );
          })
        )}{" "}
      </DropdownButton>
    </div>
  ) : (
    <div className="flex items-center space-x-2">
      <CameraIcon height={22} width={22} color="#db2777" />
      <div className="text-gray-500">{photographer.type}</div>
      <div>{photographer}</div>
      <div onClick={() => unsetPhotographer()}>
        <XCircleIcon
          className="cursor-pointer"
          height="20"
          width="20"
          color="#64748b"
        />
      </div>
    </div>
  );
}

export default GetAvailablePhotographersForContract;
