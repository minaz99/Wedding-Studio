import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

function Years(props) {
  let years = [];
  for (let i = 2020; i < 2030; i++) {
    years.push(i);
  }
  return (
    <div className="space-y-1">
      <DropdownButton variant="warning" id="dropdown-basic-button" title="">
        {years.map((year) => {
          return (
            <Dropdown.Item onClick={() => props.setYearSelected(year)}>
              {year}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
    </div>
  );
}

export default Years;
