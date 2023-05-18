import React, { useState } from "react";

function AddContract() {
  const [secondPartyName, setSecondPartyName] = useState("");
  return (
    <div>
      <div className="items-center space-y-2">
        <div className="font-bold">Second Party name</div>
        <input
          classname="rounded  "
          value={secondPartyName}
          onChange={(e) => setSecondPartyName(e.target.value)}
          style={{
            background: "#7dd3fc",
            borderColor: "black",
            borderRadius: "7px",
          }}
        />
      </div>
    </div>
  );
}

export default AddContract;
