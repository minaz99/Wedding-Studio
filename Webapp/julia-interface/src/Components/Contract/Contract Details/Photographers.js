import React from "react";
import { useGetPhotographersPerContractAndTypeQuery } from "../../../services/api/contractSlice";
import { VideoCameraIcon, CameraIcon } from "@heroicons/react/24/outline";
function Photographers(props) {
  const { data, isLoading, isError, isSuccess } =
    useGetPhotographersPerContractAndTypeQuery(
      { token: props.token, id: props.id, type: props.type },
      { refetchOnMountOrArgChange: true }
    );
  return isLoading ? (
    <div className="text-center text-blue-400 text-xl p-4">Loading</div>
  ) : isError ? (
    <div className="text-center text-red-400 text-xl p-4">
      Error loading photographers
    </div>
  ) : (
    data.Photographers.map((photographer) => {
      return photographer ? (
        <div className="flex space-x-2 flex-1">
          {props.type === "Photographer" ? (
            <CameraIcon height={22} width={22} color="#db2777" />
          ) : (
            <VideoCameraIcon height={22} width={22} color="#db2777" />
          )}
          <div className="text-gray-500">{props.type}</div>
          <div>{photographer.name}</div>
        </div>
      ) : (
        <div></div>
      );
    })
  );
}

export default Photographers;
