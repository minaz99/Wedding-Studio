import React, { useState } from "react";
import ComponentAdd from "./ComponentAdd";

function AddComponentsWrapper(props) {
  const [componentsSelected, setComponentsSelected] = useState([]);
  const [components, setComponents] = useState([]);
  const [selectedMagazineComponents, setSelectedMagazineComponents] = useState(
    []
  );
  const [selectedPicturesComponents, setSelectedPicturesComponents] = useState(
    []
  );
  const [selectedVideoComponents, setSelectedVideoComponents] = useState([]);
  const [selectedFrameComponents, setSelectedFrameComponents] = useState([]);
  const [selectedAlbumComponents, setSelectedAlbumComponents] = useState([]);
  return (
    <div className="space-y-4">
      <div className="flex justify-evenly space-x-4">
        <div>
          <div className="text-black font-medium">Select Magazine</div>
          <ComponentAdd
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
      <div className="flex mx-auto justify-center text-white text-lg font-medium text-center p-2 bg-slate-400 w-24">
        Save
      </div>
    </div>
  );
}

export default AddComponentsWrapper;
