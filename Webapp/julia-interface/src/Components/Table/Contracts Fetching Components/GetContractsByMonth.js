import React from "react";
import { useGetContractsInMonthQuery } from "../../../services/api/contractSlice";
import CalenderRows from "../../Calendar/CalenderRows";

function GetContractsByMonth(props) {
  const { data, isLoading, isError, isSuccess } = useGetContractsInMonthQuery(
    {
      token: props.token,
      month: props.props.month,
      year: props.year,
    },
    { refetchOnMountOrArgChange: true }
  );
  return isLoading ? (
    <div className="text-center text-blue-400 text-xl p-4">Loading</div>
  ) : isSuccess ? (
    data.days.map((day) => {
      return <CalenderRows day={day.day} contracts={day.contract.contracts} />;
    })
  ) : isError ? (
    <div className="text-center text-red-400 text-xl p-4">
      Error loading contracts
    </div>
  ) : (
    <div></div>
  );
}

export default GetContractsByMonth;
