import React from "react";

function ConractStageFilter() {
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
          Signed
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
          Event Finished
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
          Pictures Collected
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

export default ConractStageFilter;
