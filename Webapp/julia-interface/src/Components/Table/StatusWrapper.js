import React from "react";

function StatusWrapper(props) {
  const statusColor =
    props.status === "Done"
      ? "#bbf7d0"
      : props.status === "In progress"
      ? "#a5f3fc"
      : props.status === "On hold"
      ? "#e2e8f0"
      : "#fecaca";
  const statusFontColor =
    props.status === "Done"
      ? "#22c55e"
      : props.status === "In progress"
      ? "#06b6d4"
      : props.status === "On hold"
      ? "#94a3b8"
      : "#f87171";

  return (
    <div
      className="rounded-2xl flex p-1 w-fit  items-center text-sm "
      style={{ backgroundColor: statusColor, color: statusFontColor }}
    >
      <div
        className="rounded-full  h-2 w-2 mx-2 "
        style={{ backgroundColor: statusFontColor }}
      ></div>
      {props.status}
    </div>
  );
}

export default StatusWrapper;
