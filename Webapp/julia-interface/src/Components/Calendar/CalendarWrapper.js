import React, { useState, useEffect } from "react";
import CalenderRows from "./CalenderRows";
import CalenderDaysHeader from "./CalenderDaysHeader";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
function CalendarWrapper(props) {
  const [leftArrowColor, setLeftArrowColor] = useState("#cbd5e1");
  const [rightArrowColor, setRightArrowColor] = useState("#cbd5e1");
  const [data, setData] = useState([]);
  const names1 = ["Amina Khalil", "Amira Sabry", "Dalia Ahmed"];
  const names2 = ["Crown Plaza", "Movenpick", "Marriot"];

  useEffect(() => {
    if (props.view === "photographers") setData(names1);
    else setData(names2);
  }, [props.view]);

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
      className="rounded-r-lg  space-y-6  p-3 items-center h-full w-11/12 shadow-md   bg-slate-600"
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
            />
            <div style={{ color: leftArrowColor }} className="font-medium">
              April
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="font-medium " style={{ color: rightArrowColor }}>
              June
            </div>
            <ChevronRightIcon
              onMouseEnter={() => setRightArrowColor("white")}
              onMouseLeave={() => setRightArrowColor("#cbd5e1")}
              height={24}
              width={24}
              className="cursor-pointer hover:rounded-full p-1 hover:bg-slate-800 "
              color={rightArrowColor}
            />
          </div>
        </div>
        <div className="flex ">
          <div className="font-medium mx-auto  text-lg text-white ">May</div>
        </div>
      </div>
      <div>
        <CalenderDaysHeader />
        <CalenderRows
          view={props.view}
          data={data}
          day={1}
          day1={2}
          day2={3}
          day3={4}
          day4={5}
          day5={6}
          day6={7}
        />
        <CalenderRows
          view={props.view}
          data={data}
          day={8}
          day1={9}
          day2={10}
          day3={11}
          day4={12}
          day5={13}
          day6={14}
        />
        <CalenderRows
          view={props.view}
          data={data}
          day={15}
          day1={16}
          day2={17}
          day3={18}
          day4={19}
          day5={20}
          day6={21}
        />
        <CalenderRows
          view={props.view}
          data={data}
          day={22}
          day1={23}
          day2={24}
          day3={25}
          day4={26}
          day5={27}
          day6={28}
        />
        <CalenderRows
          view={props.view}
          data={data}
          day={29}
          day1={30}
          day2={31}
          day3={1}
          day4={2}
          day5={3}
          day6={4}
        />
      </div>
    </motion.div>
  );
}

export default CalendarWrapper;
