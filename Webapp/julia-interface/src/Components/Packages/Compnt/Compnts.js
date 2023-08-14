import { PlusCircleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import CompHeader from "./CompHeader";
import CompRowWrapper from "./CompRowWrapper";
import CompEditableRow from "./CompEditableRow";
import {
  useCreateComponentMutation,
  useDeleteComponentMutation,
  useEditComponentMutation,
  useGetComponentByTypeQuery,
} from "../../../services/api/componentSlice";
import GetComponentsByType from "../../Table/Contracts Fetching Components/GetComponentsByType";
import { propTypes } from "react-bootstrap/esm/Image";

function Compnts(props) {
  const [newRow, setNewRow] = useState(false);
  const [editComponent, result] = useEditComponentMutation();
  const [deleteComponent, result2] = useDeleteComponentMutation();
  const [createComponent, result3] = useCreateComponentMutation();
  return (
    <div className="bg-white rounded-lg p-4   space-y-6">
      <div
        className="text-slate-600 font-medium text-lg tr
      acking-wider "
      >
        {props.type}
      </div>
      <div className="space-y-2">
        <CompHeader />
        {result.isLoading || result2.isLoading || result3.isLoading ? (
          <div className="text-center text-blue-400 text-xl p-4">
            Loading...
          </div>
        ) : (
          <GetComponentsByType
            deleteComponent={deleteComponent}
            token={props.token}
            type={props.type}
            editComponent={editComponent}
          />
        )}
        <div className="rounded-md bg-slate-300 shadow-md  p-2 ">
          {newRow ? (
            <CompEditableRow
              createComponent={createComponent}
              new={true}
              setNewRow={setNewRow}
              name=""
              type=""
              price=""
              token={props.token}
            />
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <PlusCircleIcon
        height={26}
        width={26}
        color="#475569"
        className="mx-auto cursor-pointer"
        onClick={() => setNewRow(true)}
      />
    </div>
  );
}

export default Compnts;
