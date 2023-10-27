import React from "react";
import { useGetPhotographersByTypeAndDateQuery } from "../../../services/api/photographersSlice";
import { useSetPhotographerToContractMutation } from "../../../services/api/contractSlice";
import Dropdown from "react-bootstrap/Dropdown";
function GetAvailablePhotographersForContract(props) {
  const { data, isLoading, isError, isSuccess } =
    useGetPhotographersByTypeAndDateQuery(
      {
        token: props.token,
        body: {
          date: new Date(props.date.toString().split("T")[0]),
          type: props.type,
        },
      },
      { refetchOnMountOrArgChange: true }
    );
  const [setPhotographerToContract, result] =
    useSetPhotographerToContractMutation();
  const savePhotographer = (photographerID, photographerName) => {
    setPhotographerToContract({
      token: props.token,
      id: props.id,
      photographerID: photographerID,
    });
    props.setPhotographer(photographerName);
  };
  alert(`Date: ${props.date.toString().split("T")[0]} and type: ${props.type}`);
  return isLoading ? (
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
  );
}

export default GetAvailablePhotographersForContract;
