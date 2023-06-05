import React from "react";

function UserInfo() {
  return (
    <div className="bg-white m-auto  space-y-2 rounded-md p-4">
      <div className="flex space-x-2">
        <div className="font-medium text-slate-400">Email </div>
        <div className="font-mono text-slate-500">hanymina43@gmail.com</div>
      </div>
      <div className="flex space-x-2">
        <div className="font-medium text-slate-400">Username </div>
        <div className="font-mono text-slate-500">Mina Hany</div>
      </div>
      <div className="bg-slate-200 text-sm p-2 text-center cursor-pointer font-medium shadow-md rounded-md">
        Manage Account
      </div>
    </div>
  );
}

export default UserInfo;
