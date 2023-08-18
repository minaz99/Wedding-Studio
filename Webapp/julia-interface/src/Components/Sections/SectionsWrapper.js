import {
  ArrowLeftCircleIcon,
  ArrowLeftOnRectangleIcon,
  ArrowRightCircleIcon,
  CalendarDaysIcon,
  CameraIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  EllipsisHorizontalCircleIcon,
  PlusCircleIcon,
  TableCellsIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { motion, steps } from "framer-motion";
function SectionsWrapper(props) {
  const [opened, setOpened] = useState(false);
  const [xi, setXi] = useState(0);
  const [xf, setXf] = useState(0);
  const [calenderCollapsed, setCollanderCollapsed] = useState(true);
  const collapsedOrExpanded = () => {
    if (opened === false) {
      setOpened(true);
      setXi(100);
      setXf(0);
    } else {
      setOpened(false);
      setXi(0);
      setXf(0);
    }
  };
  return (
    <div className="space-y-6">
      {opened === true ? (
        <motion.div
          initial={{ opacity: 0.25, x: xi, y: 0, scale: 1 }} //x:200 ,x:0
          animate={{
            opacity: 1,
            y: 0,
            x: xf,
            scale: 1,
          }}
          transition={{ duration: 0.75 }}
          className="
       bg-white   w-fit p-4 h-full relative  rounded-l-lg "
        >
          <div className="flex -my-2 -mx-2">
            <div className="flex-1"></div>
            <div>
              <ArrowRightCircleIcon
                onClick={() => collapsedOrExpanded()}
                height={22}
                width={22}
                color="#475569"
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className="space-y-6 my-4">
            <div className="flex space-x-2 items-center">
              <PlusCircleIcon height={18} width={18} color="#475569" />
              <div
                onClick={() => props.setActiveView("Contract")}
                className="font-medium text-slate-600 cursor-pointer hover:text-blue-500"
              >
                Contract
              </div>
            </div>
            <div className="flex space-x-2 items-center">
              <TableCellsIcon height={18} width={18} color="#475569" />
              <div
                onClick={() => props.setActiveView("Table")}
                className="font-medium text-slate-600 cursor-pointer hover:text-blue-500"
              >
                Table
              </div>
            </div>
            <div>
              <div className="flex space-x-2 items-center">
                <CalendarDaysIcon height={18} width={18} color="#475569" />
                <div
                  onClick={() => props.setActiveView("photographers")}
                  className="font-medium text-slate-600 cursor-pointer hover:text-blue-500"
                >
                  Calender
                </div>
              </div>
            </div>
            <div className="flex space-x-2 items-center">
              <CameraIcon height={18} width={18} color="#475569" />
              <div
                onClick={() => props.setActiveView("Packages")}
                className="font-medium text-slate-600  cursor-pointer hover:text-blue-500"
              >
                Packages
              </div>
            </div>
          </div>
          <div className=" space-y-6 absolute bottom-0 mx-auto pb-4 ">
            <div className="flex space-x-2 items-center">
              <Cog6ToothIcon height={18} width={18} color="#475569" />
              <div
                onClick={() => props.setActiveView("Settings")}
                className="font-medium text-slate-600  cursor-pointer hover:text-blue-500"
              >
                Settings
              </div>
            </div>
            <div className="flex space-x-2 items-center">
              <ArrowLeftOnRectangleIcon
                height={18}
                width={18}
                color="#475569"
              />
              <div className="font-medium text-slate-600   cursor-pointer hover:text-blue-500">
                Log out
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <UserCircleIcon height={20} width={20} color="#ec4899" />
              <div className="font-medium text-sm  text-gray-400">
                {props.name}
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0.25, x: xi, y: 0, scale: 1 }} //x:200 ,x:0
          animate={{
            opacity: 1,
            y: 0,
            x: xf,
            scale: 1,
          }}
          transition={{ duration: 0.75 }}
          className="
       bg-white   w-fit p-4 relative  rounded-l-lg flex  h-full "
        >
          <EllipsisHorizontalCircleIcon
            height={30}
            width={30}
            color="#475569"
            onClick={() => collapsedOrExpanded()}
            className="m-auto  cursor-pointer"
          />
        </motion.div>
      )}
    </div>
  );
}

export default SectionsWrapper;
