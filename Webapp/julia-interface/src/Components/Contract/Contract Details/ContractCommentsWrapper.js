import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import ContractComments from "./ContractComments";
import ContractCommentsEdit from "./ContractCommentsEdit";
import { useUpdateContractMutation } from "../../../services/api/contractSlice";

function ContractCommentsWrapper(props) {
  const [editComments, setEditComments] = useState(false);
  const [comments, setComments] = useState(props.comments);
  const [updateContract, result] = useUpdateContractMutation();
  const onSave = async () => {
    await updateContract({
      token: props.token,
      id: props.id,
      body: { comments: comments },
    });
    setEditComments(false);
  };
  return (
    <div className="space-y-3 rounded-lg p-4 bg-white  h-fit ">
      <div className="flex">
        <div className="font-medium flex-1 text-xl">Comments</div>
        {editComments ? (
          <XCircleIcon
            height={22}
            width={22}
            color="#475569"
            className="cursor-pointer"
            onClick={() => setEditComments(false)}
          />
        ) : (
          <PencilSquareIcon
            height={22}
            width={22}
            color="#475569"
            className="cursor-pointer"
            onClick={() => setEditComments(true)}
          />
        )}
      </div>
      {result.isLoading ? (
        <div className="text-center text-blue-400 text-xl p-4">Updating</div>
      ) : result.isError ? (
        <div className="text-center text-red-400 text-xl p-4">
          Error updating comment
        </div>
      ) : editComments ? (
        <div>
          <ContractCommentsEdit setComments={setComments} comments={comments} />
          <div
            onClick={() => onSave()}
            className="rounded-md text-center  cursor-pointer text-xl   mx-auto p-2 w-1/6  bg-slate-500 font-medium text-white"
          >
            Save
          </div>
        </div>
      ) : (
        <ContractComments comments={comments} />
      )}
    </div>
  );
}

export default ContractCommentsWrapper;
