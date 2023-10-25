import React from "react";
import Component from "./Component";

function AddComponentsWrapper(props) {
  return (
    <div className="space-y-4">
      <div className="flex justify-evenly space-x-4">
        <div>
          <div className="text-black font-medium">Select Magazine</div>
          <Component
            type="Magazine"
            setComponents={props.setComponents}
            components={props.components}
            token={props.token}
            total={props.total}
            setTotal={props.setTotal}
            selectedComponents={props.selectedMagazineComponents}
            setSelectedComponents={props.setSelectedMagazineComponents}
            componentsSelected={props.componentsSelected}
            setComponentsSelected={props.setComponentsSelected}
          />
        </div>
        <div>
          <div className="text-black font-medium">Select Pictures</div>
          <Component
            type="Pictures"
            setComponents={props.setComponents}
            components={props.components}
            token={props.token}
            total={props.total}
            setTotal={props.setTotal}
            selectedComponents={props.selectedPicturesComponents}
            setSelectedComponents={props.setSelectedPicturesComponents}
            componentsSelected={props.componentsSelected}
            setComponentsSelected={props.setComponentsSelected}
          />
        </div>
        <div>
          <div className="text-black font-medium">Select Video</div>
          <Component
            type="Video"
            setComponents={props.setComponents}
            components={props.components}
            token={props.token}
            total={props.total}
            setTotal={props.setTotal}
            selectedComponents={props.selectedVideoComponents}
            setSelectedComponents={props.setSelectedVideoComponents}
            componentsSelected={props.componentsSelected}
            setComponentsSelected={props.setComponentsSelected}
          />
        </div>
        <div>
          <div className="text-black font-medium">Select Frame</div>
          <Component
            type="Frame"
            setComponents={props.setComponents}
            components={props.components}
            token={props.token}
            total={props.total}
            setTotal={props.setTotal}
            selectedComponents={props.selectedFrameComponents}
            setSelectedComponents={props.setSelectedFrameComponents}
            componentsSelected={props.componentsSelected}
            setComponentsSelected={props.setComponentsSelected}
          />
        </div>
        <div>
          <div className="text-black font-medium">Select Album</div>
          <Component
            type="Album"
            setComponents={props.setComponents}
            components={props.components}
            token={props.token}
            total={props.total}
            setTotal={props.setTotal}
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
