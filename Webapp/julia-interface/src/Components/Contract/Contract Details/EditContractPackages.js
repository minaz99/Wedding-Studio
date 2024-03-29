import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import PackageDelete from "./PackageDelete";
import ComponentDelete from "./ComponentDelete";
import AddComponentsWrapper from "./AddComponentsWrapper";
import { useUpdateContractMutation } from "../../../services/api/contractSlice";

function EditContractPackages(props) {
  const [addComps, setAddComps] = useState(false);

  const [updateContract, result] = useUpdateContractMutation();
  const [componentsSelected, setComponentsSelected] = useState([]);

  const [selectedMagazineComponents, setSelectedMagazineComponents] = useState(
    []
  );
  const [selectedPicturesComponents, setSelectedPicturesComponents] = useState(
    []
  );
  const [selectedVideoComponents, setSelectedVideoComponents] = useState([]);
  const [selectedFrameComponents, setSelectedFrameComponents] = useState([]);
  const [selectedAlbumComponents, setSelectedAlbumComponents] = useState([]);
  const [pkgID, setPkgID] = useState(props.packageID);
  const [compsIDs, setCompsIDs] = useState(props.compsIDs);
  const [components, setComponents] = useState(
    compsIDs.split(",").filter((id) => id !== "," && id !== "")
  );
  const onClickSave = async () => {
    let componentsIDsString = "";

    components.forEach((id) => (componentsIDsString += `${id},`));
    props.setCompsIDs(componentsIDsString);
    await updateContract({
      token: props.token,
      id: props.contractID,
      body: {
        componentIDs: componentsIDsString,
        price: props.price,
        packageID: pkgID,
      },
    });
    props.setEditPackage(false);
    props.setPkgID(pkgID);
  };
  const cancelEditPkgComps = () => {
    setAddComps(false);
    setPkgID(props.packageID);
  };
  return result.isLoading ? (
    <div className="text-center text-blue-400 text-xl p-4">Saving</div>
  ) : result.isError ? (
    <div className="text-center text-red-400 text-xl p-4">
      Error saving data
    </div>
  ) : (
    <div className="space-y-3">
      <PackageDelete
        token={props.token}
        id={pkgID}
        contractID={props.contractID}
        setPkgID={setPkgID}
      />
      <ComponentDelete
        setCompsIDs={setCompsIDs}
        token={props.token}
        compsIDs={compsIDs}
        components={components}
        setComponents={setComponents}
        contractID={props.contractID}
      />
      {addComps ? (
        <AddComponentsWrapper
          setCompsIDs={props.setCompsIDs}
          token={props.token}
          contractID={props.contractID}
          compsIDs={props.compsIDs}
          price={props.price}
          componentsSelected={componentsSelected}
          setComponentsSelected={setComponentsSelected}
          components={components}
          setComponents={setComponents}
          selectedMagazineComponents={selectedMagazineComponents}
          selectedAlbumComponents={selectedAlbumComponents}
          selectedFrameComponents={selectedFrameComponents}
          selectedPicturesComponents={selectedPicturesComponents}
          selectedVideoComponents={selectedVideoComponents}
          setSelectedMagazineComponents={setSelectedMagazineComponents}
          setSelectedAlbumComponents={setSelectedAlbumComponents}
          setSelectedFrameComponents={setSelectedFrameComponents}
          setSelectedPicturesComponents={setSelectedPicturesComponents}
          setSelectedVideoComponents={setSelectedVideoComponents}
        />
      ) : (
        <div></div>
      )}
      <div className="flex space-x-2">
        <div className="flex space-x-2">
          <div className="text-gray-500">Price</div>
          <input
            value={props.price}
            style={{
              background: "#cbd5e1",
              borderRadius: "6px",
              border: "none",
              color: "#475569",
              padding: "3px 3px 3px 3px",
              outline: "none",
            }}
            className="font-medium "
            onChange={(e) => props.setPrice(e.target.value)}
          />
        </div>
        <div>KD</div>
      </div>
      <React.Fragment>
        {!addComps ? (
          <div className="flex justify-center mx-auto">
            <PlusCircleIcon
              height={24}
              width={24}
              color="#475569"
              className="cursor-pointer"
              onClick={() => setAddComps(true)}
            />
          </div>
        ) : (
          <div className="flex justify-center mx-auto">
            <MinusCircleIcon
              height={24}
              width={24}
              color="#475569"
              className="cursor-pointer"
              onClick={() => cancelEditPkgComps()}
            />
          </div>
        )}
      </React.Fragment>
      <div
        onClick={() => onClickSave()}
        className="flex cursor-pointer rounded-md mx-auto justify-center text-white text-lg font-medium text-center p-2 bg-slate-400 w-24"
      >
        Save
      </div>
    </div>
  );
}

export default EditContractPackages;
