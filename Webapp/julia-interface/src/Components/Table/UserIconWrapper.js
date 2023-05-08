import React from "react";

function UserIconWrapper(props) {
  return (
    <div
      className="rounded-full w-6 h-6 text-white mx-2 text-center"
      style={{ backgroundColor: props.color }}
    >
      {props.letter}
    </div>
  );
}

export default UserIconWrapper;
