import React, { useState } from "react";
import { DropdownButton } from "react-bootstrap";
import FilterOptionComponent from "./FilterOptionComponent";

function THEventTypeFilter(props) {
  const [filterOptionChecked, setFilterOptionChecked] = useState(false);
  const [optionSelected, setOptionSelected] = useState("");
  return (
    <DropdownButton
      variant="none"
      className="outline-none"
      id="dropdown-basic-button"
      title=""
    >
      <ul class="list-group">
        {props.isLoading ? (
          <div className="text-center">Loading...</div>
        ) : props.isError ? (
          <div className="text-center">Error geting event types...</div>
        ) : props.isSuccess ? (
          props.data.types.map((type) => {
            return (
              <FilterOptionComponent
                filterOptionChecked={filterOptionChecked}
                setFilterOptionChecked={setFilterOptionChecked}
                setMultipleFilters={props.setMultipleFilters}
                value={type}
                optionSelected={optionSelected}
                setOptionSelected={setOptionSelected}
              />
            );
          })
        ) : (
          <div></div>
        )}
      </ul>
    </DropdownButton>
  );
}

export default THEventTypeFilter;
