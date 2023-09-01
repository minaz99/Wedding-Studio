import React, { useState } from "react";
import { DropdownButton } from "react-bootstrap";
import FilterOptionComponent from "./FilterOptionComponent";

function THEventLocationFilter(props) {
  const [filterOptionChecked, setFilterOptionChecked] = useState(false);
  const [optionSelected, setOptionSelected] = useState("");
  return (
    <DropdownButton
      variant="none"
      className="outline-none"
      id="dropdown-basic-button"
      title=""
    >
      <ul class="list-group" className="overflow-y-scroll">
        {props.isLoading ? (
          <div className="text-center text-blue-400 text-xl p-4">
            Loading...
          </div>
        ) : props.isError ? (
          <div className="text-center text-red-400 text-xl p-4">
            Error geting event types...
          </div>
        ) : props.isSuccess ? (
          props.data.locations.map((type) => {
            return (
              <FilterOptionComponent
                filterOptionChecked={filterOptionChecked}
                setFilterOptionChecked={setFilterOptionChecked}
                setMultipleFilters={props.setMultipleFilters}
                value={type}
                optionSelected={optionSelected}
                setOptionSelected={setOptionSelected}
                setEventPlaceFilter={props.setEventPlaceFilter}
                setIsEventPlaceFilter={props.setIsEventPlaceFilter}
                criteriaType="place"
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

export default THEventLocationFilter;
