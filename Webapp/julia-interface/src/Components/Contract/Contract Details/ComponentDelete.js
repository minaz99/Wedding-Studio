import React from "react";
import Addon from "./Addon";

function ComponentDelete(props) {
  let componentIDsArray = props.compsIDs.split(",");
  return (
    /*<div className=" flex space-x-2">
      {componentIDsArray
        .filter((c) => c !== "," && c !== "")
        .map((id) => {
          return <Addon token={props.token} id={id} />;
        })}
    </div>*/ <div>HI there</div>
  );
}

export default ComponentDelete;
