import React from "react";
import ContractStatusFilter from "./ContractStatusFilter";

function FilterOptionComponent(props) {
  const handleChange = (e) => {
    if (e.target.checked) {
      props.setMultipleFilters(true);
      props.setFilterOptionChecked(true);
      props.setOptionSelected(props.value);
      props.setDataFrom("multiple");
      if (props.criteriaType === "status") {
        props.setContractStatusFilter(props.value);
        props.setIsContractStatusFilter(true);
      }
      if (props.criteriaType === "place") {
        props.setEventPlaceFilter(props.value);
        props.setIsEventPlaceFilter(true);
      }
      if (props.criteriaType === "type") {
        props.setEventTypeFilter(props.value);
        props.setIsEventTypeFilter(true);
      }
    }
    if (!e.target.checked) {
      props.setMultipleFilters(false);
      props.setFilterOptionChecked(false);
      props.setOptionSelected("");
      if (props.criteriaType === "status") {
        props.setContractStatusFilter("");
        props.setIsContractStatusFilter(false);
      }
      if (props.criteriaType === "place") {
        props.setEventPlaceFilter("");
        props.setIsEventPlaceFilter(false);
      }
      if (props.criteriaType === "type") {
        props.setEventTypeFilter("");
        props.setIsEventTypeFilter(false);
      }
    }
  };
  return (
    <li class="list-group-item">
      {props.filterOptionChecked && props.optionSelected !== props.value ? (
        <input
          class="form-check-input me-1"
          type="checkbox"
          value=""
          id="firstCheckbox"
          onChange={handleChange}
          disabled
        />
      ) : (
        <input
          class="form-check-input me-1"
          type="checkbox"
          value=""
          id="firstCheckbox"
          onChange={handleChange}
        />
      )}

      <label class="form-check-label" for="firstCheckbox">
        {props.value}
      </label>
    </li>
  );
}

export default FilterOptionComponent;
