import React, { useState } from "react";
import ComponentAdd from "./ComponentAdd";
import { useUpdateContractMutation } from "../../../services/api/contractSlice";

function AddComponentsWrapper(props) {
  const [updateContract, result] = useUpdateContractMutation();
  const [componentsSelected, setComponentsSelected] = useState([]);
  const [components, setComponents] = useState(
    props.compsIDs.split(",").filter((id) => id !== "," && id !== "")
  );
  const [selectedMagazineComponents, setSelectedMagazineComponents] = useState(
    []
  );
  const [selectedPicturesComponents, setSelectedPicturesComponents] = useState(
    []
  );
  const [selectedVideoComponents, setSelectedVideoComponents] = useState([]);
  const [selectedFrameComponents, setSelectedFrameComponents] = useState([]);
  const [selectedAlbumComponents, setSelectedAlbumComponents] = useState([]);

  const onClickSave = async () => {
    let componentsIDsString = "";
    //componentIDsArray = componentIDsArray.filter((id) => id !== compID);

    components.forEach((id) => (componentsIDsString += `${id},`));
    props.setCompsIDs(componentsIDsString);
    await updateContract({
      token: props.token,
      id: props.contractID,
      body: { componentIDs: componentsIDsString },
    });
  };
  return (
    <div className="space-y-4">
      {result.isLoading ? (
        <div className="text-center text-blue-400 text-xl p-4">
          Adding Components
        </div>
      ) : result.isError ? (
        <div className="text-center text-red-400 text-xl p-4">
          Error removing comment
        </div>
      ) : (
        <div className="flex justify-evenly space-x-4">
          <div>
            <div className="text-black font-medium">Select Magazine</div>
            <ComponentAdd
              setCompsIDs={props.setCompsIDs}
              type="Magazine"
              setComponents={setComponents}
              components={components}
              token={props.token}
              selectedComponents={selectedMagazineComponents}
              setSelectedComponents={setSelectedMagazineComponents}
              componentsSelected={componentsSelected}
              setComponentsSelected={setComponentsSelected}
            />
          </div>
          <div>
            <div className="text-black font-medium">Select Pictures</div>
            <ComponentAdd
              setCompsIDs={props.setCompsIDs}
              type="Pictures"
              setComponents={setComponents}
              components={components}
              token={props.token}
              selectedComponents={selectedPicturesComponents}
              setSelectedComponents={setSelectedPicturesComponents}
              componentsSelected={componentsSelected}
              setComponentsSelected={setComponentsSelected}
            />
          </div>
          <div>
            <div className="text-black font-medium">Select Video</div>
            <ComponentAdd
              setCompsIDs={props.setCompsIDs}
              type="Video"
              setComponents={setComponents}
              components={components}
              token={props.token}
              selectedComponents={selectedVideoComponents}
              setSelectedComponents={setSelectedVideoComponents}
              componentsSelected={componentsSelected}
              setComponentsSelected={setComponentsSelected}
            />
          </div>
          <div>
            <div className="text-black font-medium">Select Frame</div>
            <ComponentAdd
              setCompsIDs={props.setCompsIDs}
              type="Frame"
              setComponents={setComponents}
              components={components}
              token={props.token}
              selectedComponents={selectedFrameComponents}
              setSelectedComponents={setSelectedFrameComponents}
              componentsSelected={componentsSelected}
              setComponentsSelected={setComponentsSelected}
            />
          </div>
          <div>
            <div className="text-black font-medium">Select Album</div>
            <ComponentAdd
              setCompsIDs={props.setCompsIDs}
              type="Album"
              setComponents={setComponents}
              components={components}
              token={props.token}
              selectedComponents={selectedAlbumComponents}
              setSelectedComponents={setSelectedAlbumComponents}
              componentsSelected={componentsSelected}
              setComponentsSelected={setComponentsSelected}
            />
          </div>
        </div>
      )}
      <div
        onClick={() => onClickSave()}
        className="flex cursor-pointer rounded-md mx-auto justify-center text-white text-lg font-medium text-center p-2 bg-slate-400 w-24"
      >
        Save
      </div>
    </div>
  );
}

export default AddComponentsWrapper;
