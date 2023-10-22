import React from "react";

function PackageSummary(props) {
  /*const magazine = props.packageDetails.magazinename ? "Magazine" + props.magazinename : "";
  const pictures = props.packageDetails.pictures ? props.packageDetails.pictures + "pictures" : "";
  const albumCrystal = props.packageDetails.albumcrystal ? "Album Crystal" : "";
  const magazineMini = props.packageDetails.magazinemini ? "Magazine Mini" : "";
  const video = props.packageDetails.video ? "Video" : "";
  const openPhotoAndVideo = props.packageDetails.openphotoandvideo
  ? "Open Photo and Video"
  : "";
  const studio = props.packageDetails.studio ? "Studio" : "";*/
  let pkgArray = [];
  pkgArray.push(
    props.packageDetails.magazinename ? "Magazine" + props.magazinename : ""
  );
  pkgArray.push(
    props.packageDetails.pictures
      ? props.packageDetails.pictures + "pictures"
      : ""
  );
  props.packageDetails.albumcrystal ? pkgArray.push("Album Crystal") : "";
  props.packageDetails.magazinemini ? pkgArray.push("Magazine Mini") : "";
  props.packageDetails.video ? pkgArray.push("Video") : "";
  props.packageDetails.openphotoandvideo
    ? pkgArray.push("Open Photo and Video")
    : "";
  props.packageDetails.studio ? pkgArray.push("Studio") : "";

  return (
    <div className="bg-amber-50  font-medium text-gray-500 rounded-md p-2">
      {Object.keys(props.packageDetails).length > 0 ? (
        <div>
          {pkgArray.map((item) => {
            return <li>{item}</li>;
          })}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default PackageSummary;
