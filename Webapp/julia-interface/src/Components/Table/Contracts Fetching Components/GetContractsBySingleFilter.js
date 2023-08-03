import React from "react";
import { useGetContractsByCriteriaQuery } from "../../../services/api/contractSlice";
import TableRow from "../TableRow";

function GetContractsBySingleFilter(props) {
  const { data, isLoading, isError, isSuccess } =
    useGetContractsByCriteriaQuery(
      {
        token: props.token,
        filterType: props.filterType,
        filterTypeValue: props.filterTypeOption,
      },
      { refetchOnMountOrArgChange: true }
    );
  return isLoading ? (
    <div>Loading...</div>
  ) : isSuccess ? (
    data.contracts.map((contract) => {
      return (
        <TableRow
          id={contract.id}
          brideName={contract.bridename}
          letter={contract.bridename[0]}
          eventType={contract.eventtype}
          eventPlace={contract.eventlocation}
          status={contract.contractstatus}
          color="green"
          pressedRow={props.pressedRow}
        />
      );
    })
  ) : isError ? (
    <div>Error getting contracts...</div>
  ) : (
    <div></div>
  );
}

export default GetContractsBySingleFilter;
