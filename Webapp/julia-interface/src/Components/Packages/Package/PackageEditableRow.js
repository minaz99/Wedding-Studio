import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

function PackageEditableRow(props) {
  const [name, setName] = useState(props.name);
  const [pics, setPics] = useState(props.pictures);
  const [size, setSize] = useState(props.size);
  const [magazineMini, setMagazineMini] = useState(props.magazineMini);
  const [video, setVideo] = useState(props.video);
  const [openPV, setOpenPV] = useState(props.openPV);
  const [studio, setStudio] = useState(props.studio);
  const [price, setPrice] = useState(props.price);
  const [checkHover, setCheckHover] = useState("#10b981");
  const [xHover, setXHover] = useState("#334155");
  const cancelRow = () => {
    if (props.new === false) props.setEditRow(false);
    else props.setNewRow(false);
  };
  return (
    <div className="flex    items-center ">
      <input
        value={name}
        className="outline-none   rounded-md p-1 w-28  text-center   border-none hover:bg-gray-300 bg-white"
        onChange={(e) => setName(e.value)}
      />

      <input
        value={pics}
        className="outline-none mx-4 rounded-md  p-1 w-28  text-center border-none hover:bg-gray-300 bg-white"
        onChange={(e) => setPics(e.value)}
      />

      <input
        value={size}
        className="outline-none   rounded-md p-1  w-28  text-center border-none hover:bg-gray-300 bg-white"
        onChange={(e) => setSize(e.value)}
      />

      <div className="space-y-1 mx-8 flex-1">
        <DropdownButton variant="primary" title={magazineMini ? "Yes" : "No"}>
          <Dropdown.Item onClick={() => setMagazineMini(true)}>
            Yes
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setMagazineMini(false)}>
            No
          </Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="space-y-1 flex-1 ">
        <DropdownButton variant="primary" title={video ? "Yes" : "No"}>
          <Dropdown.Item onClick={() => setVideo(true)}>Yes</Dropdown.Item>
          <Dropdown.Item onClick={() => setVideo(false)}>No</Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="space-y-1 flex-1">
        <DropdownButton variant="primary" title={openPV ? "Yes" : "No"}>
          <Dropdown.Item onClick={() => setOpenPV(true)}>Yes</Dropdown.Item>
          <Dropdown.Item onClick={() => setOpenPV(false)}>No</Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="space-y-1  ">
        <DropdownButton variant="primary" title={studio ? "Yes" : "No"}>
          <Dropdown.Item onClick={() => setStudio(true)}>Yes</Dropdown.Item>
          <Dropdown.Item onClick={() => setStudio(false)}>No</Dropdown.Item>
        </DropdownButton>
      </div>

      <input
        value={price}
        className="outline-none  mx-12 rounded-md p-1  w-28  text-center border-none hover:bg-gray-300 bg-white"
        onChange={(e) => setPrice(e.value)}
      />
      <div className="flex  items-center  space-x-6 ">
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

export default PackageEditableRow;
