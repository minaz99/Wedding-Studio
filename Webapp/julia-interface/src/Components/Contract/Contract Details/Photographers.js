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
      /*props.type === "Video" ? (*/
      return (
        <div className="flex space-x-2 flex-1">
          <VideoCameraIcon height={22} width={22} color="#db2777" />
          <div className="text-gray-500">Video</div>
          <div>{photographer.name}</div>
        </div>
      );
      /*) : (
        <div className="flex space-x-2 flex-1">
          <CameraIcon height={22} width={22} color="#db2777" />
          <div className="text-gray-500">Photographer</div>
          <div>{photographer}</div>
        </div>
      );*/
    })
  );
}

export default Photographers;
