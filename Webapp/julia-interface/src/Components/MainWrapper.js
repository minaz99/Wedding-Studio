import React, { useState } from "react";
import SectionsWrapper from "./Sections/SectionsWrapper";
import TableWrapper from "./Table/TableWrapper";
import CreatContractWrapper from "./Contract/New Contract Components/CreatContractWrapper";
import PhotographersCalender from "./Calendar/PhotographersCalender";
import CalendarWrapper from "./Calendar/CalendarWrapper";
import { act } from "react-dom/test-utils";

function MainWrapper(props) {
  const [activeView, setActiveView] = useState("Table");
  return (
    <div className="rounded-lg bg-slate-400  h-screen w-fit p-4 shadow-lg mx-auto ">
      <div className="flex h-full relative">
        <SectionsWrapper setActiveView={setActiveView} />
        {activeView === "Table" ? (
          <TableWrapper
            initialX={props.initialX}
            finalX={props.finalX}
            pressedRow={props.pressedRow}
          />
        ) : activeView === "Contract" ? (
          <CreatContractWrapper setActiveView={setActiveView} />
        ) : activeView === "photographers" || activeView === "events" ? (
          <CalendarWrapper setActiveView={setActiveView} view={activeView} />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default MainWrapper;
