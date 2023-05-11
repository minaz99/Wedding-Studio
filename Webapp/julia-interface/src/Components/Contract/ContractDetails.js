import React from "react";

function ContractDetails() {
  return (
    <div className="space-y-3 rounded-lg p-2 bg-white h-fit w-fit">
      <div className="font-bold text-lg text-black">Om Amina</div>
      <div className="flex   text-gray-400">
        Bride name
        <div className="mx-3 font-semibold">Amina Khalil</div>
      </div>
      <div className=" flex text-gray-400">
        Groom name
        <div className="mx-3 font-semibold">Roshdy Abaza</div>
      </div>
      <div className=" flex text-gray-400">
        Date of issue
        <div className="mx-3 font-semibold">12/06/2023</div>
      </div>
      <div className="flex  text-gray-400">
        Type of occassion
        <div className="mx-3 font-semibold">Wedding</div>
      </div>
      <div className="flex  text-gray-400">
        Event place
        <div className="mx-3 font-semibold">Movenpick</div>
      </div>

      <div className="flex  text-gray-400">
        Phone number
        <div className="mx-3 font-semibold">69658340</div>
      </div>

      <div className="flex  text-gray-400">
        Contract price
        <div className="mx-3 font-semibold">650 KD</div>
      </div>
      <div className="flex  text-gray-400">
        Due amount
        <div className="mx-3 font-semibold">300 KD</div>
      </div>
      <div className="flex  text-gray-400">
        Comments
        <div className="mx-3 font-semibold">
          Bride wants photographers to arrive 1 hour and 30 mins earlier for
          photoshoot of the bride before the weeding
        </div>
      </div>
    </div>
  );
}

export default ContractDetails;
