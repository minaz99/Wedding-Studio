import React from "react";
import { useGetAllContractsQuery } from "../../../services/api/contractSlice";
import TableRow from "../TableRow";

function GetAllContractsComponent(props) {
  const { data, isLoading, isError, isSuccess } = useGetAllContractsQuery(
    { token: props.token, page: props.page },
    { refetchOnMountOrArgChange: true }
  );

  function contractsDetails() {
    props.setPageCount(data.pages);
    props.setTotalContracts(data.total);
  }

  return isLoading ? (
    <div className="text-center text-blue-400 text-xl p-4">Loading</div>
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
          eventDate={contract.eventdate}
          pressedRow={props.pressedRow}
        />
      );
    }))
  ) : isError ? (
    <div className="text-center text-red-400 text-xl p-4">
      Error loading contracts
    </div>
  ) : (
    <div></div>
  );
}

export default GetAllContractsComponent;
