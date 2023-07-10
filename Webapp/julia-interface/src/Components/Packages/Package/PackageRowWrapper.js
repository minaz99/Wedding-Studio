import React, { useState } from "react";
import PackageEditableRow from "./PackageEditableRow";
import PackageRowInfo from "./PackageRowInfo";

function PackageRowWrapper(props) {
  const [editRow, setEditRow] = useState(false);
  return (
    <div className="rounded-md bg-slate-300 shadow-md  p-2 ">
      {editRow ? (
        <PackageEditableRow
          new={false}
          setEditRow={setEditRow}
          name={props.name}
          pictures={props.pictures}
          size={props.size}
          magazineMini={props.magazineMini}
          video={props.video}
          openPV={props.openPV}
          studio={props.studio}
          price={props.price}
        />
      ) : (
        <PackageRowInfo
          setEditRow={setEditRow}
          name={props.name}
          pictures={props.pictures}
          size={props.size}
          magazineMini={props.magazineMini}
          video={props.video}
          openPV={props.openPV}
          studio={props.studio}
          price={props.price}
        />
      )}
    </div>
  );
}

export default PackageRowWrapper;
