import React from "react";
import Addon from "./Addon";
import { useGetContractByIDQuery } from "../../../services/api/contractSlice";
function ContractComponents(props) {
  const { data, isLoading, isError, isSuccess } = useGetPackageByIDQuery(
    { token: props.token, id: props.id },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  //let componentIDsArray = props.compsIDs.split(",");
  return isLoading ? (
    <div className="text-center text-blue-400 text-xl p-4">Loading</div>
  ) : isError ? (
    <div className="text-center text-red-400 text-xl p-4">
      Error loading components
    </div>
  ) : isSuccess ? (
    <div className=" flex space-x-2">
      {data.contract.componentids
        .split(",")
        .filter((c) => c !== "," && c !== "")
        .map((id) => {
          return <Addon token={props.token} id={id} />;
        })}
    </div>
  ) : (
    <div></div>
  );
}

export default ContractComponents;
