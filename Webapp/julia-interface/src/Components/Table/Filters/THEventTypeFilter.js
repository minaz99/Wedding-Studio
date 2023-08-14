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
          <div className="text-center text-blue-400 text-xl p-4">
            Loading...
          </div>
        ) : props.isError ? (
          <div className="text-center text-red-400 text-xl p-4">
            Error geting event types...
          </div>
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
                setEventTypeFilter={props.setEventTypeFilter}
                setIsEventTypeFilter={props.setIsEventTypeFilter}
                criteriaType="type"
                setDataFrom={props.setDataFrom}
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
