import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

function CompsEditableRow(props) {
  const [name, setName] = useState(props.name);
  const [type, setType] = useState(props.type);
  const [price, setPrice] = useState(props.price);
  return (
    <div className="flex justify-center  items-center space-x-8">
      <input
        value={name}
        className="outline-none flex-1 rounded-md p-1 text-center  border-none hover:bg-gray-300 bg-white"
        onChange={(e) => setName(e.value)}
      />

      <input
        value={type}
        className="outline-none flex-1 rounded-md p-1  text-center border-none hover:bg-gray-300 bg-white"
        onChange={(e) => setType(e.value)}
      />
      <input
        value={price}
        className="outline-none flex-1 rounded-md p-1  text-center border-none hover:bg-gray-300 bg-white"
        onChange={(e) => setPrice(e.value)}
      />
      <div className="flex-1 text-center">
        <CheckCircleIcon
          height={25}
          width={25}
          color="green"
          className="cursor-pointer mx-auto  "
          onClick={() => props.setEditRow(false)}
        />
      </div>
    </div>
  );
}

export default CompsEditableRow;
