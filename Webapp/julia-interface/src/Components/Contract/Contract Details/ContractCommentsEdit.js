import React from "react";
import { useUpdateContractMutation } from "../../../services/api/contractSlice";

function ContractCommentsEdit(props) {
  const [updateContract, result] = useUpdateContractMutation();
  return (
    <div className=" shadow-md p-2 bg-gray-100 space-y-2 rounded-md my-3">
      <textarea
        value={props.comments}
        className="w-full  p-1  rounded-md "
        placeholder="Add a comment"
        style={{ outline: "none", border: "none" }}
        onChange={(e) => props.setComments(e.target.value)}
      />
    </div>
  );
}

export default ContractCommentsEdit;
