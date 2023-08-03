import React, { useState } from "react";
import SectionsWrapper from "./Sections/SectionsWrapper";
import TableWrapper from "./Table/TableWrapper";
import CreatContractWrapper from "./Contract/New Contract Components/CreatContractWrapper";
import PhotographersCalender from "./Calendar/PhotographersCalender";
import CalendarWrapper from "./Calendar/CalendarWrapper";
import { act } from "react-dom/test-utils";
import PackagesWrapper from "./Packages/Package/PackagesWrapper";
import SettingsWrapper from "./Settings/SettingsWrapper";
import FilterWrapper from "./Table/Filters/FilterWrapper";

function Home(props) {
  const [activeView, setActiveView] = useState("Table");
  const [name, setName] = useState(props.userData.name);
  const [token, setToken] = useState(props.userData.accessToken);
  return (
    <div className="rounded-lg bg-slate-400  h-screen  p-4 shadow-lg  ">
      <div className="flex  h-full relative justify-center">
        <SectionsWrapper name={name} setActiveView={setActiveView} />
        {activeView === "Table" ? (
          <TableWrapper
            initialX={props.initialX}
            finalX={props.finalX}
            pressedRow={props.pressedRow}
            token={token}
          />
        ) : activeView === "Contract" ? (
          <CreatContractWrapper setActiveView={setActiveView} />
        ) : activeView === "photographers" || activeView === "events" ? (
          <CalendarWrapper setActiveView={setActiveView} view={activeView} />
        ) : activeView === "Packages" ? (
          <PackagesWrapper />
        ) : activeView === "Settings" ? (
          <SettingsWrapper name={name} />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Home;
