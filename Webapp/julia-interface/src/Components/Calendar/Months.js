import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

function Months(props) {
  let months = [];
  for (let i = 1; i <= 12; i++) months.push(i);
  return (
    <div className="">
      <DropdownButton variant="warning" id="dropdown-basic-button" title="">
        {months.map((month) => {
          return (
            <Dropdown.Item onClick={() => props.setMonthSelected(month)}>
              {month}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
    </div>
  );
}

export default Months;
