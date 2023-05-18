import { CreditCardIcon } from "@heroicons/react/24/outline";
import { ProgressBar } from "react-bootstrap";
import PaymentWrapper from "./PaymentWrapper";
function ContractPayments(props) {
  return (
    <div className="space-y-3 rounded-lg p-4   bg-white h-fit  ">
      <div className="font-medium text-xl flex items-center space-x-2  ">
        <div>Payments</div>
        <CreditCardIcon height={22} width={22} color="#fbbf24" />{" "}
      </div>

      <div className="space-x-4 flex">
        <PaymentWrapper paymentNumber={"1st payment"} amount="200 KD" />
        <PaymentWrapper paymentNumber={"2nd payment"} amount="200 KD" />
        <PaymentWrapper paymentNumber={"3rd payment"} amount="200 KD" />
      </div>
      <ProgressBar now={600} variant="danger" label="600 KD" max={800} />
      <div className="flex">
        <div className="text-gray-500 flex-1 flex">
          Due amount
          <div className="mx-2 text-black">200 KD</div>
        </div>

        <div className="text-gray-500 flex">
          Contract price
          <div className="mx-2 text-black">800 KD</div>
        </div>
      </div>
    </div>
  );
}

export default ContractPayments;
