import React from "react";
import TableRow from "../TableRow";
import { useGetContractsByMultipleCriteriasQuery } from "../../../services/api/contractSlice";

function GetContractsByMultipleCriterias(props) {
  const bodyObj = {
    page: props.page,
    brideName: props.brideNameSearch,
    eventType: props.eventTypeFilter,
    eventLocation: props.eventPlaceFilter,
    contractStatus: props.contractStatusFilter,
  };
  const queryString = `page=${bodyObj.page}&brideName=${bodyObj.brideName}&eventType=${bodyObj.eventType}&eventLocation=${bodyObj.eventLocation}&contractStatus=${bodyObj.contractStatus}`;
  const { data, isLoading, isError, isSuccess } =
    useGetContractsByMultipleCriteriasQuery(
      {
        token: props.token,
        queryString: queryString,
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

export default GetContractsByMultipleCriterias;
