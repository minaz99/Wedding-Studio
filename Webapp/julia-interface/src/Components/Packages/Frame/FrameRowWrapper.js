import React, { useState } from "react";
import FrameEditableRow from "./FrameEditableRow";
import FrameRowInfo from "./FrameRowInfo";

function FrameRowWrapper(props) {
  const [editRow, setEditRow] = useState(false);
  return (
    <div className="rounded-md bg-slate-300 shadow-md  p-2 ">
      {editRow ? (
        <FrameEditableRow
          new={false}
          setEditRow={setEditRow}
          name={props.name}
          size={props.size}
          price={props.price}
        />
      ) : (
        <FrameRowInfo
          setEditRow={setEditRow}
          name={props.name}
          size={props.size}
          price={props.price}
        />
      )}
    </div>
  );
}

export default FrameRowWrapper;
