import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

function PackageRowInfo(props) {
  return (
    <div className="flex  justify-center  items-center space-x-8">
      <div className="text-slate-600 flex-1 text-center">{props.name}</div>
      <div className="text-slate-600 flex-1 text-center">{props.pictures}</div>
      <div className="text-slate-600 flex-1 text-center">{props.size}</div>
      <div className="flex-1 ">
        {props.albumCrystal ? (
          <CheckCircleIcon
            className="mx-auto "
            height={20}
            width={20}
            color="#059669"
          />
        ) : (
          <XCircleIcon
            className="mx-auto "
            height={20}
            width={20}
            color="#dc2626"
          />
        )}
      </div>
      <div className="flex-1 ">
        {props.magazineMini ? (
          <CheckCircleIcon
            className="mx-auto "
            height={20}
            width={20}
            color="#059669"
          />
        ) : (
          <XCircleIcon
            className="mx-auto "
            height={20}
            width={20}
            color="#dc2626"
          />
        )}
      </div>

      <div className=" flex-1 ">
        {props.video ? (
          <CheckCircleIcon
            className="mx-auto "
            height={20}
            width={20}
            color="#059669"
          />
        ) : (
          <XCircleIcon
            className="mx-auto "
            height={20}
            width={20}
            color="#dc2626"
          />
        )}
      </div>

      <div className="flex-1 ">
        {props.openPV ? (
          <CheckCircleIcon
            className="mx-auto "
            height={20}
            width={20}
            color="#059669"
          />
        ) : (
          <XCircleIcon
            className="mx-auto "
            height={20}
            width={20}
            color="#dc2626"
          />
        )}
      </div>
      <div className="flex-1 ">
        {props.studio ? (
          <CheckCircleIcon
            className="mx-auto "
            height={20}
            width={20}
            color="#059669"
          />
        ) : (
          <XCircleIcon
            className="mx-auto "
            height={20}
            width={20}
            color="#dc2626"
          />
        )}
      </div>
      <div className="text-slate-600  flex-1 text-center ">{props.price}</div>
      <div className="flex-1 text-center">
        <PencilSquareIcon
          height={20}
          width={20}
          color="gray"
          className="cursor-pointer mx-auto  "
          onClick={() => props.setEditRow(true)}
        />
      </div>
    </div>
  );
}

export default PackageRowInfo;
