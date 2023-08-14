import React, { useState } from "react";
import PackageEditableRow from "./PackageEditableRow";
import PackageRowInfo from "./PackageRowInfo";

function PackageRowWrapper(props) {
  const [editRow, setEditRow] = useState(false);
  return (
    <div key={props.id} className="rounded-md bg-slate-300 shadow-md  p-2 ">
      {editRow ? (
        <PackageEditableRow
          new={false}
          setEditRow={setEditRow}
          name={props.name}
          pictures={props.pictures}
          size={props.size}
          albumCrystal={props.albumCrystal}
          magazineMini={props.magazineMini}
          video={props.video}
          openPV={props.openPV}
          studio={props.studio}
          price={props.price}
          id={props.id}
          token={props.token}
          editPackage={props.editPackage}
          deletePackage={props.deletePackage}
        />
      ) : (
        <PackageRowInfo
          setEditRow={setEditRow}
          name={props.name}
          pictures={props.pictures}
          size={props.size}
          albumCrystal={props.albumCrystal}
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
