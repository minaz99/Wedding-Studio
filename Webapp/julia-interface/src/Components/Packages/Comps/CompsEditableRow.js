import {
  CheckCircleIcon,
  PencilSquareIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";

function CompsEditableRow(props) {
  const [name, setName] = useState(props.name);
  const [type, setType] = useState(props.type);
  const [price, setPrice] = useState(props.price);
  const [checkHover, setCheckHover] = useState("#10b981");
  const [xHover, setXHover] = useState("#334155");
  const cancelRow = () => {
    if (props.new === false) props.setEditRow(false);
    else props.setNewRow(false);
  };
  return (
    <div className="flex justify-evenly  items-center ">
      <input
        value={name}
        className="outline-none  rounded-md p-1 mx-12 text-center   border-none hover:bg-gray-300 bg-white"
        onChange={(e) => setName(e.value)}
      />

      <input
        value={type}
        className="outline-none  rounded-md p-1 mx-12 text-center border-none hover:bg-gray-300 bg-white"
        onChange={(e) => setType(e.value)}
      />

      <input
        value={price}
        className="outline-none   rounded-md p-1 mx-12 text-center border-none hover:bg-gray-300 bg-white"
        onChange={(e) => setPrice(e.value)}
      />

      <div className="flex mx-20 items-center space-x-6 ">
        <div className="">
          <CheckCircleIcon
            height={30}
            width={30}
            className="cursor-pointer"
            color={checkHover}
            onMouseEnter={() => setCheckHover("#047857")}
            onMouseLeave={() => setCheckHover("#10b981")}
          />
        </div>
        <div className="">
          <XCircleIcon
            height={30}
            width={30}
            className="cursor-pointer"
            color={xHover}
            onMouseEnter={() => setXHover("black")}
            onMouseLeave={() => setXHover("#334155")}
            onClick={() => cancelRow()}
          />
        </div>
      </div>
    </div>
  );
}

export default CompsEditableRow;
