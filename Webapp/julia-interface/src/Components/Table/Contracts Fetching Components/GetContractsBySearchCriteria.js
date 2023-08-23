import React from "react";
import { useGetContractsByCriteriaQuery } from "../../../services/api/contractSlice";
import TableRow from "../TableRow";

function GetContractsBySearchCriteria(props) {
  const { data, isLoading, isError, isSuccess } =
    useGetContractsByCriteriaQuery(
      {
        token: props.token,
        page: props.page,
        searchType: props.searchType,
        searchValue: props.searchValue,
      },
      { refetchOnMountOrArgChange: true }
    );
  function contractsDetails() {
    props.setPageCount(data.pages);
    props.setTotalContracts(data.total);
  }
  return isLoading ? (
    <div className="text-center text-blue-400 text-xl p-4">Loading...</div>
  ) : isSuccess ? (
    (contractsDetails(),
    data.contracts.map((contract) => {
      return (
        <TableRow
          id={contract.id}
          brideName={contract.bridename}
          letter={contract.bridename[0]}
          eventType={contract.eventtype}
          eventPlace={contract.eventlocation}
          status={contract.contractstatus}
          eventDate={contract.eventdate}
          color="green"
          pressedRow={props.pressedRow}
        />
      );
    }))
  ) : isError ? (
    <div className="text-center text-red-400 text-xl p-4">
      Error getting contracts...
    </div>
  ) : (
    <div></div>
  );
}

export default GetContractsBySearchCriteria;
