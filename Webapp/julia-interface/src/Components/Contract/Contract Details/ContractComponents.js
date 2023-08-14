import React from "react";
import { useGetComponentByIDQuery } from "../../../services/api/componentSlice";
import Addon from "./Addon";

function ContractComponents(props) {
  let componentIDsArray = props.compsIDs.split(",");
  return (
    <div className=" flex space-x-2">
      {componentIDsArray
        .filter((c) => c !== ",")
        .map((id) => {
          return <Addon token={props.token} id={id} />;
        })}
    </div>
  );
}

export default ContractComponents;
