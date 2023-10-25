import React, { useState } from "react";
import NewContractSteps from "./NewContractSteps";
import ContractDetails from "./ContractDetails";
import { motion } from "framer-motion";
import Packages from "./Packages";
import ContractReview from "./ContractReview";
import {
  useCreateContractMutation,
  useMakePaymentMutation,
} from "../../../services/api/contractSlice";
import ContractPDF from "./ContractPDF";
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
  const [eventDate, setEventDate] = useState(new Date().toLocaleDateString());
  const [pkg, setPkg] = useState(0);
  const [componentsSelected, setComponentsSelected] = useState([]);
  const [components, setComponents] = useState([]);
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [packageDetails, setPackageDetails] = useState({});
  const [comments, setComments] = useState("");
  const [createdBy, setCreatedBy] = useState(props.name);
  const [showPDFContract, setShowPDFContract] = useState(false);
  const [createContract, result] = useCreateContractMutation();
  const [paidAmount, setPaidAmount] = useState(0);
  const [packageName, setPackageName] = useState("None");
  const [selectedMagazineComponents, setSelectedMagazineComponents] = useState(
    []
  );
  const [selectedPicturesComponents, setSelectedPicturesComponents] = useState(
    []
  );
  const [selectedVideoComponents, setSelectedVideoComponents] = useState([]);
  const [selectedFrameComponents, setSelectedFrameComponents] = useState([]);
  const [selectedAlbumComponents, setSelectedAlbumComponents] = useState([]);
  const [errorMsg, setErrMsg] = useState("");
  const dateCreated = new Date();

  const allDetailsFilled = () => {
    if (secondPartyName === "") return false;
    if (brideName === "") return false;
    if (groomName === "") return false;
    if (civilID === "") return false;
    if (eventType === "") return false;
    if (eventLocation === "") return false;
    if (phone1 === "" && phone2 === "") return false;
    if (paidAmount < 0) return false;
    setErrMsg("");
    return true;
  };
  const onFinishSection = () => {
    if (activeView === "contract details") {
      if (allDetailsFilled()) {
        setActiveView("packages");
        setContractDetailsColor("#86efac");
        setXi(0);
        setXf(220);
      } else setErrMsg("Please fill all the fields");
    } else if (activeView === "packages") {
      if (pkg > 0 || components.length > 0) {
        setErrMsg("");
        setActiveView("contract review");
        setPackagesColor("#86efac");
        setXi(220);
        setXf(830);
      } else setErrMsg("Please select package or components");
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
        phone1: phone1 === "" ? null : phone1,
        phone2: phone2 === "" ? null : phone2,
        contractStatus: "In Progress",
        price: total - discount,
        photographer: "",
        video: "",
        packageID: pkg,
        componentIDs: componentsIDsString,
        contractStage: "Signed",
        comments: comments,
        createdBy: createdBy,
        dateCreated: new Date().toLocaleDateString(),
        paidAmount: paidAmount,
        zoomLight: "",
        cameraCrane: "",
        hangingCamera: "",
        cameraRonin: "",
      },
    });

    setShowPDFContract(true);
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
      className="rounded-r-lg  space-y-6  p-3 items-center h-full overflow-y-scroll  shadow-md   bg-slate-600"
    >
      {!showPDFContract ? (
        <div>
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
                  setPaidAmount={setPaidAmount}
                  paidAmount={paidAmount}
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
                  setActiveView={setActiveView}
                  packageName={packageName}
                  setPackageName={setPackageName}
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
                <ContractReview
                  brideName={brideName}
                  groomName={groomName}
                  secondPartyName={secondPartyName}
                  eventType={eventType}
                  eventLocation={eventLocation}
                  eventDate={eventDate}
                  civilID={civilID}
                  phone1={phone1}
                  phone2={phone2}
                  packageName={packageDetails.name}
                  packagePrice={packageDetails.price}
                  discount={discount}
                  total={total}
                  paidAmount={paidAmount}
                  packageDetails={packageDetails}
                  componentsSelected={componentsSelected}
                  comments={comments}
                  setComments={setComments}
                  createdBy={createdBy}
                  setCreatedBy={setCreatedBy}
                  setActiveView={setActiveView}
                />
              )}
            </div>
          )}
          <div className="text-center text-red-400 text-lg">{errorMsg}</div>
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
        </div>
      ) : (
        <ContractPDF
          brideName={brideName}
          groomName={groomName}
          secondPartyName={secondPartyName}
          eventType={eventType}
          eventLocation={eventLocation}
          eventDate={eventDate}
          civilID={civilID}
          phone1={phone1}
          phone2={phone2}
          amountPaid={paidAmount}
          packageName={packageDetails.name}
          total={total}
          packageDetails={packageDetails}
          componentsSelected={componentsSelected}
          discount={discount}
          id={result.data.id}
          dateCreated={
            dateCreated.getFullYear() +
            "-" +
            parseInt(dateCreated.getMonth() + 1) +
            "-" +
            dateCreated.getDate()
          }
        />
      )}
    </motion.div>
  );
}

export default CreatContractWrapper;
