import { useMakePaymentMutation } from "../../../services/api/contractSlice";
import { useState } from "react";
import GetContractPayment from "../../Table/Contracts Fetching Components/GetContractPayment";
function ContractPayments(props) {
  const [pay, setPay] = useState(false);
  const [amount, setAmount] = useState(0);
  const [makePayment, result] = useMakePaymentMutation();
  const payAmount = async () => {
    await makePayment({
      token: props.token,
      id: props.id,
      body: { amount: amount },
    });
    setPay(false);
  };

  return (
    <div className="space-y-3 rounded-lg p-4   bg-white h-fit  ">
      <div className=" flex  items-center ">
        <div className="font-medium text-xl flex-1">Payments</div>
      </div>

      <div className="">
        {result.isLoading ? (
          <div className="text-center text-blue-400 text-xl p-4">Loading</div>
        ) : result.isError ? (
          <div className="text-center text-red-400 text-xl p-4">
            Error making payment
          </div>
        ) : (
          <GetContractPayment
            token={props.token}
            id={props.id}
          ></GetContractPayment>
        )}
      </div>

      {pay ? (
        <div className="justify-center flex space-x-2">
          {" "}
          <input
            value={amount}
            style={{
              background: "#e2e8f0",
              borderRadius: "6px",
              border: "none",
              color: "#475569",
              padding: "3px 3px 3px 3px",
              outline: "none",
            }}
            className="font-medium "
            onChange={(e) => setAmount(e.target.value)}
          />
          <div
            onClick={() => payAmount()}
            className="bg-green-400 hover:bg-green-500 p-1.5 font-medium text-lg text-center w-1/6 rounded-md text-white cursor-pointer"
          >
            Pay
          </div>
          <div
            onClick={() => setPay(false)}
            className="bg-slate-500 hover:bg-slate-600 p-1.5 font-medium text-lg text-center w-fit rounded-md text-white cursor-pointer"
          >
            Cancel
          </div>
        </div>
      ) : (
        <div
          onClick={() => setPay(true)}
          className="bg-blue-400 hover:bg-blue-500 p-1.5 font-medium text-lg text-center w-fit rounded-lg text-white mx-auto cursor-pointer"
        >
          Make Payment
        </div>
      )}
    </div>
  );
}

export default ContractPayments;
