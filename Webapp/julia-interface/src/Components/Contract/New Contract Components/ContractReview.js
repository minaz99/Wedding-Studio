import React from "react";
import { motion } from "framer-motion";
import ContractDetailsReview from "./ContractDetailsReview";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
function ContractReview(props) {
  let total = props.total - props.discount;

  const albumCrystal = props.packageDetails.albumcrystal
    ? ", Album Crystal"
    : "";
  const magazineMini = props.packageDetails.magazinemini
    ? ", Magazine Mini"
    : "";
  const video = props.packageDetails.video ? ", Video" : "";
  const openPhotoAndVideo = props.packageDetails.openphotoandvideo
    ? ", Open Photo and Video"
    : "";
  const studio = props.packageDetails.studio ? "Studio" : "";
  let packageDetails =
    Object.keys(props.packageDetails).length > 0
      ? `Magazine ${props.packageDetails.magazinename},
${props.packageDetails.pictures} pictures${albumCrystal}${magazineMini}${video}${openPhotoAndVideo}${studio}`
      : "";
  return (
    <motion.div
      initial={{ opacity: 0.25, x: -75, y: 0, scale: 1 }} //x:200 ,x:0
      animate={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
      }}
      transition={{ duration: 1 }}
      className="rounded-md bg-white mx-auto  p-4"
    >
      <div className="flex items-center space-x-4">
        <ArrowLeftCircleIcon
          height={22}
          width={22}
          color="gray"
          className="cursor-pointer"
          onClick={() => props.setActiveView("packages")}
        />

        <div className="font-extrabold text-xl ">Contract Review</div>
      </div>
      <div className="flex space-x-6  ">
        <div className="space-y-4">
          <ContractDetailsReview
            brideName={props.brideName}
            groomName={props.groomName}
            secondPartyName={props.secondPartyName}
            eventType={props.eventType}
            eventLocation={props.eventLocation}
            eventDate={props.eventDate}
            civilID={props.civilID}
            phone1={props.phone1}
            phone2={props.phone2}
            paidAmount={props.paidAmount}
          />
          <div className="items-center flex space-x-2 shadow-md p-2 bg-gray-100  rounded-md">
            <div className="font-medium space-x-2 p-1 ">Created By</div>

            <textarea
              value={props.createdBy}
              className=" rounded-md items-center  "
              placeholder="Created by"
              onChange={(e) => props.setCreatedBy(e.target.value)}
            />
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-white overflow-y-scroll h-72 p-6 shadow-md  space-y-3 rounded-md">
            <div>
              <div className="font-medium text-black">
                {props.packageName} - {props.packagePrice}
              </div>
              <div className="p-2 text-gray-400">{packageDetails}</div>
            </div>
            {props.componentsSelected.map((c) => {
              return (
                <div className="font-medium text-black">
                  {c.compName} - {c.compPrice}
                </div>
              );
            })}

            <div className="flex">
              <div className="flex-1"></div>
              <div>
                <div className="font-medium text-gray-600 ">
                  Price: {props.total}
                </div>
                <div className="font-medium text-gray-600 ">
                  Discount: -{props.discount}
                </div>
                <div className="font-medium text-gray-600 ">Total: {total}</div>
              </div>
            </div>
          </div>
          <div className=" shadow-md p-2 bg-gray-100 space-y-2 rounded-md">
            <div className="font-medium text-xl">Comments</div>

            <textarea
              value={props.comments}
              className="w-full  p-1  rounded-md "
              placeholder="Add a comment"
              style={{ outline: "none", border: "none" }}
              onChange={(e) => props.setComments(e.target.value)}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ContractReview;
