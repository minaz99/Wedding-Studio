import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

function PhotographersAssigned() {
  return (
    <div className="bg-gray-300 rounded-md p-1">
      <div className="flex space-x-2">
        <div className="text-gray-700">Photographers</div>
        <DropdownButton
          id="dropdown-basic-button"
          title={"Select Photographer"}
        >
          <Dropdown.Item>None</Dropdown.Item>
          <Dropdown.Item>Person 1</Dropdown.Item>
          <Dropdown.Item>Person 2</Dropdown.Item>
          <Dropdown.Item>Person 3</Dropdown.Item>
          <Dropdown.Item>Person 4</Dropdown.Item>
          <Dropdown.Item>Person 5</Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="flex space-x-2">
        <div className="text-gray-700">Video</div>

        <DropdownButton
          id="dropdown-basic-button"
          title={"Select Video Person"}
        >
          <Dropdown.Item>None</Dropdown.Item>
          <Dropdown.Item>Person 1</Dropdown.Item>
          <Dropdown.Item>Person 2</Dropdown.Item>
          <Dropdown.Item>Person 3</Dropdown.Item>
          <Dropdown.Item>Person 4</Dropdown.Item>
          <Dropdown.Item>Person 5</Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
}

export default PhotographersAssigned;
