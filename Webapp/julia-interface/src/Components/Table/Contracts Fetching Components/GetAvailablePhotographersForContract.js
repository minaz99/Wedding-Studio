import React, { useEffect } from "react";
import { useGetPhotographersByTypeAndDateQuery } from "../../../services/api/photographersSlice";
import { useSetPhotographerToContractMutation } from "../../../services/api/contractSlice";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
function GetAvailablePhotographersForContract(props) {
  const { data, isLoading, isError, isSuccess } =
    useGetPhotographersByTypeAndDateQuery(
      {
        token: props.token,
        date: props.date,
        type: props.type,
      },
      { refetchOnMountOrArgChange: true }
    );
  const [setPhotographerToContract, result] =
    useSetPhotographerToContractMutation();
  const savePhotographer = async (photographerID, photographerName) => {
    await setPhotographerToContract({
      token: props.token,
      id: props.id,
      body: { photographerID: photographerID },
    });
    props.setPhotographer(photographerName);
  };

  //alert(`Date: ${props.date.toString().split("T")[0]} and type: ${props.type}`);
  return (
    <DropdownButton id="dropdown-basic-button" title={props.photographer}>
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
  );
}

export default GetAvailablePhotographersForContract;
