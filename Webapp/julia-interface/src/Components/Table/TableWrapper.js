import React, { useEffect, useState } from "react";
import {
  ChevronDownIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import TableFooter from "./TableFooter";
import { motion } from "framer-motion";
import AddContractWrapper from "../Contract/Contract Details/AddContractWrapper";
import CreatContractWrapper from "../Contract/New Contract Components/CreatContractWrapper";
import ContractWrapper from "../Contract/Contract Details/ContractWrapper";
import { Dropdown, DropdownButton } from "react-bootstrap";
import FilterWrapper from "./Filters/FilterWrapper";
import {
  useGetAllContractsQuery,
  useGetContractsByMultipleCriteriasQuery,
  useGetContractsTableHeaderFiltersQuery,
} from "../../services/api/contractSlice";
import Filters from "./Filters/Filters";
import GetAllContractsComponent from "./Contracts Fetching Components/GetAllContractsComponent";
import GetContractsBySingleFilter from "./Contracts Fetching Components/GetContractsBySingleFilter";
import SearchWrapper from "./Search/SearchWrapper";
import GetContractsBySearchCriteria from "./Contracts Fetching Components/GetContractsBySearchCriteria";
import ContractsTableDataHandler from "./Contracts Fetching Components/ContractsTableDataHandler";
function TableWrapper(props) {
  const [chevHover, setChevHover] = useState(false);
  const cheveronDownColor = chevHover ? "black" : "#9ca3af";
  const [showContractDetails, setShowContractDetails] = useState(false);
  const [showContract, setShowContract] = useState(false);
  const [filterType, setFilterType] = useState("Select filter");
  const [filterTypeOption, setFilterTypeOption] = useState("");
  const [initialX, setIntialX] = useState(0);
  const [finalX, setFinalX] = useState(0);
  const [showFilter, setShowFilter] = useState(false);
  const [contractID, setContractID] = useState(-1);

  const [multipleFilters, setMultipleFilters] = useState(false);
  const [searchType, setSearchType] = useState("Search");
  const [searchValue, setSearchValue] = useState("");
  const [dataFrom, setDataFrom] = useState("");
  const [brideNameSearch, setBrideNameSearch] = useState("");
  const [eventTypeFilter, setEventTypeFilter] = useState("");
  const [eventPlaceFilter, setEventPlaceFilter] = useState("");
  const [contractStatusFilter, setContractStatusFilter] = useState("");
  const [isBrideNameSearch, setIsBrideNameSearch] = useState(false);
  const [isEventTypeFilter, setIsEventTypeFilter] = useState(false);
  const [isEventPlaceFilter, setIsEventPlaceFilter] = useState(false);
  const [isContractStatusFilter, setIsContractStatusFilter] = useState(false);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [totalContracts, setTotalContracts] = useState(0);
  /* const [getContractsByMultipleCriterias, result] =
    useGetContractsByMultipleCriteriasQuery();
*/
  const pressedRow = (id) => {
    setIntialX(0);
    setFinalX(0); //finalX: -250, InitialX: 0 //we need to animate the whole component (Table + Contract so that they move together in the same transition )
    setContractID(id);
    setShowContractDetails(true);
  };
  const resetValues = () => {
    setIntialX(0);
    setFinalX(0);
    setContractID(-1);
    setShowContractDetails(false);
  };

  const filterTypeSelected = (filterType) => {
    setFilterType(filterType);
    setShowFilter(true);
  };

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
      className="rounded-r-lg z-0 relative  p-4 w-11/12  shadow-md   bg-slate-600 "
    >
      {showContractDetails ? (
        <ContractWrapper
          token={props.token}
          contractID={contractID}
          resetValues={resetValues}
        />
      ) : (
        <div></div>
      )}

      <div className="flex items-center  p-2  ">
        <Filters
          filterType={filterType}
          setFilterType={setFilterType}
          filterTypeSelected={filterTypeSelected}
        />
        <div className="flex-1"></div>

        <SearchWrapper
          searchType={searchType}
          setSearchType={setSearchType}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
          setDataFrom={setDataFrom}
        />
      </div>

      <div className="">
        <TableHeader
          setMultipleFilters={setMultipleFilters}
          token={props.token}
          setBrideNameSearch={setBrideNameSearch}
          setEventTypeFilter={setEventTypeFilter}
          setEventPlaceFilter={setEventPlaceFilter}
          setContractStatusFilter={setContractStatusFilter}
          setDataFrom={setDataFrom}
          setIsBrideNameSearch={setIsBrideNameSearch}
          setIsEventPlaceFilter={setIsEventPlaceFilter}
          setIsEventTypeFilter={setIsEventTypeFilter}
          setIsContractStatusFilter={setIsContractStatusFilter}
          dataFrom={dataFrom}
        />
        <ContractsTableDataHandler
          token={props.token}
          pressedRow={pressedRow}
          searchType={searchType}
          searchValue={searchValue}
          filterType={filterType}
          filterTypeOption={filterTypeOption}
          dataFrom={dataFrom}
          brideNameSearch={brideNameSearch}
          eventTypeFilter={eventTypeFilter}
          eventPlaceFilter={eventPlaceFilter}
          contractStatusFilter={contractStatusFilter}
          page={page}
          setPage={setPage}
          setPageCount={setPageCount}
          setTotalContracts={setTotalContracts}
        />
      </div>
      {showFilter ? (
        <FilterWrapper
          token={props.token}
          setFilterType={setFilterType}
          setShowFilter={setShowFilter}
          filterType={filterType}
          filterTypeOption={filterTypeOption}
          setFilterTypeOption={setFilterTypeOption}
          setDataFrom={setDataFrom}
        />
      ) : (
        <div></div>
      )}
      <TableFooter
        totalContracts={totalContracts}
        setTotalContracts={setTotalContracts}
        pageCount={pageCount}
        page={page}
        setPage={setPage}
      />
    </motion.div>
  );
}

export default TableWrapper;
