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
import { Dropdown, DropdownButton } from "react-bootstrap";
import FilterWrapper from "./Filters/FilterWrapper";
function TableWrapper(props) {
  const [chevHover, setChevHover] = useState(false);
  const cheveronDownColor = chevHover ? "black" : "#9ca3af";
  const [showContractDetails, setShowContractDetails] = useState(false);
  const [showContract, setShowContract] = useState(false);
  const [filterType, setFilterType] = useState("Select filter");
  const [initialX, setIntialX] = useState(0);
  const [finalX, setFinalX] = useState(0);
  const [showFilter, setShowFilter] = useState(false);
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

  const filterTypeSelected = (filterType) => {
    setFilterType(filterType);
    setShowFilter(true);
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
      className="rounded-r-lg z-0 relative p-4 w-11/12  shadow-md h-full  bg-slate-600 "
    >
      {showContractDetails ? (
        <ContractWrapper resetValues={resetValues} />
      ) : (
        <div></div>
      )}

      <div className="flex items-center  p-2  ">
        <div className="tracking-wider space-x-2 text-lg text-white  font-semibold flex items-center">
          <FunnelIcon className=" mx-2" height={20} width={20} color="white" />
          Filter
          <div className="space-y-1">
            <DropdownButton
              variant="warning"
              id="dropdown-basic-button"
              title={filterType}
            >
              <Dropdown.Item onClick={() => setFilterType("None")}>
                None
              </Dropdown.Item>
              <Dropdown.Item onClick={() => filterTypeSelected("Event Date")}>
                Event Date
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => filterTypeSelected("Event Location")}
              >
                Event Location
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => filterTypeSelected("Contract Stage")}
              >
                Contract Stage
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => filterTypeSelected("Contract Status")}
              >
                Contract Status
              </Dropdown.Item>
            </DropdownButton>
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
      {showFilter ? (
        <FilterWrapper setShowFilter={setShowFilter} filterType={filterType} />
      ) : (
        <div></div>
      )}
      <TableFooter />
    </motion.div>
  );
}

export default TableWrapper;
