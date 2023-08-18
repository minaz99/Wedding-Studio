import {
  ArrowPathIcon,
  CheckIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useUpdateContractMutation } from "../../../services/api/contractSlice";

function EditContractStage(props) {
  const stages = ["Signed", "Event Finished", "Pics Collected", "Finished"];
  const [hoverEventFinished, setHoverEventFinished] = useState(false);
  const [hoverPicsCollected, setHoverPicsCollected] = useState(false);
  const [hoverFinished, setHoverFinished] = useState(false);
  const [updateContract, result] = useUpdateContractMutation();
  const Check = () => {
    return (
      <div className="font-bold flex  text-gray-700 rounded-full bg-green-500 w-fit p-1 items-center justify-center font-mono">
        <div className="items-center ">
          <CheckIcon height={16} width={16} color="white" />
        </div>
      </div>
    );
  };

  const InProgress = () => {
    return (
      <div className="font-bold flex rounded-full bg-blue-500 w-fit p-1 items-center justify-center font-mono">
        <div className="items-center ">
          <ArrowPathIcon height={16} width={16} color="white" />
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
    return stages.indexOf(props.stage) > 1 ? (
      <Check />
    ) : stages.indexOf(props.stage) >= 0 ? (
      <InProgress />
    ) : (
      <NotStarted />
    );
  };

  const PicsCollected = () => {
    return stages.indexOf(props.stage) > 2 ? (
      <Check />
    ) : stages.indexOf(props.stage) === 2 ? (
      <InProgress />
    ) : (
      <NotStarted />
    );
  };
  const Finished = () => {
    return stages.indexOf(props.stage) === 3 ? <Check /> : <NotStarted />;
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
                updateContract({
                  token: props.token,
                  id: props.id,
                  body: { contractStage: "Event Finished" },
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
                updateContract({
                  token: props.token,
                  id: props.id,
                  body: { contractStage: "Pics Collected" },
                })
              }
            >
              {hoverPicsCollected ? <Check /> : <PicsCollected />}
            </div>
            <div className="text-gray-600  ">Pics Collected</div>
          </div>
          <div className="flex items-center space-x-2">
            <div
              onMouseLeave={() => setHoverFinished(false)}
              onMouseEnter={() => setHoverFinished(true)}
              onClick={() =>
                updateContract({
                  token: props.token,
                  id: props.id,
                  body: { contractStage: "Finished" },
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
