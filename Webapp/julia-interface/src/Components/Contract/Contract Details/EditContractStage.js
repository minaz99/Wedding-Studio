import { CheckIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useUpdateContractStageMutation } from "../../../services/api/contractSlice";

function EditContractStage(props) {
  const [hoverEventFinished, setHoverEventFinished] = useState(false);
  const [hoverPicsCollected, setHoverPicsCollected] = useState(false);
  const [hoverVideoCollected, setHoverVideoCollected] = useState(false);
  const [hoverPromoCollected, setHoverPromoCollected] = useState(false);
  const [hoverFinished, setHoverFinished] = useState(false);
  const [updateContractStage, result] = useUpdateContractStageMutation();
  const Check = () => {
    return (
      <div className="font-bold flex  text-gray-700 rounded-full bg-green-500 w-fit p-1 items-center justify-center font-mono">
        <div className="items-center ">
          <CheckIcon height={16} width={16} color="white" />
        </div>
      </div>
    );
  };

  const NotStarted = () => {
    return (
      <div className="font-bold flex rounded-full bg-gray-400 w-fit p-1 items-center justify-center font-mono">
        <div className="items-center ">
          <EllipsisHorizontalIcon height={16} width={16} color="white" />
        </div>
      </div>
    );
  };
  const EventFinished = () => {
    return props.stages.eventfinished ? <Check /> : <NotStarted />;
  };

  const PicsCollected = () => {
    return props.stages.picscollected ? <Check /> : <NotStarted />;
  };

  const VideoCollected = () => {
    return props.stages.videocollected ? <Check /> : <NotStarted />;
  };

  const PromoCollected = () => {
    return props.stages.promocollected ? <Check /> : <NotStarted />;
  };

  const Finished = () => {
    return props.stages.finished ? <Check /> : <NotStarted />;
  };

  return (
    <div className="space-x-4 items-center justify-center flex">
      {result.isLoading ? (
        <div className="text-center text-blue-400 text-xl p-4">Updating</div>
      ) : result.isError ? (
        <div className="text-center text-red-400 text-xl p-4">
          Error updating stage
        </div>
      ) : (
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <Check />
            <div className="text-gray-600  ">Signed</div>
          </div>
          <div className="flex items-center space-x-2">
            <div
              onMouseLeave={() => setHoverEventFinished(false)}
              onMouseEnter={() => setHoverEventFinished(true)}
              onClick={() =>
                updateContractStage({
                  token: props.token,
                  id: props.id,
                  body: { eventFinished: true },
                })
              }
            >
              {hoverEventFinished ? <Check /> : <EventFinished />}
            </div>
            <div className="text-gray-600  ">Event Finished</div>
          </div>
          <div className="flex items-center space-x-2">
            <div
              onMouseLeave={() => setHoverPicsCollected(false)}
              onMouseEnter={() => setHoverPicsCollected(true)}
              onClick={() =>
                updateContractStage({
                  token: props.token,
                  id: props.id,
                  body: { picsCollected: true },
                })
              }
            >
              {hoverPicsCollected ? <Check /> : <PicsCollected />}
            </div>
            <div className="text-gray-600  ">Pics Collected</div>
          </div>
          <div className="flex items-center space-x-2">
            <div
              onMouseLeave={() => setHoverVideoCollected(false)}
              onMouseEnter={() => setHoverVideoCollected(true)}
              onClick={() =>
                updateContractStage({
                  token: props.token,
                  id: props.id,
                  body: { videoCollected: true },
                })
              }
            >
              {hoverVideoCollected ? <Check /> : <VideoCollected />}
            </div>
            <div className="text-gray-600  ">Video Collected</div>
          </div>
          <div className="flex items-center space-x-2">
            <div
              onMouseLeave={() => setHoverPromoCollected(false)}
              onMouseEnter={() => setHoverPromoCollected(true)}
              onClick={() =>
                updateContractStage({
                  token: props.token,
                  id: props.id,
                  body: { promoCollected: true },
                })
              }
            >
              {hoverPromoCollected ? <Check /> : <PromoCollected />}
            </div>
            <div className="text-gray-600  ">Promo Collected</div>
          </div>
          <div className="flex items-center space-x-2">
            <div
              onMouseLeave={() => setHoverFinished(false)}
              onMouseEnter={() => setHoverFinished(true)}
              onClick={() =>
                updateContractStage({
                  token: props.token,
                  id: props.id,
                  body: { finished: true },
                })
              }
            >
              {hoverFinished ? <Check /> : <Finished />}
            </div>
            <div className="text-gray-600  ">Finished</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditContractStage;
