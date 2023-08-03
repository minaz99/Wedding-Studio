import React from "react";

function OptionForSingleFilter(props) {
  const handleChange = (e) => {
    if (e.target.checked) {
      props.setFilterOptionChecked(true);
      props.setOptionSelected(props.value);
    }
    if (!e.target.checked) {
      props.setFilterOptionChecked(false);
      props.setOptionSelected("");
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

export default OptionForSingleFilter;
