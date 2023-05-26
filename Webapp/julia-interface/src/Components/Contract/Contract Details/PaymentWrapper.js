import React from "react";

function PaymentWrapper(props) {
  return (
    <div className=" flex p-2 space-x-2 items-center">
      <div classname="text-gray-500 p-1">{props.paymentNumber}</div>
      <div className="bg-blue-300 rounded-md p-1 ">{props.amount}</div>
    </div>
  );
}

export default PaymentWrapper;
