import { MagnifyingGlassIcon, XCircleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

function SearchWrapper(props) {
  const handleSearch = (e) => {
    props.setDataFrom("search");
    props.setSearchValue(e.target.value);
  };
  const handleDeleteSearch = () => {
    props.setDataFrom("");
    props.setSearchValue("");
  };
  return (
    <div className="flex p-2 space-x-2 items-center">
      <div className="space-y-1">
        <DropdownButton variant="primary" id="dropdown-basic-button" title={""}>
          <Dropdown.Item onClick={() => props.setSearchType("photographer")}>
            Photographer
          </Dropdown.Item>
          <Dropdown.Item onClick={() => props.setSearchType("video")}>
            Video
          </Dropdown.Item>
          <Dropdown.Item onClick={() => props.setSearchType("groomName")}>
            Groom
          </Dropdown.Item>
          <Dropdown.Item onClick={() => props.setSearchType("secondPartyName")}>
            Second Party
          </Dropdown.Item>
          <Dropdown.Item onClick={() => props.setSearchType("civilID")}>
            Civil ID
          </Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="  rounded-md p-1 flex items-center hover:bg-gray-300 bg-white">
        {props.searchType !== "Search" ? (
          <input
            placeholder={props.searchType}
            className="outline-none border-none hover:bg-gray-300 bg-white "
            onChange={handleSearch}
            value={props.searchValue}
          />
        ) : (
          <input
            placeholder={props.searchType}
            className="outline-none border-none hover:bg-gray-300 bg-white "
            disabled
            value={props.searchValue}
          />
        )}
        {props.searchValue === "" ? (
          <MagnifyingGlassIcon
            className=""
            height={20}
            width={20}
            color="#334155"
          />
        ) : (
          <XCircleIcon
            className="cursor-pointer"
            height={20}
            width={20}
            color="#334155"
            onClick={handleDeleteSearch}
          />
        )}
      </div>
    </div>
  );
}

export default SearchWrapper;
