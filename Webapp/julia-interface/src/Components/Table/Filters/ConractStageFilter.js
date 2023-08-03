import React, { useState } from "react";
import FilterOptionComponent from "./FilterOptionComponent";
import { useGetContractsTableHeaderFiltersQuery } from "../../../services/api/contractSlice";
import OptionForSingleFilter from "./OptionForSingleFilter";

function ConractStageFilter(props) {
  const [filterOptionChecked, setFilterOptionChecked] = useState(false);

  const { data, isLoading, isError, isSuccess } =
    useGetContractsTableHeaderFiltersQuery(props.token, {
      refetchOnMountOrArgChange: true,
    });
  return (
    <ul class="list-group">
      {isLoading ? (
        <div className="text-center">Loading...</div>
      ) : isError ? (
        <div className="text-center">Error geting event types...</div>
      ) : isSuccess ? (
        data.stages.map((type) => {
          return (
            <OptionForSingleFilter
              filterOptionChecked={filterOptionChecked}
              setFilterOptionChecked={setFilterOptionChecked}
              value={type}
              optionSelected={props.filterTypeOption}
              setOptionSelected={props.setFilterTypeOption}
            />
          );
        })
      ) : (
        <div></div>
      )}
    </ul>
  );
}

export default ConractStageFilter;
