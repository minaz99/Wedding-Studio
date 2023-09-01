import React from "react";
import { useGetPackageByIDQuery } from "../../../services/api/packageSlice";

function ContractPackages(props) {
  const { data, isLoading, isError, isSuccess } = useGetPackageByIDQuery(
    { token: props.token, id: props.id },
    {
      refetchOnMountOrArgChange: true,
    }
  );
  return (
    <div className="flex space-x-2 items-center">
      <div className="text-gray-800">Package</div>
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
            {!data ? (
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
    </div>
  );
}

export default ContractPackages;
