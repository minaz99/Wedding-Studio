import { FunnelIcon, XCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
function Filters(props) {
  const cancelFilter = () => {
    props.setFilterType("Select Filter");
    props.setFilterTypeOption("");
    props.setDataFrom("");
  };
  const selectMonthFilter = () => {
    props.filterTypeSelected("month");
    props.setDataFrom("month");
  };
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
          <Dropdown.Item onClick={() => selectMonthFilter()}>
            Month
          </Dropdown.Item>
          {/*<Dropdown.Item onClick={() => filterTypeSelected("Photographer")}>
                Photographer
              </Dropdown.Item>
              <Dropdown.Item onClick={() => filterTypeSelected("Video")}>
                Video
      </Dropdown.Item>*/}
        </DropdownButton>
      </div>
      {props.dataFrom === "date" ||
      props.dataFrom === "filter" ||
      props.dataFrom === "month" ? (
        <XCircleIcon
          height={22}
          width={22}
          color="#94a3b8"
          className="cursor-pointer"
          onClick={() => cancelFilter()}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Filters;
