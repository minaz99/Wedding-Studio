import React, { useState } from "react";
import { DropdownButton } from "react-bootstrap";
import FilterOptionComponent from "./FilterOptionComponent";

function THContractStatus(props) {
  const [filterOptionChecked, setFilterOptionChecked] = useState(false);
  const [optionSelected, setOptionSelected] = useState("");
  return (
    <DropdownButton variant="Default" id="dropdown-button">
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
          props.data.status.map((type) => {
            return (
              <FilterOptionComponent
                filterOptionChecked={filterOptionChecked}
                setFilterOptionChecked={setFilterOptionChecked}
                setMultipleFilters={props.setMultipleFilters}
                value={type}
                optionSelected={optionSelected}
                setOptionSelected={setOptionSelected}
                setContractStatusFilter={props.setContractStatusFilter}
                setIsContractStatusFilter={props.setIsContractStatusFilter}
                criteriaType="status"
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

export default THContractStatus;
