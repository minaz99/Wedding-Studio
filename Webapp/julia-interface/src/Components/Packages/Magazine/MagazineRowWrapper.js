import React, { useState } from "react";
import MagazineRowInfo from "./MagazineRowInfo";
import MagazineEditableRow from "./MagazineEditableRow";

function MagazineRowWrapper(props) {
  const [editRow, setEditRow] = useState(false);
  return (
    <div className="rounded-md bg-slate-300 shadow-md  p-2 ">
      {editRow ? (
        <MagazineEditableRow
          new={false}
          setEditRow={setEditRow}
          name={props.name}
          size={props.size}
          type={props.type}
          price={props.price}
        />
      ) : (
        <MagazineRowInfo
          setEditRow={setEditRow}
          name={props.name}
          size={props.size}
          type={props.type}
          price={props.price}
        />
      )}
    </div>
  );
}

export default MagazineRowWrapper;
