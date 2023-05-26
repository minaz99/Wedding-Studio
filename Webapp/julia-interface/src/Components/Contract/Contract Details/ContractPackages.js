import { CameraIcon } from "@heroicons/react/24/outline";
import React from "react";

function ContractPackages(props) {
  return (
    <div className="space-y-3 rounded-lg p-4 w-fit bg-white h-fit  ">
      <div className="font-medium text-xl flex items-center ">Packages </div>
      <div className="flex space-x-2 items-center">
        <div className="text-gray-800">Package</div>
        <div className="bg-teal-200 rounded-md  p-1 shadow-md">
          <div className="font-medium">Package 1</div>
          <div className="text-gray-600 p-1">
            <li>130 Pictures</li>
            <li>Magazine 20x30</li>
            <li>Album Crystal</li>
            <li>Mini Magazine</li>
            <li>Video</li>
            <li>Open Photo and Video</li>
            <li>Studio</li>
          </div>
        </div>
      </div>

      <div className="flex space-x-6 items-center">
        <div className="text-gray-800">Extras</div>
        <div className="bg-orange-200 rounded-md  p-1 shadow-md">
          <div className="font-medium">Seperate Promo</div>
        </div>
      </div>
      <div className="space-y-3">
        <div className="text-black flex space-x-6">
          <div>Prices</div>
          <div>
            <div className="text-gray-500">650 KD for Package,</div>
            <div className="text-gray-500">150 KD for Seperate Promo</div>
          </div>
        </div>
        <div className="flex">
          <div className="flex-1"></div>
          <div className="space-x-2 flex items-center">
            <div className="font-bold">Total price</div>
            <div className="rounded-md bg-blue-100 h-fit p-1">800 KD</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContractPackages;
