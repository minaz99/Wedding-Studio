import React from "react";

function PackageSummary(props) {
  const pkg1Summary =
    "130 Pictures, Magazine 20x30, Album Crystal, Mini Magazine, Video, Open Photo and Video and Studio";
  const pkg2Summary =
    "150 Pictures, Magazine 30x30, Album Crystal, Mini Magazine, Video, Open Photo and Video and Studio";
  const pkg3Summary =
    "150 Pictures, Magazine Ipad, Album Crystal, Mini Magazine, Video, Open Photo and Video and Studio";
  const alMokhmd =
    "150 Pictures, Magazine Ipad, Album Crystal, Mini Magazine, Video, 3 Magazines, Family album (Atefa), Open Photo and Video and Studio";
  const geld =
    "150 Pictures, Magazine Ipad, Album Crystal, Mini Magazine, Video, 3 Magazines, Family album (Geld), Open Photo and Video and Studio";
  return (
    <div className="bg-amber-50 font-medium text-gray-500 rounded-md p-2">
      {props.pkgNo === 1 ? (
        pkg1Summary
      ) : props.pkgNo === 2 ? (
        pkg2Summary
      ) : props.pkgNo === 3 ? (
        pkg3Summary
      ) : props.pkgNo === 4 ? (
        alMokhmd
      ) : props.pkgNo === 5 ? (
        geld
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default PackageSummary;
