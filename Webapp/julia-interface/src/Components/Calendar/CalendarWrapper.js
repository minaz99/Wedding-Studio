import React, { useState } from "react";
import CalenderDaysHeader from "./CalenderDaysHeader";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import YearsAndMonthComp from "./YearsAndMonthComp";
import DayOfWeekColumn from "./DayOfWeekColumn";
import { useGetContractsInMonthQuery } from "../../services/api/contractSlice";
function CalendarWrapper(props) {
  const [leftArrowColor, setLeftArrowColor] = useState("#cbd5e1");
  const [rightArrowColor, setRightArrowColor] = useState("#cbd5e1");
  const [showMonthAndYear, setShowMonthAndYear] = useState(false);

  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const getMonthString = (month) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[month - 1];
  };
  const { data, isLoading, isError, isSuccess } = useGetContractsInMonthQuery(
    {
      token: props.token,
      month: month,
      year: year,
    },
    { refetchOnMountOrArgChange: true }
  );

  return (
    <motion.div
      initial={{ opacity: 0.25, x: -200, y: 0, scale: 1.2 }} //x:200 ,x:0
      animate={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
      }}
      transition={{ duration: 0.75 }}
      className="rounded-r-lg  space-y-6  p-3 items-center h-full w-11/12 shadow-md  overflow-y-scroll bg-slate-600"
    >
      <div>
        <div className="flex">
          <div className="flex flex-1 items-center space-x-2">
            <ChevronLeftIcon
              onMouseEnter={() => setLeftArrowColor("white")}
              onMouseLeave={() => setLeftArrowColor("#cbd5e1")}
              height={24}
              width={24}
              className=" hover:rounded-full p-1 hover:bg-slate-800 cursor-pointer"
              color={leftArrowColor}
              onClick={() => setMonth(month - 1)}
            />
            <div style={{ color: leftArrowColor }} className="font-medium">
              {getMonthString(month - 1)}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="font-medium " style={{ color: rightArrowColor }}>
              {getMonthString(month + 1)}
            </div>
            <ChevronRightIcon
              onMouseEnter={() => setRightArrowColor("white")}
              onMouseLeave={() => setRightArrowColor("#cbd5e1")}
              height={24}
              width={24}
              className="cursor-pointer hover:rounded-full p-1 hover:bg-slate-800 "
              color={rightArrowColor}
              onClick={() => setMonth(month + 1)}
            />
          </div>
        </div>
        <div className="flex ">
          <div
            onClick={() => setShowMonthAndYear(true)}
            className="font-medium mx-auto  text-lg text-white cursor-pointer "
          >
            {getMonthString(month)} {year}
          </div>
        </div>
      </div>
      <div>
        <CalenderDaysHeader />
        {isLoading ? (
          <div className="text-center text-blue-400 text-xl p-4">Loading</div>
        ) : isSuccess ? (
          <div className="space-y-2">
            <DayOfWeekColumn rowCount={0} data={data} />
            <DayOfWeekColumn rowCount={7} data={data} />
            <DayOfWeekColumn rowCount={14} data={data} />
            <DayOfWeekColumn rowCount={21} data={data} />
            <DayOfWeekColumn rowCount={28} data={data} />
            <DayOfWeekColumn rowCount={35} data={data} />
          </div>
        ) : isError ? (
          <div className="text-center text-red-400 text-xl p-4">
            Error loading calendar
          </div>
        ) : (
          <div></div>
        )}

        {showMonthAndYear ? (
          <YearsAndMonthComp
            month={month}
            year={year}
            setMonth={setMonth}
            setYear={setYear}
            setShowMonthAndYear={setShowMonthAndYear}
          />
        ) : (
          <div></div>
        )}
      </div>
    </motion.div>
  );
}

export default CalendarWrapper;
