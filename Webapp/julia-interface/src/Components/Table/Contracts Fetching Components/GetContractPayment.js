import React from "react";
import PaymentWrapper from "../../Contract/Contract Details/PaymentWrapper";
import { ProgressBar } from "react-bootstrap";
import { useGetContractPaymentsQuery } from "../../../services/api/contractSlice";

function GetContractPayment(props) {
  const { data, isLoading, isError, isSuccess } = useGetContractPaymentsQuery(
    {
      token: props.token,
      id: props.id,
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );
  return (
    <div>
      <div className="space-x-4 flex justify-center">
        {isLoading ? (
          <div className="text-center text-blue-400 text-xl p-4">Loading</div>
        ) : isError ? (
          <div className="text-center text-red-400 text-xl p-4">
            Error loading payments
          </div>
        ) : isSuccess ? (
          data.payments.map((payment) => {
            return (
              <div>
                <PaymentWrapper
                  paymentNumber={payment.paymentnumber}
                  amount={payment.amount}
                />
              </div>
            );
          })
        ) : (
          <div></div>
        )}
      </div>
      {isSuccess ? (
        <div>
          <ProgressBar
            now={data.paid}
            variant="danger"
            label={data.paid}
            max={data.paid + data.due}
          />
          <div className="flex">
            <div className="text-gray-500 flex-1 flex">
              Due amount
              <div className="mx-2 text-black">{data.due}</div>
            </div>

            <div className="text-gray-500 flex">
              Total amount
              <div className="mx-2 text-black">{data.paid + data.due}</div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default GetContractPayment;
