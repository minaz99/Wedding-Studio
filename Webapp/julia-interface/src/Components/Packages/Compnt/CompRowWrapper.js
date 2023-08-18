import React, { useState } from "react";
import CompEditableRow from "./CompEditableRow";
import CompntRow from "./CompntRow";

function CompRowWrapper(props) {
  const [editRow, setEditRow] = useState(false);
  return (
    <div key={props.id} className="rounded-md bg-slate-300 shadow-md  p-2 ">
      {editRow ? (
        <CompEditableRow
          new={false}
          setEditRow={setEditRow}
          name={props.name}
          type={props.type}
          price={props.price}
          id={props.id}
          token={props.token}
          editComponent={props.editComponent}
          deleteComponent={props.deleteComponent}
        />
      ) : (
        <CompntRow
          setEditRow={setEditRow}
          name={props.name}
          type={props.type}
          price={props.price}
          id={props.id}
          role={props.role}
        />
      )}
    </div>
  );
}

export default CompRowWrapper;
