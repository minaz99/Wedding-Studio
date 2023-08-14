import React from "react";
import { useGetComponentByIDQuery } from "../../../services/api/componentSlice";

function Addon(props) {
  const { data, isLoading, isError, isSuccess } = useGetComponentByIDQuery(
    { token: props.token, id: props.id },
    {
      refetchOnMountOrArgChange: true,
    }
  );
  return isLoading ? (
    <div className="text-center text-blue-400 text-xl p-4">Loading</div>
  ) : isError ? (
    <div className="text-center text-red-400 text-xl p-4">
      Error loading component
    </div>
  ) : isSuccess ? (
    <div className="font-medium bg-orange-200 rounded-md  p-2 shadow-md">
      {data.component.name}
    </div>
  ) : (
    <div></div>
  );
}

export default Addon;
