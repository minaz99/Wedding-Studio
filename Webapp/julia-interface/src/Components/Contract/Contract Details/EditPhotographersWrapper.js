import React from "react";
import { useGetPhotographersPerContractAndTypeQuery } from "../../../services/api/contractSlice";
import GetAvailablePhotographersForContract from "../../Table/Contracts Fetching Components/GetAvailablePhotographersForContract";
function EditPhotographersWrapper(props) {
  const { data, isLoading, isError, isSuccess } =
    useGetPhotographersPerContractAndTypeQuery(
      { token: props.token, id: props.id, type: props.type },
      { refetchOnMountOrArgChange: true }
    );
  return isLoading ? (
    <div className="text-center text-blue-400 text-xl p-4">Loading</div>
  ) : isError ? (
    <div className="text-center text-red-400 text-xl p-4">
      Error loading photographers
    </div>
  ) : (
    data.Photographers.map((photographer) => {
      return photographer ? (
        <GetAvailablePhotographersForContract
          photographer={photographer.name}
          token={props.token}
          id={props.id}
          date={props.date}
          type={props.type}
        />
      ) : (
        <div></div>
      );
    })
  );
}

export default EditPhotographersWrapper;
