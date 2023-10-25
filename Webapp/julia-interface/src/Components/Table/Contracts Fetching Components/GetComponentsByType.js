import React from "react";
import CompRowWrapper from "../../Packages/Compnt/CompRowWrapper";
import { useGetComponentByTypeQuery } from "../../../services/api/componentSlice";

function GetComponentsByType(props) {
  const { data, isLoading, isError, isSuccess } = useGetComponentByTypeQuery(
    { token: props.token, type: props.type },
    {
      refetchOnMountOrArgChange: true,
    }
  );
  return isLoading ? (
    <div className="text-center text-blue-400 text-xl p-4">Loading</div>
  ) : isError ? (
    <div className="text-center text-red-400 text-xl p-4">
      Error loading components
    </div>
  ) : isSuccess ? (
    data.components.map((comp) => {
      return (
        <CompRowWrapper
          deleteComponent={props.deleteComponent}
          editComponent={props.editComponent}
          token={props.token}
          id={comp.id}
          name={comp.name}
          type={comp.componenttype}
          price={comp.price}
          role={props.role}
        />
      );
    })
  ) : (
    <div></div>
  );
}

export default GetComponentsByType;
