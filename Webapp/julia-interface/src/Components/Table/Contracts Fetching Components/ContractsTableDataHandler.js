import React from "react";
import GetAllContractsComponent from "./GetAllContractsComponent";
import GetContractsBySearchCriteria from "./GetContractsBySearchCriteria";
import GetContractsBySingleFilter from "./GetContractsBySingleFilter";
import GetContractsByMultipleCriterias from "./GetContractsByMultipleCriterias";

function ContractsTableDataHandler(props) {
  return props.dataFrom === "search" ? (
    <GetContractsBySearchCriteria
      token={props.token}
      pressedRow={props.pressedRow}
      searchType={props.searchType}
      searchValue={props.searchValue}
      page={props.page}
      setPage={props.setPage}
      setTotalContracts={props.setTotalContracts}
      setPageCount={props.setPageCount}
    />
  ) : props.dataFrom === "filter" ? (
    <GetContractsBySingleFilter
      token={props.token}
      pressedRow={props.pressedRow}
      filterType={props.filterType}
      filterTypeOption={props.filterTypeOption}
      page={props.page}
      setPage={props.setPage}
      setTotalContracts={props.setTotalContracts}
      setPageCount={props.setPageCount}
    />
  ) : props.dataFrom === "multiple" ? (
    <GetContractsByMultipleCriterias
      token={props.token}
      pressedRow={props.pressedRow}
      brideNameSearch={props.brideNameSearch}
      eventTypeFilter={props.eventTypeFilter}
      eventPlaceFilter={props.eventPlaceFilter}
      contractStatusFilter={props.contractStatusFilter}
      page={props.page}
      setPage={props.setPage}
      setTotalContracts={props.setTotalContracts}
      setPageCount={props.setPageCount}
    />
  ) : (
    <GetAllContractsComponent
      setTotalContracts={props.setTotalContracts}
      setPageCount={props.setPageCount}
      token={props.token}
      pressedRow={props.pressedRow}
      page={props.page}
    />
  );
}

export default ContractsTableDataHandler;
