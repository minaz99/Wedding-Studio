import React from "react";

function PackageSummary(props) {
  const albumCrystal = props.packageDetails.albumcrystal ? "Album Crystal" : "";
  const magazineMini = props.packageDetails.magazinemini ? "Magazine Mini" : "";
  const video = props.packageDetails.video ? "Video" : "";
  const openPhotoAndVideo = props.packageDetails.openphotoandvideo
    ? "Open Photo and Video"
    : "";
  const studio = props.packageDetails.studio ? "Studio" : "";
  const pkgDetails =
    Object.keys(props.packageDetails).length > 0
      ? `Magazine ${props.packageDetails.magazinename},
  ${props.packageDetails.pictures} pictures${albumCrystal}${magazineMini}${video}${openPhotoAndVideo}${studio}`
      : "";
  return (
    <div className="bg-amber-50  font-medium text-gray-500 rounded-md p-2">
      {Object.keys(props.packageDetails).length > 0 ? (
        <div>
          <li>Magazine {props.packageDetails.magazinename}</li>
          <li>{props.packageDetails.pictures} pictures</li>
          <li>{albumCrystal}</li>
          <li>{magazineMini}</li>
          <li>{video}</li>
          <li>{openPhotoAndVideo}</li>
          <li>{studio}</li>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default PackageSummary;
