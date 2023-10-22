import React from "react";

function PackageSummary(props) {
  let pkgArray = [];
  pkgArray.push(
    props.packageDetails.magazinename &&
      props.packageDetails.magazinename !== "-"
      ? "Magazine " + props.packageDetails.magazinename
      : ""
  );
  pkgArray.push(
    props.packageDetails.pictures
      ? props.packageDetails.pictures + " pictures"
      : ""
  );
  pkgArray.push(props.packageDetails.albumcrystal ? "Album Crystal" : "");
  pkgArray.push(props.packageDetails.magazinemini ? "Magazine Mini" : "");
  pkgArray.push(props.packageDetails.video ? "Video" : "");
  pkgArray.push(
    props.packageDetails.openphotoandvideo ? "Open Photo and Video" : ""
  );
  pkgArray.push(props.packageDetails.studio ? "Studio" : "");

  return (
    <div className="bg-amber-50  font-medium text-gray-500 rounded-md p-2">
      {Object.keys(props.packageDetails).length > 0 ? (
        <div>
          {pkgArray.map((item) => {
            if (item !== "") return <li>{item}</li>;
          })}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default PackageSummary;
