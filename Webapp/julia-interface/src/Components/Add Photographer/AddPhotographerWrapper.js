import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  UserIcon,
  CameraIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useAddPhotographerMutation } from "../../services/api/photographersSlice";
import { Spinner } from "react-bootstrap";
function AddPhotographerWrapper(props) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [addPhotographer, result] = useAddPhotographerMutation();
  const types = [
    "Photo",
    "Video",
    "Zoom Light",
    "Camera Crane",
    "Hanging Camera",
    "Camera Ronin",
  ];
  return (
    <motion.div
      initial={{ opacity: 0.25, x: -200, y: 0, scale: 1.2 }} //x:200 ,x:0
      animate={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
      }}
      transition={{ duration: 0.75 }}
      className="rounded-r-lg  space-y-6  p-3 items-center h-full w-fit shadow-md overflow-y-scroll  bg-slate-600"
    >
      <div className="bg-white space-y-3 rounded-lg p-4">
        <div className="flex space-x-2 items-center">
          <div className="font-extrabold text-xl items-center text-slate-600">
            Add Photographer
          </div>
        </div>
        {result.isLoading ? (
          <div className="text-center text-blue-400 text-xl p-4">Saving</div>
        ) : result.isError ? (
          <div className="text-center text-red-400 text-xl p-4">
            Error saving photographer
          </div>
        ) : (
          <div className="flex space-x-2">
            <div className="flex space-x-2 items-center">
              <div className="text-black font-medium ">Name</div>
              <div className="rounded-md bg-slate-200 w-fit space-x-2 flex items-center p-1">
                <UserIcon height={22} width={22} color="#71717a" />
                <input
                  value={name}
                  style={{
                    background: "#e2e8f0",
                    borderRadius: "6px",
                    color: "#475569",
                    padding: "3px 3px 3px 3px",
                    border: "none",
                    outline: "none",
                  }}
                  className="font-medium "
                  onChange={(e) =>
                    setName(
                      e.target.value.charAt(0).toUpperCase() +
                        e.target.value.slice(1)
                    )
                  }
                />
              </div>
            </div>
            <div className="flex space-x-2 items-center">
              <div className="text-black font-medium">Type</div>

              <div className="rounded-md bg-slate-200 w-fit space-x-2 flex items-center p-1">
                <CameraIcon height={22} width={22} color="#db2777" />
                <DropdownButton id="dropdown-basic-button" title={type}>
                  {types.map((type) => {
                    return (
                      <Dropdown.Item onClick={() => setType(type)}>
                        {type}
                      </Dropdown.Item>
                    );
                  })}
                </DropdownButton>
              </div>
              <div className="flex space-x-2 items-center">
                <div className="text-black font-medium ">Date</div>
                <div className="rounded-md bg-slate-200 w-fit space-x-2 flex items-center p-1">
                  <CalendarDaysIcon height={22} width={22} color="#818cf8" />
                  <input
                    type="date"
                    value={date}
                    style={{
                      background: "#e2e8f0",
                      borderRadius: "6px",
                      color: "#475569",
                      padding: "4px 4px 4px 4px",
                      border: "none",
                      outline: "none",
                    }}
                    className="font-medium"
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex w-full">
        <button
          onClick={async () =>
            await addPhotographer({
              token: props.token,
              body: { name: name, type: type, date: date },
            })
          }
          className="  text-center mx-auto text-lg  font-bold rounded-md p-2 w-3/12   bg-white text-slate-600"
        >
          {result.isLoading ? (
            <Spinner animation="border" role="status"></Spinner>
          ) : (
            <div>Save</div>
          )}
        </button>
      </div>
    </motion.div>
  );
}

export default AddPhotographerWrapper;
