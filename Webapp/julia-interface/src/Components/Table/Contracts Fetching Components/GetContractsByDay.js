import React from "react";
import TableRow from "../TableRow";
import { useGetContractsByDayQuery } from "../../../services/api/contractSlice";

function GetContractsByDay(props) {
  const { data, isLoading, isError, isSuccess } = useGetContractsByDayQuery(
    {
      token: props.token,
      day: props.date.getDate(),
      month: props.date.getMonth() + 1,
      year: props.date.getFullYear(),
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );
  function contractsDetails() {
    props.setTotalContracts(data.contracts.length);
  }
  return isLoading ? (
    <div className="text-center text-blue-400 text-xl p-4">Loading</div>
  ) : isSuccess ? (
    (contractsDetails(),
    data.contracts.map((contract) => {
      return (
        <TableRow
          id={contract.id}
          eventDate={contract.eventDate}
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
      Error loading contracts
    </div>
  ) : (
    <div></div>
  );
}

export default GetContractsByDay;
