import React from "react";
import { motion } from "framer-motion";
import { CameraIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useState } from "react";
import PackageSummary from "./PackageSummary";
import SeperateComponents from "./SeperateComponents";
import TotalPrice from "./TotalPrice";
function Packages() {
  const [showSummary, setShowSummary] = useState(false);
  const [pkgSelected, setPkgSelected] = useState(0);
  const pkgClicked = (pkgID) => {
    setPkgSelected(pkgID);
    setShowSummary(true);
    if (pkgID === 1) {
      setTitle("Package 1 - 600 KD");
      setTotal(total + 600);
    } else if (pkgID === 2) {
      setTitle("Package 2 - 700 KD");
      setTotal(total + 700);
    } else if (pkgID === 3) {
      setTitle("Package 2 - 800 KD");
      setTotal(total + 800);
    } else if (pkgID === 4) {
      setTitle("Al Mokhamal - 800 KD");
      setTotal(total + 800);
    } else if (pkgID === 5) {
      setTitle("Geld - 800 KD");
      setTotal(total + 600);
    } else {
      setTitle("None");
      setTotal(0);
    }
  };
  const [title, setTitle] = useState("None");
  const [showComponents, setShowComponents] = useState(false);
  const [total, setTotal] = useState(0);
  return (
    <motion.div
      initial={{ opacity: 0.25, x: -75, y: 0, scale: 1 }} //x:200 ,x:0
      animate={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
      }}
      transition={{ duration: 1 }}
      className="rounded-md bg-white mx-auto p-4"
    >
      <div className="font-extrabold text-xl my-2">Packages</div>
      <div className="flex items-center space-x-2 my-1">
        <div className="text-black font-medium">Select package</div>
        <div>
          <CameraIcon height={22} width={22} color="#db2777" />
        </div>
      </div>
      <div className="flex space-x-4 items-center ">
        <DropdownButton id="dropdown-basic-button" title={title}>
          <Dropdown.Item onClick={() => pkgClicked(0)}>None</Dropdown.Item>
          <Dropdown.Item onClick={() => pkgClicked(1)}>
            Package 1 - 600 KD
          </Dropdown.Item>
          <Dropdown.Item onClick={() => pkgClicked(2)}>
            Package 2 - 700 KD
          </Dropdown.Item>
          <Dropdown.Item onClick={() => pkgClicked(3)}>
            Package 3 - 800 KD
          </Dropdown.Item>
          <Dropdown.Item onClick={() => pkgClicked(4)}>
            Al Mokhamal el silver - 800 KD
          </Dropdown.Item>
          <Dropdown.Item onClick={() => pkgClicked(5)}>
            Geld - 800 KD
          </Dropdown.Item>
        </DropdownButton>
        {showSummary ? <PackageSummary pkgNo={pkgSelected} /> : <div />}
      </div>
      <div className="flex items-center my-3  space-x-2">
        <div className="text-black font-medium">Add components</div>
        <div>
          <PlusCircleIcon
            onClick={() => setShowComponents(!showComponents)}
            className="cursor-pointer"
            height={22}
            width={22}
            color="#475569"
          />
        </div>
      </div>
      <div className="space-y-2">
        {showComponents ? <SeperateComponents /> : <div></div>}
        <TotalPrice total={total} />
      </div>
    </motion.div>
  );
}

export default Packages;
