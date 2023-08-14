import {
  CheckCircleIcon,
  TrashIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";

function CompEditableRow(props) {
  const [name, setName] = useState(props.name);
  const [type, setType] = useState(props.type);
  const [price, setPrice] = useState(props.price);
  const [checkHover, setCheckHover] = useState("#10b981");
  const [xHover, setXHover] = useState("#334155");

  const cancelRow = () => {
    if (props.new === false) props.setEditRow(false);
    else props.setNewRow(false);
  };

  const editRow = () => {
    if (props.new === false) {
      props.editComponent({
        token: props.token,
        id: props.id,
        body: { componentType: type, name: name, price: parseInt(price) },
      });

      props.setEditRow(false);
    } else {
      props.createComponent({
        token: props.token,
        body: { componentType: type, name: name, price: price },
      });
      props.setNewRow(false);
    }
  };

  const deleteRow = () => {
    props.deleteComponent({ token: props.token, id: props.id });
    props.setEditRow(false);
  };

  return (
    <div key={props.id} className="flex justify-evenly  items-center ">
      <input
        value={name}
        className="outline-none  rounded-md p-1 mx-12 text-center   border-none hover:bg-gray-300 bg-white"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        value={type}
        className="outline-none  rounded-md p-1 mx-12 text-center border-none hover:bg-gray-300 bg-white"
        onChange={(e) => setType(e.target.value)}
      />

      <input
        value={price}
        className="outline-none   rounded-md p-1 mx-12 text-center border-none hover:bg-gray-300 bg-white"
        onChange={(e) => setPrice(e.target.value)}
      />

      <div className="flex mx-16 space-x-6 items-center ">
        <div className="">
          <CheckCircleIcon
            height={30}
            width={30}
            className="cursor-pointer"
            color={checkHover}
            onMouseEnter={() => setCheckHover("#047857")}
            onMouseLeave={() => setCheckHover("#10b981")}
            onClick={() => editRow()}
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
        {props.new ? (
          <div></div>
        ) : (
          <div>
            <TrashIcon
              height={20}
              width={20}
              color="gray"
              className="cursor-pointer mx-auto  "
              onClick={() => deleteRow()}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default CompEditableRow;
