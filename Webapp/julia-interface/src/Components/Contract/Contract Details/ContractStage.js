import {
  ArrowPathIcon,
  CheckIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import React from "react";

function ContractStage(props) {
  //const stages = ["Signed", "Event Finished", "Pics Collected", "Finished"];
  const Check = () => {
    return (
      <div className="font-bold flex  text-gray-700 rounded-full bg-green-500 w-fit p-1 items-center justify-center font-mono">
        <div className="items-center ">
          <CheckIcon height={16} width={16} color="white" />
        </div>
      </div>
    );
  };

  /*const InProgress = () => {
    return (
      <div className="font-bold flex rounded-full bg-blue-500 w-fit p-1 items-center justify-center font-mono">
        <div className="items-center ">
          <ArrowPathIcon height={16} width={16} color="white" />
        </div>
      </div>
    );
  };*/
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
      <div className="flex items-center space-x-2">
        <Check />
        <div className="text-gray-600  ">Signed</div>
      </div>
      <div className="flex items-center space-x-2">
        <EventFinished />
        <div className="text-gray-600  ">Event Finished</div>
      </div>
      <div className="flex items-center space-x-2">
        <PicsCollected />
        <div className="text-gray-600  ">Pics Collected</div>
      </div>
      <div className="flex items-center space-x-2">
        <VideoCollected />
        <div className="text-gray-600  ">Video Collected</div>
      </div>
      <div className="flex items-center space-x-2">
        <PromoCollected />
        <div className="text-gray-600  ">Promo Collected</div>
      </div>
      <div className="flex items-center space-x-2">
        <Finished />
        <div className="text-gray-600  ">Finished</div>
      </div>
    </div>
  );
}

export default ContractStage;
