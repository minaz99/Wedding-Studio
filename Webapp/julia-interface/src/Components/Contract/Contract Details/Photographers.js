import React from "react";
import { useGetPhotographersForContractQuery } from "../../../services/api/contractSlice";
import { VideoCameraIcon, CameraIcon } from "@heroicons/react/24/outline";
function Photographers(props) {
  const { data, isLoading, isError, isSuccess } =
    useGetPhotographersForContractQuery(
      { token: props.token, id: props.id },
      { refetchOnMountOrArgChange: true }
    );
  return isLoading ? (
    <div className="text-center text-blue-400 text-xl p-4">Loading</div>
  ) : isError ? (
    <div className="text-center text-red-400 text-xl p-4">
      Error loading photographers
    </div>
  ) : (
    <div className="flex justify-evenly">
      <div className="space-y-2">
        {data.photographers.map((photographer) => {
          return photographer ? (
            <div className="flex items-center space-x-2">
              <CameraIcon height={22} width={22} color="#db2777" />
              <div className="text-gray-500">{photographer.type}</div>
              <div>{photographer.name}</div>
            </div>
          ) : (
            <div></div>
          );
        })}
      </div>
      <div className="space-y-2">
        {data.video.map((video) => {
          return video ? (
            <div className="flex space-x-2 items-center">
              <VideoCameraIcon height={22} width={22} color="#db2777" />
              <div className="text-gray-500">{video.type}</div>
              <div>{video.name}</div>
            </div>
          ) : (
            <div></div>
          );
        })}
      </div>
    </div>
  );
}

export default Photographers;
