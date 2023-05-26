import React from "react";
import { motion } from "framer-motion";
import ContractDetailsReview from "./ContractDetailsReview";
function ContractReview() {
  return (
    <motion.div
      initial={{ opacity: 0.25, x: -75, y: 0, scale: 1 }} //x:200 ,x:0
      animate={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
      }}
      transition={{ duration: 1 }}
      className="rounded-md bg-white  mx-auto space-y-2 p-4"
    >
      <div className="font-extrabold text-xl ">Contract Review</div>
      <div className="flex space-x-6  ">
        <ContractDetailsReview
          brideName="Amina Khalil"
          groomName="Ali Alosh"
          eventType="Wedding"
          eventPlace="Crown Plaza"
        />
        <div className="space-y-4">
          <div className="bg-white p-6 shadow-md space-y-3 rounded-md">
            <div>
              <div className="font-medium text-black">- Package 1 - 600 KD</div>
              <div className="p-2 text-gray-400">
                130 Pictures, Magazine 20x30, Album Crystal, Mini Magazine,
                Video, Open Photo and Video and Studio
              </div>
            </div>
            <div className="font-medium text-black">- Frame 50x70 - 50 KD</div>
            <div className="font-medium text-black">- Usb Photo - 50 KD</div>
            <div className="flex">
              <div className="flex-1"></div>
              <div className="font-medium text-gray-600 ">
                Total Price: 700 KD
              </div>
            </div>
          </div>
          <div className="bg-rounded-md shadow-md p-2 bg-gray-100 space-y-2 rounded-md">
            <div className="font-medium text-xl">Comments</div>

            <textarea
              className="w-full /6 p-1  rounded-md "
              placeholder="Add a comment"
              style={{ outline: "none", border: "none" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ContractReview;
