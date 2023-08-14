import React from "react";

function CompHeader() {
  return (
    <div className="flex   rounded-md bg-gray-100 p-2 space-x-8 shadow-md">
      <div className="flex-1 font-medium text-slate-600 text-center">Name</div>
      <div className="flex-1 font-medium text-slate-600 text-center ">Type</div>
      <div className="flex-1 font-medium text-slate-600 text-center">Price</div>
      <div className="flex-1 font-medium text-slate-600 text-center">Edit</div>
    </div>
  );
}

export default CompHeader;
