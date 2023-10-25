import React from "react";

function PackagesTableHeader(props) {
  return (
    <div className="flex   rounded-md bg-gray-100 p-2 space-x-8 shadow-md">
      <div className="flex-1 font-medium text-slate-600 text-center">Name</div>
      <div className="flex-1 font-medium text-slate-600 text-center">
        Pictures
      </div>
      <div className="flex-1 font-medium text-slate-600 text-center ">
        Magzine Size
      </div>
      <div className="flex-1 font-medium text-slate-600 text-center">
        Album Crystal
      </div>
      <div className="flex-1 font-medium text-slate-600 text-center">
        Magzine Mini
      </div>
      <div className="flex-1 font-medium text-slate-600 text-center">Video</div>
      <div className="flex-1 font-medium text-slate-600 text-center">
        Open Photo & Video
      </div>
      <div className="flex-1 font-medium text-slate-600 text-center">
        Studio
      </div>
      <div className="flex-1 font-medium text-slate-600 text-center">Price</div>
      {props.role === "Editor" ? (
        <div className="flex-1 font-medium text-slate-600 text-center">
          Edit
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default PackagesTableHeader;
