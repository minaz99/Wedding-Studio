import React, { useState } from "react";
import { useUpdateContractMutation } from "../../../services/api/contractSlice";
import { useGetContractByIDQuery } from "../../../services/api/contractSlice";
function ContractCommentsEdit(props) {
  const [updateContract, result] = useUpdateContractMutation();
  const [comments, setComments] = useState(
    isSuccess ? data.contract.comments : ""
  );
  const { data, isLoading, isError, isSuccess } = useGetContractByIDQuery(
    {
      token: props.token,
      id: props.id,
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );
  const onSave = async () => {
    await updateContract({
      token: props.token,
      id: props.id,
      body: { comments: comments },
    });
    //props.setEditComments(false);
  };
  return isLoading ? (
    <div className="text-center text-blue-400 text-xl p-4">Loading</div>
  ) : isError ? (
    <div className="text-center text-red-400 text-xl p-4">
      Error displaying comments
    </div>
  ) : isSuccess ? (
    result.isLoading ? (
      <div className="text-center text-blue-400 text-xl p-4">Updating</div>
    ) : result.isError ? (
      <div className="text-center text-red-400 text-xl p-4">
        Error updating comments
      </div>
    ) : (
      <div>
        <div className="text-gray-500">{comments}</div>
        <div className=" shadow-md p-2 bg-gray-100 space-y-2 rounded-md my-3">
          <textarea
            value={comments}
            className="w-full  p-1  rounded-md "
            placeholder="Add a comment"
            style={{ outline: "none", border: "none" }}
            onChange={(e) => setComments(e.target.value)}
          />
        </div>
        <div
          onClick={() => onSave()}
          className="rounded-md text-center  cursor-pointer text-xl space-y-2   mx-auto p-2 w-1/6  bg-slate-500 font-medium text-white"
        >
          Save
        </div>
      </div>
    )
  ) : (
    <div></div>
  );
}

export default ContractCommentsEdit;
