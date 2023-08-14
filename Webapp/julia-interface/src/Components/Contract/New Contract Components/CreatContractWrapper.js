import { XCircleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import NewContractSteps from "./NewContractSteps";
import ContractDetails from "./ContractDetails";
import { motion } from "framer-motion";
import Packages from "./Packages";
import ContractReview from "./ContractReview";
import Calendar from "react-calendar";
import { useCreateContractMutation } from "../../../services/api/contractSlice";
function CreatContractWrapper(props) {
  const [contractDetailsColor, setContractDetailsColor] = useState("white");
  const [packagesColor, setPackagesColor] = useState("white");
  const [contractReviewColor, setContractReviewColor] = useState("white");
  const [activeView, setActiveView] = useState("contract details");
  const [xi, setXi] = useState(-50);
  const [xf, setXf] = useState(0);
  const [secondPartyName, setSecondPartyName] = useState("");
  const [civilID, setCivilID] = useState("");
  const [brideName, setBrideName] = useState("");
  const [groomName, setGroomName] = useState("");
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDate, setEventDate] = useState(new Date());
  const [pkg, setPkg] = useState(0);
  const [componentsSelected, setComponentsSelected] = useState([]);
  const [components, setComponents] = useState([]);
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [packageDetails, setPackageDetails] = useState({});
  const [comments, setComments] = useState("");
  const [createContract, result] = useCreateContractMutation();

  const onFinishSection = () => {
    if (activeView === "contract details") {
      setActiveView("packages");
      setContractDetailsColor("#86efac");
      setXi(0);
      setXf(220);
    } else if (activeView === "packages") {
      setActiveView("contract review");
      setPackagesColor("#86efac");
      setXi(220);
      setXf(830);
    }
  };

  const saveContract = async () => {
    let componentsIDsString = "";
    components.forEach((id) => (componentsIDsString += `${id},`));
    await createContract({
      token: props.token,
      body: {
        secondPartyName: secondPartyName,
        brideName: brideName,
        groomName: groomName,
        eventType: eventType,
        eventLocation: eventLocation,
        eventDate: eventDate,
        civilID: civilID,
        phone1: phone1,
        contractStatus: "In Progress",
        price: total - discount,
        photographer: "",
        video: "",
        packageID: pkg,
        componentIDs: componentsIDsString,
        contractStage: "Signed",
        comments: comments,
      },
    });
    setActiveView("contract details");
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
      className="rounded-r-lg  space-y-6  p-3 items-center h-full  shadow-md   bg-slate-600"
    >
      {result.isLoading ? (
        <div className="text-center text-blue-400 text-xl p-4">Saving</div>
      ) : result.isError ? (
        <div className="text-center text-red-400 text-xl p-4">
          Error saving contract
        </div>
      ) : (
        <div className="space-y-6">
          <NewContractSteps
            xi={xi}
            xf={xf}
            packagesColor={packagesColor}
            contractDetailsColor={contractDetailsColor}
            contractReviewColor={contractReviewColor}
          />
          {activeView === "contract details" ? (
            <ContractDetails
              setSecondPartyName={setSecondPartyName}
              secondPartyName={secondPartyName}
              setCivilID={setCivilID}
              civilID={civilID}
              setBrideName={setBrideName}
              brideName={brideName}
              setGroomName={setGroomName}
              groomName={groomName}
              phone1={phone1}
              setPhone1={setPhone1}
              phone2={phone2}
              setPhone2={setPhone2}
              eventType={eventType}
              setEventType={setEventType}
              eventLocation={eventLocation}
              setEventLocation={setEventLocation}
              eventDate={eventDate}
              setEventDate={setEventDate}
            />
          ) : activeView === "packages" ? (
            <Packages
              setComponents={setComponents}
              components={components}
              token={props.token}
              total={total}
              setTotal={setTotal}
              pkg={pkg}
              setPkg={setPkg}
              discount={discount}
              setDiscount={setDiscount}
              packageDetails={packageDetails}
              setPackageDetails={setPackageDetails}
              setComponentsSelected={setComponentsSelected}
              componentsSelected={componentsSelected}
            />
          ) : (
            <ContractReview
              brideName={brideName}
              groomName={groomName}
              secondPartyName={secondPartyName}
              eventType={eventType}
              eventLocation={eventLocation}
              eventDate={eventDate}
              civilID={civilID}
              phone1={phone1}
              packageName={packageDetails.name}
              packagePrice={packageDetails.price}
              discount={discount}
              total={total}
              packageDetails={packageDetails}
              componentsSelected={componentsSelected}
              comments={comments}
              setComments={setComments}
            />
          )}
        </div>
      )}
      <motion.div
        initial={{ opacity: 0.25, x: -50, y: 0, scale: 1 }} //x:200 ,x:0
        animate={{
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
        }}
        transition={{ duration: 1 }}
        className="flex justify-center my-2"
      >
        {activeView !== "contract review" ? (
          <button
            onClick={() => onFinishSection()}
            className="  text-center  text-lg  font-bold rounded-md p-2 w-3/12   bg-white text-slate-600"
          >
            Next
          </button>
        ) : (
          <button
            onClick={() => saveContract()}
            className="  text-center  text-lg  font-bold rounded-md p-2 w-3/12   bg-white text-slate-600"
          >
            Create
          </button>
        )}
      </motion.div>
    </motion.div>
  );
}

export default CreatContractWrapper;
