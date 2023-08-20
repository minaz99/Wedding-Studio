import {
  CheckCircleIcon,
  TrashIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

function PackageEditableRow(props) {
  const [name, setName] = useState(props.name);
  const [pics, setPics] = useState(props.pictures);
  const [size, setSize] = useState(props.size);
  const [albumCrystal, setAlbumCrystal] = useState(props.albumCrystal);
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
  const editRow = () => {
    if (props.new === false) {
      props.editPackage({
        token: props.token,
        id: props.id,
        body: {
          name: name,
          pictures: pics,
          magazineName: size,
          albumCrystal: albumCrystal.toString(),
          magazineMini: magazineMini.toString(),
          video: video.toString(),
          openPhotoAndVideo: openPV.toString(),
          studio: studio.toString(),
          price: parseInt(price),
        },
      });

      props.setEditRow(false);
    } else {
      props.createPackage({
        token: props.token,
        body: {
          name: name,
          pictures: pics,
          magazineName: size,
          albumCrystal: albumCrystal.toString(),
          magazineMini: magazineMini.toString(),
          video: video.toString(),
          openPhotoAndVideo: openPV.toString(),
          studio: studio.toString(),
          price: parseInt(price),
        },
      });
      props.setNewRow(false);
    }
  };

  const deleteRow = () => {
    props.deletePackage({ token: props.token, id: props.id });
    props.setEditRow(false);
  };

  return (
    <div className="flex flex-row justify-evenly ">
      <input
        value={name}
        className="outline-none w-3.5  rounded-md p-1      border-none hover:bg-gray-300 bg-white"
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />

      <input
        value={pics}
        className="outline-none w-3.5  mx-4 rounded-md  p-1    border-none hover:bg-gray-300 bg-white"
        onChange={(e) => setPics(e.target.value)}
        placeholder="Pics #"
      />

      <input
        value={size}
        className="outline-none w-3.5   rounded-md p-1   border-none hover:bg-gray-300 bg-white"
        onChange={(e) => setSize(e.target.value)}
        placeholder="Magazine"
      />

      <div className="space-y-1 ">
        <DropdownButton variant="primary" title={albumCrystal ? "Yes" : "No"}>
          <Dropdown.Item onClick={() => setAlbumCrystal(true)}>
            Yes
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setAlbumCrystal(false)}>
            No
          </Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="space-y-1 ">
        <DropdownButton variant="primary" title={magazineMini ? "Yes" : "No"}>
          <Dropdown.Item onClick={() => setMagazineMini(true)}>
            Yes
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setMagazineMini(false)}>
            No
          </Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="space-y-1  ">
        <DropdownButton variant="primary" title={video ? "Yes" : "No"}>
          <Dropdown.Item onClick={() => setVideo(true)}>Yes</Dropdown.Item>
          <Dropdown.Item onClick={() => setVideo(false)}>No</Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="space-y-1  ">
        <DropdownButton variant="primary" title={openPV ? "Yes" : "No"}>
          <Dropdown.Item onClick={() => setOpenPV(true)}>Yes</Dropdown.Item>
          <Dropdown.Item onClick={() => setOpenPV(false)}>No</Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="space-y-1 ">
        <DropdownButton variant="primary" title={studio ? "Yes" : "No"}>
          <Dropdown.Item onClick={() => setStudio(true)}>Yes</Dropdown.Item>
          <Dropdown.Item onClick={() => setStudio(false)}>No</Dropdown.Item>
        </DropdownButton>
      </div>

      <input
        value={price}
        className="outline-none  mx-2  w-3.5 rounded-md p-1     border-none hover:bg-gray-300 bg-white"
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />
      <div className="flex  items-center space-x-3">
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

export default PackageEditableRow;
