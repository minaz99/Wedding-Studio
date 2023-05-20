import React from "react";
import PhoneNumbersComp from "./PhoneNumbersComp";
import {
  BuildingStorefrontIcon,
  IdentificationIcon,
  MegaphoneIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
function ContractDetails() {
  return (
    <motion.div
      initial={{ opacity: 0.25, x: -50, y: 0, scale: 1 }} //x:200 ,x:0
      animate={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
      }}
      transition={{ duration: 1 }}
      className="rounded-md bg-white mx-auto p-4"
    >
      <div className="space-y-3">
        <div className="font-extrabold text-xl">Contract Details</div>
        <div className="flex justify-evenly">
          <div>
            <div className="text-black font-medium ">Second Party Name</div>
            <div className="bg-slate-200 rounded-md w-fit space-x-2 flex items-center p-1">
              <UserGroupIcon height={22} width={22} color="#475569" />
              <input
                style={{
                  background: "#e2e8f0",
                  borderRadius: "6px",
                  border: "none",
                  color: "#475569",
                  padding: "3px 3px 3px 3px",
                  outline: "none",
                }}
                className="font-medium "
              />
            </div>
          </div>
          <div>
            <div className="text-black font-medium ">Civil ID</div>
            <div className="rounded-md bg-slate-200 w-fit space-x-2 flex items-center p-1">
              <IdentificationIcon height={22} width={22} color="black" />
              <input
                style={{
                  background: "#e2e8f0",
                  borderRadius: "6px",
                  color: "#475569",
                  padding: "3px 3px 3px 3px",
                  border: "none",
                  outline: "none",
                }}
                className="font-medium w-full"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-evenly">
          <div>
            <div className="text-black font-medium ">Bride Name</div>
            <div className="rounded-md bg-slate-200 w-fit space-x-2 flex items-center p-1">
              <UserIcon height={22} width={22} color="#ec4899" />
              <input
                style={{
                  background: "#e2e8f0",
                  borderRadius: "6px",
                  color: "#475569",
                  padding: "3px 3px 3px 3px",
                  border: "none",
                  outline: "none",
                }}
                className="font-medium "
              />
            </div>
          </div>
          <div>
            <div className="text-black font-medium ">Groom Name</div>
            <div className="rounded-md bg-slate-200 w-fit space-x-2 flex items-center p-1">
              <UserIcon height={22} width={22} color="#3b82f6" />
              <input
                style={{
                  background: "#e2e8f0",
                  borderRadius: "6px",
                  color: "#475569",
                  padding: "3px 3px 3px 3px",
                  border: "none",
                  outline: "none",
                }}
                className="font-medium "
              />
            </div>
          </div>
        </div>

        <PhoneNumbersComp />
        <div className="flex justify-evenly ">
          <div className="">
            <div className="text-black font-medium ">Event Type</div>
            <div className="rounded-md bg-slate-200 w-fit space-x-2 flex items-center p-1">
              <MegaphoneIcon height={22} width={22} color="#a78bfa" />
              <input
                style={{
                  background: "#e2e8f0",
                  borderRadius: "6px",
                  color: "#475569",
                  padding: "3px 3px 3px 3px",
                  border: "none",
                  outline: "none",
                }}
                className="font-medium "
              />
            </div>
          </div>
          <div className="">
            <div className="text-black font-medium ">Event Location</div>
            <div className="rounded-md bg-slate-200 w-fit space-x-2 flex items-center p-1">
              <BuildingStorefrontIcon height={22} width={22} color="#2dd4bf" />
              <input
                style={{
                  background: "#e2e8f0",
                  borderRadius: "6px",
                  color: "#475569",
                  padding: "3px 3px 3px 3px",
                  border: "none",
                  outline: "none",
                }}
                className="font-medium "
              />
            </div>
          </div>
        </div>
        <div className="my-2"></div>
      </div>
    </motion.div>
  );
}

export default ContractDetails;
