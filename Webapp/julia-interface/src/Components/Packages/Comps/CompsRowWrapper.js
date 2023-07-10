import React, { useState } from "react";
import CompsRowInfo from "./CompsRowInfo";
import CompsEditableRow from "./CompsEditableRow";

function CompsRowWrapper(props) {
  const [editRow, setEditRow] = useState(false);
  return (
    <div className="rounded-md bg-slate-300 shadow-md  p-2 ">
      {editRow ? (
        <CompsEditableRow
          new={false}
          setEditRow={setEditRow}
          name={props.name}
          type={props.type}
          price={props.price}
        />
      ) : (
        <CompsRowInfo
          setEditRow={setEditRow}
          name={props.name}
          type={props.type}
          price={props.price}
        />
      )}
    </div>
  );
}

export default CompsRowWrapper;
