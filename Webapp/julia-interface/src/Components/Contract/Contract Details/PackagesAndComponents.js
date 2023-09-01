import React from "react";
import ContractPackages from "./ContractPackages";
import ContractComponents from "./ContractComponents";
import { useGetPackageByIDQuery } from "../../../services/api/packageSlice";

function PackagesAndComponents(props) {
  const { data, isLoading, isError, isSuccess } = useGetPackageByIDQuery(
    { token: props.token, id: props.packageID },
    {
      refetchOnMountOrArgChange: true,
    }
  );
  return (
    <div className="space-y-3">
      <div className="space-y-3">
        <div className="bg-blue-200 rounded-md  p-1 shadow-md">
          {isLoading ? (
            <div className="text-center text-blue-400 text-xl p-4">
              Loading...
            </div>
          ) : isError ? (
            <div className="text-center text-red-400 text-xl p-4">
              Error loading packages
            </div>
          ) : isSuccess ? (
            <div>
              {data.package === null ? (
                <div></div>
              ) : (
                <div>
                  <div className="font-medium">{data.package.name}</div>
                  <div className="text-gray-600 p-1 flex space-x-8">
                    <li>{data.package.pictures} Pictures</li>
                    <li>Magazine {data.package.magazinename}</li>
                    <li>{data.package.albumcrystal ? "Album Crystal" : ""}</li>
                    <li>{data.package.magazinemini ? "Mini Magazine" : ""}</li>
                    <li>{data.package.video ? "Video" : ""}</li>
                    <li>
                      {data.package.openphotoandvideo
                        ? "Open Photo and Video"
                        : ""}
                    </li>
                    <li>{data.package.studio ? "Studio" : ""}</li>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div></div>
          )}
        </div>

        <div className="flex space-x-6 items-center">
          <div className="text-gray-800">Add ons</div>
          <ContractComponents token={props.token} compsIDs={props.compsIDs} />
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex">
          <div className="flex-1"></div>
          <div className="space-x-2 flex items-center">
            <div className="font-bold">Price</div>
            <div className="rounded-md bg-blue-100 font-medium h-fit p-1">
              {props.price} KD
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackagesAndComponents;
