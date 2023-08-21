import React from "react";
import { motion } from "framer-motion";
import {
  ArrowLeftCircleIcon,
  CameraIcon,
  MinusCircleIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useState } from "react";
import PackageSummary from "./PackageSummary";
import SeperateComponents from "./SeperateComponents";
import TotalPrice from "./TotalPrice";
import { useGetPackagesQuery } from "../../../services/api/packageSlice";
import AddComponentsWrapper from "./AddComponentsWrapper";
function Packages(props) {
  const [showSummary, setShowSummary] = useState(false);

  const { data, isLoading, isError, isSuccess } = useGetPackagesQuery(
    { token: props.token },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const [title, setTitle] = useState("None");
  const [showComponents, setShowComponents] = useState(false);
  const [total, setTotal] = useState(props.total);
  const [selectedMagazineComponents, setSelectedMagazineComponents] = useState(
    []
  );
  const [selectedPicturesComponents, setSelectedPicturesComponents] = useState(
    []
  );
  const [selectedVideoComponents, setSelectedVideoComponents] = useState([]);
  const [selectedFrameComponents, setSelectedFrameComponents] = useState([]);
  const [selectedAlbumComponents, setSelectedAlbumComponents] = useState([]);
  const selectPkg = (pkg) => {
    if (props.pkg !== 0) {
      props.setTotal(props.total - total + pkg.price);
    } else props.setTotal(props.total + pkg.price);
    setTotal(pkg.price);
    setTitle(pkg.name);
    props.setPkg(pkg.id);
    props.setPackageDetails(pkg);
  };
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
      <div className="flex items-center space-x-4">
        <ArrowLeftCircleIcon
          height={22}
          width={22}
          color="gray"
          className="cursor-pointer"
          onClick={() => props.setActiveView("contract details")}
        />
        <div className="font-extrabold text-xl my-2">Packages</div>
      </div>
      <div className="flex items-center space-x-2 my-1">
        <div className="text-black font-medium">Select package</div>
        <div>
          <CameraIcon height={22} width={22} color="#db2777" />
        </div>
      </div>
      <div className="flex space-x-4 items-center ">
        <DropdownButton id="dropdown-basic-button" title={title}>
          {isLoading ? (
            <div className="text-center text-blue-400 text-xl p-4">
              Loading...
            </div>
          ) : isError ? (
            <div className="text-center text-red-400 text-xl p-4">
              Error geting Components...
            </div>
          ) : isSuccess ? (
            data.packages.map((pkg) => {
              return (
                <Dropdown.Item onClick={() => selectPkg(pkg)}>
                  {pkg.name}
                </Dropdown.Item>
              );
            })
          ) : (
            <div></div>
          )}
        </DropdownButton>

        <PackageSummary
          packageDetails={props.packageDetails}
          pkgNo={props.pkg}
        />
      </div>
      <div className="flex items-center my-3  space-x-2">
        <div className="text-black font-medium">Add components</div>

        {!showComponents ? (
          <PlusCircleIcon
            onClick={() => setShowComponents(!showComponents)}
            className="cursor-pointer"
            height={22}
            width={22}
            color="#475569"
          />
        ) : (
          <MinusCircleIcon
            onClick={() => setShowComponents(!showComponents)}
            className="cursor-pointer"
            height={22}
            width={22}
            color="#475569"
          ></MinusCircleIcon>
        )}
      </div>
      <div className="space-y-2">
        {showComponents ? (
          <AddComponentsWrapper
            componentsSelected={props.componentsSelected}
            setComponentsSelected={props.setComponentsSelected}
            components={props.components}
            setComponents={props.setComponents}
            token={props.token}
            setTotal={props.setTotal}
            total={props.total}
            selectedMagazineComponents={selectedMagazineComponents}
            setSelectedMagazineComponents={setSelectedMagazineComponents}
            selectedPicturesComponents={selectedPicturesComponents}
            setSelectedPicturesComponents={setSelectedPicturesComponents}
            selectedVideoComponents={selectedVideoComponents}
            setSelectedVideoComponents={setSelectedVideoComponents}
            selectedFrameComponents={selectedFrameComponents}
            setSelectedFrameComponents={setSelectedFrameComponents}
            selectedAlbumComponents={selectedAlbumComponents}
            setSelectedAlbumComponents={setSelectedAlbumComponents}
          />
        ) : (
          <div></div>
        )}
        <TotalPrice
          discount={props.discount}
          setDiscount={props.setDiscount}
          total={props.total}
        />
      </div>
    </motion.div>
  );
}

export default Packages;
