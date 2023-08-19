import React from "react";
import PhoneNumbersComp from "./PhoneNumbersComp";
import {
  BanknotesIcon,
  BuildingStorefrontIcon,
  CalendarDaysIcon,
  IdentificationIcon,
  MegaphoneIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DateCalendar } from "@mui/x-date-pickers";

function ContractDetails(props) {
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
            <div className="text-black font-medium ">Second Party</div>
            <div className="bg-slate-200 rounded-md w-fit space-x-2 flex items-center p-1">
              <UserGroupIcon height={22} width={22} color="#475569" />
              <input
                value={props.secondPartyName}
                style={{
                  background: "#e2e8f0",
                  borderRadius: "6px",
                  border: "none",
                  color: "#475569",
                  padding: "3px 3px 3px 3px",
                  outline: "none",
                }}
                className="font-medium "
                onChange={(e) =>
                  props.setSecondPartyName(
                    e.target.value.charAt(0).toUpperCase() +
                      e.target.value.slice(1)
                  )
                }
              />
            </div>
          </div>
          <div>
            <div className="text-black font-medium ">Civil ID</div>
            <div className="rounded-md bg-slate-200 w-fit space-x-2 flex items-center p-1">
              <IdentificationIcon height={22} width={22} color="black" />
              <input
                value={props.civilID}
                style={{
                  background: "#e2e8f0",
                  borderRadius: "6px",
                  color: "#475569",
                  padding: "3px 3px 3px 3px",
                  border: "none",
                  outline: "none",
                }}
                className="font-medium w-full"
                onChange={(e) => props.setCivilID(e.target.value.toUpperCase())}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-evenly">
          <div>
            <div className="text-black font-medium ">Bride</div>
            <div className="rounded-md bg-slate-200 w-fit space-x-2 flex items-center p-1">
              <UserIcon height={22} width={22} color="#ec4899" />
              <input
                value={props.brideName}
                style={{
                  background: "#e2e8f0",
                  borderRadius: "6px",
                  color: "#475569",
                  padding: "3px 3px 3px 3px",
                  border: "none",
                  outline: "none",
                }}
                className="font-medium "
                onChange={(e) =>
                  props.setBrideName(
                    e.target.value.charAt(0).toUpperCase() +
                      e.target.value.slice(1)
                  )
                }
              />
            </div>
          </div>
          <div>
            <div className="text-black font-medium ">Groom</div>
            <div className="rounded-md bg-slate-200 w-fit space-x-2 flex items-center p-1">
              <UserIcon height={22} width={22} color="#3b82f6" />
              <input
                value={props.groomName}
                style={{
                  background: "#e2e8f0",
                  borderRadius: "6px",
                  color: "#475569",
                  padding: "3px 3px 3px 3px",
                  border: "none",
                  outline: "none",
                }}
                className="font-medium "
                onChange={(e) =>
                  props.setGroomName(
                    e.target.value.charAt(0).toUpperCase() +
                      e.target.value.slice(1)
                  )
                }
              />
            </div>
          </div>
        </div>

        <div className="flex justify-evenly ">
          <div className="">
            <div className="text-black font-medium ">Type</div>
            <div className="rounded-md bg-slate-200 w-fit space-x-2 flex items-center p-1">
              <MegaphoneIcon height={22} width={22} color="#a78bfa" />
              <input
                value={props.eventType}
                style={{
                  background: "#e2e8f0",
                  borderRadius: "6px",
                  color: "#475569",
                  padding: "3px 3px 3px 3px",
                  border: "none",
                  outline: "none",
                }}
                className="font-medium "
                onChange={(e) =>
                  props.setEventType(
                    e.target.value.charAt(0).toUpperCase() +
                      e.target.value.slice(1)
                  )
                }
              />
            </div>
          </div>
          <div className="">
            <div className="text-black font-medium ">Location</div>
            <div className="rounded-md bg-slate-200 w-fit space-x-2 flex items-center p-1">
              <BuildingStorefrontIcon height={22} width={22} color="#2dd4bf" />
              <input
                value={props.eventLocation}
                style={{
                  background: "#e2e8f0",
                  borderRadius: "6px",
                  color: "#475569",
                  padding: "3px 3px 3px 3px",
                  border: "none",
                  outline: "none",
                }}
                className="font-medium "
                onChange={(e) =>
                  props.setEventLocation(
                    e.target.value.charAt(0).toUpperCase() +
                      e.target.value.slice(1)
                  )
                }
              />
            </div>
          </div>
        </div>
        <div className="">
          <PhoneNumbersComp
            phone1={props.phone1}
            setPhone1={props.setPhone1}
            phone2={props.phone2}
            setPhone2={props.setPhone2}
          />
        </div>
        <div className="justify-around flex">
          <div>
            <div className="text-black font-medium ">Date</div>
            <div className="rounded-md bg-slate-200 w-fit space-x-2 flex items-center p-1">
              <CalendarDaysIcon height={22} width={22} color="#818cf8" />
              <input
                type="date"
                value={props.eventDate}
                style={{
                  background: "#e2e8f0",
                  borderRadius: "6px",
                  color: "#475569",
                  padding: "4px 4px 4px 4px",
                  border: "none",
                  outline: "none",
                }}
                className="font-medium"
                onChange={(e) => props.setEventDate(e.target.value)}
              />
            </div>
          </div>
          <div className="-mx-2">
            <div className="text-black font-medium  ">Paid Amount</div>
            <div className="rounded-md bg-slate-200 w-fit space-x-2 flex items-center p-1">
              <BanknotesIcon height={22} width={22} color="#0284c7" />
              <input
                type="number"
                value={props.paidAmount}
                style={{
                  background: "#e2e8f0",
                  borderRadius: "6px",
                  color: "#475569",
                  padding: "4px 4px 4px 4px",
                  border: "none",
                  outline: "none",
                }}
                className="font-medium"
                onChange={(e) => props.setPaidAmount(e.target.value)}
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
