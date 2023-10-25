import React from "react";
import { useGetContractByIDQuery } from "../../../services/api/contractSlice";
function ContractComments(props) {
  const { data, isLoading, isError, isSuccess } = useGetContractByIDQuery(
    {
      token: props.token,
      id: props.id,
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );
  return isLoading ? (
    <div className="text-center text-blue-400 text-xl p-4">Loading</div>
  ) : isError ? (
    <div className="text-center text-red-400 text-xl p-4">
      Error loading comments
    </div>
  ) : isSuccess ? (
    <div className="text-gray-500">{data.contract.comments}</div>
  ) : (
    <div></div>
  );
}

export default ContractComments;
