import React from "react";

function OptionForSingleFilter(props) {
  const handleChange = (e) => {
    if (e.target.checked) {
      props.setFilterOptionChecked(true);
      props.setOptionSelected(props.value);
      props.setDataFrom("filter");
    }
    if (!e.target.checked) {
      props.setFilterOptionChecked(false);
      props.setOptionSelected("");
      props.setDataFrom("");
    }
  };
  return (
    <li class="list-group-item">
      {props.optionSelected === "" ? (
        <input
          class="form-check-input me-1"
          type="checkbox"
          value=""
          id="firstCheckbox"
          onChange={handleChange}
        />
      ) : props.optionSelected === props.value ? (
        <input
          class="form-check-input me-1"
          type="checkbox"
          value=""
          id="firstCheckbox"
          onChange={handleChange}
          checked
        />
      ) : (
        <input
          class="form-check-input me-1"
          type="checkbox"
          value=""
          id="firstCheckbox"
          onChange={handleChange}
          disabled
        />
      )}

      <label class="form-check-label" for="firstCheckbox">
        {props.value}
      </label>
    </li>
  );
}

export default OptionForSingleFilter;
