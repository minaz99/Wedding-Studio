import React from "react";
import Addon from "./Addon";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { useUpdateContractMutation } from "../../../services/api/contractSlice";

function ComponentDelete(props) {
  let componentIDsArray = props.compsIDs.split(",");
  const [updateContract, result] = useUpdateContractMutation();
  const removeComponent = async (compID) => {
    let newCompsArray = componentIDsArray.filter(
      (c) => c !== "," && c !== "" && c !== compID
    );
    let componentsIDsString = "";
    //componentIDsArray = componentIDsArray.filter((id) => id !== compID);
    newCompsArray.forEach((id) => (componentsIDsString += `${id},`));
    props.setCompsIDs(componentsIDsString);
    await updateContract({
      token: props.token,
      id: props.contractID,
      body: { componentIDs: componentsIDsString },
    });
  };

  return (
    <React.Fragment>
      {result.isLoading ? (
        <div className="text-center text-blue-400 text-xl p-4">Removing</div>
      ) : result.isError ? (
        <div className="text-center text-red-400 text-xl p-4">
          Error removing comment
        </div>
      ) : (
        <div className="space-y-3 ">
          {componentIDsArray
            .filter((c) => c !== "," && c !== "")
            .map((id) => {
              return (
                <div className="flex space-x-2 items-center">
                  <Addon token={props.token} id={id} />
                  <MinusCircleIcon
                    height={24}
                    width={24}
                    color="#475569"
                    className="cursor-pointer"
                    onClick={() => removeComponent(id)}
                  />
                </div>
              );
            })}
          <div className="flex justify-center mx-auto">
            <PlusCircleIcon
              height={24}
              width={24}
              color="#475569"
              className="cursor-pointer"
            />
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default ComponentDelete;
