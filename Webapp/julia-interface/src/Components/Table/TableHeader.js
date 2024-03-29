import {
  BuildingStorefrontIcon,
  CalendarDaysIcon,
  MagnifyingGlassIcon,
  MegaphoneIcon,
  UserIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import THEventTypeFilter from "./Filters/THEventTypeFilter";
import THEventLocationFilter from "./Filters/THEventLocationFilter";
import THBrideNameFilter from "./Filters/THBrideNameFilter";
import { useGetContractsTableHeaderFiltersQuery } from "../../services/api/contractSlice";

function TableHeader(props) {
  const [searchColor, setSearchColor] = useState("#9ca3af");
  const [searchBride, setSearchBride] = useState(false);
  const removeMultipleFilters = () => {
    props.setDataFrom("");
    props.setBrideNameSearch("");
    props.setContractStatusFilter("");
    props.setIsContractStatusFilter(false);
    props.setEventPlaceFilter("");
    props.setIsEventPlaceFilter(false);
    props.setEventTypeFilter("");
    props.setIsEventTypeFilter(false);
    setSearchBride(false);
    props.setIsBrideNameSearch(false);
    props.setBrideNameSearch("");
    props.setMultipleFilters(false);
  };
  const { data, isLoading, isError, isSuccess } =
    useGetContractsTableHeaderFiltersQuery(props.token, {
      refetchOnMountOrArgChange: true,
    });
  return (
    <div className="flex   bg-gray-100 justify-between rounded-md text-gray-600 border-gray-400 p-2">
      <div className="items-center  flex text-lg font-semibold">
        <UserIcon height={20} width={20} className="mx-2" color="#ec4899" />
        {!searchBride ? <div>Bride's name</div> : <div></div>}
        {!searchBride ? (
          <MagnifyingGlassIcon
            onMouseEnter={() => setSearchColor("#4b5563")}
            onMouseLeave={() => setSearchColor("#9ca3af")}
            height={20}
            width={20}
            className="mx-2 cursor-pointer"
            color={searchColor}
            onClick={() => setSearchBride(true)}
          />
        ) : (
          <THBrideNameFilter
            setMultipleFilters={props.setMultipleFilters}
            setSearchBride={setSearchBride}
            setBrideNameSearch={props.setBrideNameSearch}
            setDataFrom={props.setDataFrom}
            setIsBrideNameSearch={props.setIsBrideNameSearch}
            brideNameSearch={props.brideNameSearch}
          />
        )}
      </div>
      <div className="text-lg flex  font-semibold items-center ">
        <MegaphoneIcon
          height={20}
          width={20}
          className="mx-2"
          color="#a78bfa"
        />
        Event
        <div className="flex-1 w-2"></div>
        <THEventTypeFilter
          data={data}
          isLoading={isLoading}
          isSuccess={isSuccess}
          isError={isError}
          token={props.token}
          setMultipleFilters={props.setMultipleFilters}
          setEventTypeFilter={props.setEventTypeFilter}
          setDataFrom={props.setDataFrom}
          setIsEventTypeFilter={props.setIsEventTypeFilter}
        />
      </div>

      <div className="text-lg items-center flex  font-semibold">
        <BuildingStorefrontIcon
          height={20}
          width={20}
          className="mx-2"
          color="#2dd4bf"
        />
        Location
        <div className="flex-1 w-2"></div>
        <THEventLocationFilter
          data={data}
          isLoading={isLoading}
          isSuccess={isSuccess}
          isError={isError}
          token={props.token}
          setMultipleFilters={props.setMultipleFilters}
          setEventPlaceFilter={props.setEventPlaceFilter}
          setDataFrom={props.setDataFrom}
          setIsEventPlaceFilter={props.setIsEventPlaceFilter}
        />
      </div>
      <div className="items-center flex  text-lg font-semibold">
        <CalendarDaysIcon
          height={20}
          width={20}
          className="mx-2"
          color="#818cf8"
        />
        Date
        <div className="flex-1 w-2 mx-10"></div>
      </div>
      {props.dataFrom === "multiple" ? (
        <div className="items-center flex">
          <XCircleIcon
            className="cursor-pointer "
            height={24}
            width={24}
            color="black"
            onClick={removeMultipleFilters}
          />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default TableHeader;
