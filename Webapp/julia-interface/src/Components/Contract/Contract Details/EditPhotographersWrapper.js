import React, { useState } from "react";
import { useGetPhotographersForContractQuery } from "../../../services/api/contractSlice";
import {
  VideoCameraIcon,
  CameraIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import GetAvailablePhotographersForContract from "../../Table/Contracts Fetching Components/GetAvailablePhotographersForContract";
function EditPhotographersWrapper(props) {
  const [addPhotographer, setAddPhotographer] = useState(0);
  const [addVideo, setAddVideo] = useState(0);
  const [addZoomLight, setAddZoomLight] = useState(0);
  const [addCameraCrane, setAddCameraCrane] = useState(0);
  const [addCameraRonin, setAddCameraRonin] = useState(0);
  const [addHangingCamera, setAddHangingCamera] = useState(0);
  const { data, isLoading, isError, isSuccess } =
    useGetPhotographersForContractQuery(
      { token: props.token, id: props.id },
      { refetchOnMountOrArgChange: true }
    );
  const AddPhotographers = (typeNo, type) => {
    for (let i = 0; i < typeNo; i++)
      return (
        <GetAvailablePhotographersForContract
          token={props.token}
          date={props.date}
          type={type}
          photographer=""
          id={props.id}
        />
      );
  };
  return isLoading ? (
    <div className="text-center text-blue-400 text-xl p-4">Loading</div>
  ) : isError ? (
    <div className="text-center text-red-400 text-xl p-4">
      Error loading photographers
    </div>
  ) : (
    <div className="flex space-x-8">
      <div className="space-y-2">
        {data.photographers.length > 0 ? (
          data.photographers.map((photographer) => {
            return photographer ? (
              <GetAvailablePhotographersForContract
                token={props.token}
                date={props.date}
                type="Photographer"
                photographer={photographer.name}
                id={props.id}
                photographerID={photographer.id}
              />
            ) : (
              <div></div>
            );
          })
        ) : (
          <GetAvailablePhotographersForContract
            token={props.token}
            date={props.date}
            type="Photographer"
            photographer={""}
            id={props.id}
          />
        )}
        <AddPhotographers typeNo={addPhotographer} type={"Photographer"} />
        <div onClick={() => setAddPhotographer(addPhotographer + 1)}>
          <PlusCircleIcon
            height="22"
            className="mx-auto cursor-pointer"
            width="22"
            color="#64748b"
          />
        </div>
      </div>
      <div className="space-y-2">
        {data.video.length > 0 ? (
          data.video.map((video) => {
            return video ? (
              <GetAvailablePhotographersForContract
                token={props.token}
                date={props.date}
                type="Video"
                photographer={video.name}
                id={props.id}
                photographerID={video.id}
              />
            ) : (
              <div></div>
            );
          })
        ) : (
          <GetAvailablePhotographersForContract
            token={props.token}
            date={props.date}
            type="Video"
            photographer={""}
            id={props.id}
          />
        )}
        <AddPhotographers typeNo={addVideo} type={"Video"} />
        <div onClick={() => setAddVideo(addVideo + 1)}>
          <PlusCircleIcon
            height="22"
            className="mx-auto cursor-pointer"
            width="22"
            color="#64748b"
          />
        </div>
      </div>
      <div className="space-y-2">
        {props.hasAddonsForVideo("21", props.componentids) >= 0 ? (
          <div>
            {data.zoomLight.length > 0 ? (
              data.zoomLight.map((zl) => {
                return (
                  <GetAvailablePhotographersForContract
                    token={props.token}
                    date={props.date}
                    type="Zoom Light"
                    photographer={zl.name}
                    id={props.id}
                    photographerID={zl.id}
                  />
                );
              })
            ) : (
              <GetAvailablePhotographersForContract
                token={props.token}
                date={props.date}
                type="Zoom Light"
                photographer={""}
                id={props.id}
              />
            )}
            <AddPhotographers typeNo={addZoomLight} type={"Zoom Light"} />
            <div onClick={() => setAddZoomLight(addZoomLight + 1)}>
              <PlusCircleIcon
                height="22"
                className="mx-auto cursor-pointer"
                width="22"
                color="#64748b"
              />
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="space-y-2">
        {props.hasAddonsForVideo("2", props.componentids) >= 0 ? (
          <div>
            {data.cameraCrane.length > 0 ? (
              data.cameraCrane.map((cr) => {
                return (
                  <GetAvailablePhotographersForContract
                    token={props.token}
                    date={props.date}
                    type="Camera Crane"
                    photographer={cr.name}
                    id={props.id}
                    photographerID={cr.id}
                  />
                );
              })
            ) : (
              <GetAvailablePhotographersForContract
                token={props.token}
                date={props.date}
                type="Camera Crane"
                photographer={""}
                id={props.id}
              />
            )}
            <AddPhotographers typeNo={addCameraCrane} type={"Camera Crane"} />
            <div onClick={() => setAddCameraCrane(addCameraCrane + 1)}>
              <PlusCircleIcon
                height="22"
                className="mx-auto cursor-pointer"
                width="22"
                color="#64748b"
              />
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="space-y-2">
        {props.hasAddonsForVideo("4", props.componentids) >= 0 ? (
          <div>
            {data.hangingCamera.length > 0 ? (
              data.hangingCamera.map((hc) => {
                return (
                  <GetAvailablePhotographersForContract
                    token={props.token}
                    date={props.date}
                    type="Hanging Camera"
                    photographer={hc.name}
                    id={props.id}
                    photographerID={hc.id}
                  />
                );
              })
            ) : (
              <GetAvailablePhotographersForContract
                token={props.token}
                date={props.date}
                type="Hanging Camera"
                photographer={""}
                id={props.id}
              />
            )}
            <AddPhotographers
              typeNo={addHangingCamera}
              type={"Hanging Camera"}
            />
            <div onClick={() => setAddHangingCamera(addHangingCamera + 1)}>
              <PlusCircleIcon
                height="22"
                className="mx-auto cursor-pointer"
                width="22"
                color="#64748b"
              />
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="space-y-2">
        {props.hasAddonsForVideo("10", props.componentids) >= 0 ? (
          <div>
            {data.cameraRonin.length > 0 ? (
              data.cameraRonin.map((cr) => {
                return (
                  <GetAvailablePhotographersForContract
                    token={props.token}
                    date={props.date}
                    type="Camera Ronin"
                    photographer={cr.name}
                    id={props.id}
                    photographerID={cr.id}
                  />
                );
              })
            ) : (
              <GetAvailablePhotographersForContract
                token={props.token}
                date={props.date}
                type="Camera Ronin"
                photographer={""}
                id={props.id}
              />
            )}
            <AddPhotographers typeNo={addHangingCamera} type={"Camera Ronin"} />
            <div onClick={() => setAddCameraRonin(addCameraRonin + 1)}>
              <PlusCircleIcon
                height="22"
                className="mx-auto cursor-pointer"
                width="22"
                color="#64748b"
              />
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default EditPhotographersWrapper;
