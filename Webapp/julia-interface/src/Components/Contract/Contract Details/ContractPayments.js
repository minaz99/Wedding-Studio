import { CreditCardIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { ProgressBar } from "react-bootstrap";
import PaymentWrapper from "./PaymentWrapper";
import { useGetContractPaymentsQuery } from "../../../services/api/contractSlice";
function ContractPayments(props) {
  const { data, isLoading, isError, isSuccess } = useGetContractPaymentsQuery({
    token: props.token,
    id: props.id,
  });
  return (
    <div className="space-y-3 rounded-lg p-4   bg-white h-fit  ">
      <div className=" flex  items-center ">
        <div className="font-medium text-xl flex-1">Payments</div>
        <PencilSquareIcon
          height={22}
          width={22}
          color="#475569"
          className="cursor-pointer"
        />
      </div>

      <div className="space-x-4 flex justify-center">
        {isLoading ? (
          <div className="text-center text-blue-400 text-xl p-4">
            Loading...
          </div>
        ) : isError ? (
          <div className="text-center text-red-400 text-xl p-4">
            Error loading packages
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

export default ContractPayments;
