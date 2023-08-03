import { FunnelIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
function Filters(props) {
  return (
    <div className="tracking-wider space-x-2 text-lg text-white  font-semibold flex items-center">
      <FunnelIcon className=" mx-2" height={20} width={20} color="white" />
      Filter
      <div className="space-y-1">
        <DropdownButton
          variant="warning"
          id="dropdown-basic-button"
          title={props.filterType}
        >
          <Dropdown.Item onClick={() => props.filterTypeSelected("Event Date")}>
            Event Date
          </Dropdown.Item>
          <Dropdown.Item onClick={() => props.filterTypeSelected("stage")}>
            Contract Stage
          </Dropdown.Item>
          {/*<Dropdown.Item onClick={() => filterTypeSelected("Photographer")}>
                Photographer
              </Dropdown.Item>
              <Dropdown.Item onClick={() => filterTypeSelected("Video")}>
                Video
      </Dropdown.Item>*/}
        </DropdownButton>
      </div>
    </div>
  );
}

export default Filters;
