import {
  BuildingStorefrontIcon,
  CameraIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import React from "react";

function CalenderRows(props) {
  return (
    <div className="flex items-center  bg-slate-600">
      <div className="cursor-pointer p-2 font-mono w-44 h-28 space-y-2  border-slate-600 border-2 rounded-md  bg-red-100 ">
        <div className="">{props.day}</div>
        <div className="">
          <div className="flex items-center space-x-2 ">
            {props.view === "photographers" ? (
              <CameraIcon height={16} width={16} color="#db2777" />
            ) : (
              <BuildingStorefrontIcon height={16} width={16} color="#db2777" />
            )}
            <div className="text-sm  text-pink-600">{props.data[0]}</div>
          </div>
          <div className="flex items-center space-x-2">
            {props.view === "photographers" ? (
              <CameraIcon height={16} width={16} color="#db2777" />
            ) : (
              <BuildingStorefrontIcon height={16} width={16} color="#db2777" />
            )}
            <div className="text-sm   text-pink-600">{props.data[1]}</div>
          </div>
          <div className="flex items-center space-x-2">
            {props.view === "photographers" ? (
              <CameraIcon height={16} width={16} color="#db2777" />
            ) : (
              <BuildingStorefrontIcon height={16} width={16} color="#db2777" />
            )}
            <div className="text-sm   text-pink-600">{props.data[2]}</div>
          </div>
        </div>
      </div>
      <div className="cursor-pointer p-2 font-mono w-44 h-28 space-y-2  border-slate-600 border-2 rounded-md  bg-red-100 ">
        <div className="">{props.day1}</div>
        <div className="">
          <div className="flex items-center space-x-2 ">
            {props.view === "photographers" ? (
              <CameraIcon height={16} width={16} color="#db2777" />
            ) : (
              <BuildingStorefrontIcon height={16} width={16} color="#db2777" />
            )}
            <div className="text-sm  text-pink-600">{props.data[0]}</div>
          </div>
          <div className="flex items-center space-x-2">
            {props.view === "photographers" ? (
              <CameraIcon height={16} width={16} color="#db2777" />
            ) : (
              <BuildingStorefrontIcon height={16} width={16} color="#db2777" />
            )}
            <div className="text-sm   text-pink-600">{props.data[1]}</div>
          </div>
        </div>
      </div>
      <div className="cursor-pointer p-2 font-mono w-44 h-28 space-y-2  border-slate-600 border-2 rounded-md  bg-white ">
        <div className="">{props.day2}</div>
        <div className="space-y-1"></div>
      </div>
      <div className="cursor-pointer p-2 font-mono w-44 h-28 space-y-2  border-slate-600 border-2 rounded-md  bg-red-100 ">
        <div className="">{props.day3}</div>
        <div className="">
          <div className="flex items-center space-x-2 ">
            {props.view === "photographers" ? (
              <CameraIcon height={16} width={16} color="#db2777" />
            ) : (
              <BuildingStorefrontIcon height={16} width={16} color="#db2777" />
            )}
            <div className="text-sm  text-pink-600">{props.data[0]}</div>
          </div>
          <div className="flex items-center space-x-2">
            {props.view === "photographers" ? (
              <CameraIcon height={16} width={16} color="#db2777" />
            ) : (
              <BuildingStorefrontIcon height={16} width={16} color="#db2777" />
            )}
            <div className="text-sm   text-pink-600">{props.data[1]}</div>
          </div>
          <div className="flex items-center space-x-2">
            {props.view === "photographers" ? (
              <CameraIcon height={16} width={16} color="#db2777" />
            ) : (
              <BuildingStorefrontIcon height={16} width={16} color="#db2777" />
            )}
            <div className="text-sm   text-pink-600">{props.data[2]}</div>
          </div>
        </div>
      </div>
      <div className="cursor-pointer p-2 font-mono w-44 h-28 space-y-2  border-slate-600 border-2 rounded-md  bg-red-100 ">
        <div className="">{props.day4}</div>
        <div className="">
          <div className="flex items-center space-x-2 ">
            {props.view === "photographers" ? (
              <CameraIcon height={16} width={16} color="#db2777" />
            ) : (
              <BuildingStorefrontIcon height={16} width={16} color="#db2777" />
            )}
            <div className="text-sm  text-pink-600">{props.data[0]}</div>
          </div>
        </div>
      </div>
      <div className="cursor-pointer p-2 font-mono w-44 h-28 space-y-2  border-slate-600 border-2 rounded-md  bg-white ">
        <div className="">{props.day5}</div>
        <div className="space-y-1"></div>
      </div>
      <div className="cursor-pointer p-2 font-mono w-44 h-28 space-y-2  border-slate-600 border-2 rounded-md  bg-white ">
        <div className="">{props.day6}</div>
        <div className="space-y-1"></div>
      </div>
    </div>
  );
}

export default CalenderRows;