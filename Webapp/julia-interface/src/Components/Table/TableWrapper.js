import React, { useEffect, useState } from "react";
import {
  ChevronDownIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import TableFooter from "./TableFooter";
import ContractView from "./ContractView";
import { motion } from "framer-motion";
function TableWrapper(props) {
  const [chevHover, setChevHover] = useState(false);
  const cheveronDownColor = chevHover ? "black" : "#9ca3af";

  //const [showContract, setShowContract] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0.25, x: props.initialX, scale: 1.2 }}
      animate={{
        opacity: 1,
        x: props.finalX,
        scale: 1,
      }}
      transition={{ duration: 1.5 }}
      className="rounded-lg h-screen border-2 mx-auto p-4 w-8/12  shadow-lg border-gray-400  bg-slate-600 "
    >
      <div className="flex items-center    p-2  ">
        <div className="tracking-wider text-lg text-white  font-semibold flex items-center">
          <FunnelIcon className=" mx-2" height={20} width={20} color="white" />
          Filter
          <div className="bg-white text-slate-700 text-sm hover:bg-gray-300 hover:cursor-pointer mx-2 flex items-center rounded-md p-2">
            Event date
            <ChevronDownIcon
              onMouseEnter={() => setChevHover(true)}
              onMouseLeave={() => setChevHover(false)}
              height={15}
              width={15}
              color={cheveronDownColor}
              className="mx-1 "
            />
          </div>
        </div>
        <div className="flex-1"></div>
        <div className="flex p-2 space-x-2 items-center">
          <div className="  rounded-md p-1 flex items-center hover:bg-gray-300 bg-white">
            <input
              placeholder="Search"
              className="outline-none border-none hover:bg-gray-300 bg-white"
            />
            <MagnifyingGlassIcon
              className=""
              height={20}
              width={20}
              color="#334155"
            />
          </div>

          <button className="bg-white  rounded-md p-1 flex items-center hover:bg-gray-300  text-slate-700">
            Contract{" "}
            <PlusCircleIcon
              className="mx-1"
              height={20}
              width={20}
              color="#334155"
            />
          </button>
        </div>
      </div>
      <div className="">
        <TableHeader />
        <TableRow
          status="In progress"
          color="green"
          pressedRow={props.pressedRow}
        />
        <TableRow status="Done" color="blue" />
        <TableRow status="On hold" color="green" />
        <TableRow status="Cancelled" color="red" />
        <TableRow status="Done" color="blue" />
        <TableRow status="In progress" color="green" />
        <TableRow status="Done" color="blue" />
        <TableRow status="On hold" color="green" />
        <TableRow status="Cancelled" color="red" />
        <TableRow status="Done" color="blue" />
        <TableRow status="In progress" color="green" />
        <TableRow status="Done" color="blue" />
      </div>
      <TableFooter />
    </motion.div>
  );
}

export default TableWrapper;
