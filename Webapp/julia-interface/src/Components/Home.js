import React, { useState } from "react";
import SectionsWrapper from "./Sections/SectionsWrapper";
import TableWrapper from "./Table/TableWrapper";
import CreatContractWrapper from "./Contract/New Contract Components/CreatContractWrapper";
import CalendarWrapper from "./Calendar/CalendarWrapper";
import PackagesWrapper from "./Packages/PackagesWrapper";
import AddPhotographerWrapper from "./Add Photographer/AddPhotographerWrapper";
import Credits from "./Credits";

function Home(props) {
  const [activeView, setActiveView] = useState("Table");
  const [name, setName] = useState(props.userData.name);
  const [token, setToken] = useState(props.userData.accessToken);
  const [role, setRole] = useState(props.userData.role);
  return (
    <div className="rounded-lg bg-slate-400  h-screen  p-4 shadow-lg  ">
      <div className="flex  h-full relative justify-center">
        <SectionsWrapper
          setIsLoggedIn={props.setIsLoggedIn}
          name={name}
          setActiveView={setActiveView}
        />
        {activeView === "Table" ? (
          <TableWrapper
            initialX={props.initialX}
            finalX={props.finalX}
            pressedRow={props.pressedRow}
            token={token}
          />
        ) : activeView === "Contract" ? (
          <CreatContractWrapper
            name={name}
            token={token}
            setActiveView={setActiveView}
          />
        ) : activeView === "photographers" ? (
          <CalendarWrapper token={token} />
        ) : activeView === "Packages" ? (
          <PackagesWrapper role={role} token={token} />
        ) : activeView === "AddPhotographer" ? (
          <AddPhotographerWrapper token={token} />
        ) : activeView === "Credits" ? (
          <Credits />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Home;
