import React from "react";
import ComponentAdd from "./ComponentAdd";

function AddComponentsWrapper(props) {
  return (
    <div className="space-y-4">
      <div className="flex justify-evenly space-x-4">
        <div>
          <div className="text-black font-medium">Select Magazine</div>
          <ComponentAdd
            setCompsIDs={props.setCompsIDs}
            type="Magazine"
            setComponents={props.setComponents}
            components={props.components}
            token={props.token}
            selectedComponents={props.selectedMagazineComponents}
            setSelectedComponents={props.setSelectedMagazineComponents}
            componentsSelected={props.componentsSelected}
            setComponentsSelected={props.setComponentsSelected}
          />
        </div>
        <div>
          <div className="text-black font-medium">Select Pictures</div>
          <ComponentAdd
            setCompsIDs={props.setCompsIDs}
            type="Pictures"
            setComponents={props.setComponents}
            components={props.components}
            token={props.token}
            selectedComponents={props.selectedPicturesComponents}
            setSelectedComponents={props.setSelectedPicturesComponents}
            componentsSelected={props.componentsSelected}
            setComponentsSelected={props.setComponentsSelected}
          />
        </div>
        <div>
          <div className="text-black font-medium">Select Video</div>
          <ComponentAdd
            setCompsIDs={props.setCompsIDs}
            type="Video"
            setComponents={props.setComponents}
            components={props.components}
            token={props.token}
            selectedComponents={props.selectedVideoComponents}
            setSelectedComponents={props.setSelectedVideoComponents}
            componentsSelected={props.componentsSelected}
            setComponentsSelected={props.setComponentsSelected}
          />
        </div>
        <div>
          <div className="text-black font-medium">Select Frame</div>
          <ComponentAdd
            setCompsIDs={props.setCompsIDs}
            type="Frame"
            setComponents={props.setComponents}
            components={props.components}
            token={props.token}
            selectedComponents={props.selectedFrameComponents}
            setSelectedComponents={props.setSelectedFrameComponents}
            componentsSelected={props.componentsSelected}
            setComponentsSelected={props.setComponentsSelected}
          />
        </div>
        <div>
          <div className="text-black font-medium">Select Album</div>
          <ComponentAdd
            setCompsIDs={props.setCompsIDs}
            type="Album"
            setComponents={props.setComponents}
            components={props.components}
            token={props.token}
            selectedComponents={props.selectedAlbumComponents}
            setSelectedComponents={props.setSelectedAlbumComponents}
            componentsSelected={props.componentsSelected}
            setComponentsSelected={props.setComponentsSelected}
          />
        </div>
      </div>
    </div>
  );
}

export default AddComponentsWrapper;
