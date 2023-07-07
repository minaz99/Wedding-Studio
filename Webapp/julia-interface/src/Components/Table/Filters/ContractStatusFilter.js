import React from "react";

function ContractStatusFilter() {
  return (
    <ul class="list-group">
      <li class="list-group-item">
        <input
          class="form-check-input me-1"
          type="checkbox"
          value=""
          id="firstCheckbox"
        />
        <label class="form-check-label" for="firstCheckbox">
          Done
        </label>
      </li>
      <li class="list-group-item">
        <input
          class="form-check-input me-1"
          type="checkbox"
          value=""
          id="secondCheckbox"
        />
        <label class="form-check-label" for="secondCheckbox">
          In Progress
        </label>
      </li>
      <li class="list-group-item">
        <input
          class="form-check-input me-1"
          type="checkbox"
          value=""
          id="thirdCheckbox"
        />
        <label class="form-check-label" for="thirdCheckbox">
          On Hold
        </label>
      </li>
      <li class="list-group-item">
        <input
          class="form-check-input me-1"
          type="checkbox"
          value=""
          id="thirdCheckbox"
        />
        <label class="form-check-label" for="thirdCheckbox">
          Cancelled
        </label>
      </li>
      <li class="list-group-item">
        <input
          class="form-check-input me-1"
          type="checkbox"
          value=""
          id="thirdCheckbox"
        />
        <label class="form-check-label" for="thirdCheckbox">
          Finished
        </label>
      </li>
    </ul>
  );
}

export default ContractStatusFilter;
