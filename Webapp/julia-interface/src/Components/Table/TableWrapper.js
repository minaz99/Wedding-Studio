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
import { motion } from "framer-motion";
import AddContractWrapper from "../Contract/Contract Details/AddContractWrapper";
import CreatContractWrapper from "../Contract/New Contract Components/CreatContractWrapper";
import ContractWrapper from "../Contract/Contract Details/ContractWrapper";
function TableWrapper(props) {
  const [chevHover, setChevHover] = useState(false);
  const cheveronDownColor = chevHover ? "black" : "#9ca3af";
  const [showContractDetails, setShowContractDetails] = useState(false);
  const [showContract, setShowContract] = useState(false);

  const [initialX, setIntialX] = useState(0);
  const [finalX, setFinalX] = useState(0);
  const pressedRow = () => {
    setIntialX(0);
    setFinalX(0); //finalX: -250, InitialX: 0 //we need to animate the whole component (Table + Contract so that they move together in the same transition )
    setShowContractDetails(true);
  };
  const resetValues = () => {
    setIntialX(0);
    setFinalX(0);
    setShowContractDetails(false);
  };

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
      className="rounded-r-lg p-4 w-11/12  shadow-md h-full  bg-slate-600 "
    >
      {showContractDetails ? (
        <ContractWrapper resetValues={resetValues} />
      ) : (
        <div></div>
      )}
      <div className="flex items-center  p-2  ">
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
        </div>
      </div>
      <div className="">
        <TableHeader />
        <TableRow status="In progress" color="green" pressedRow={pressedRow} />
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
      </div>
      <TableFooter />
    </motion.div>
  );
}

export default TableWrapper;
