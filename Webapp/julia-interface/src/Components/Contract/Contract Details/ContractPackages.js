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

      {isLoading ? (
        <div className="text-center text-blue-400 text-xl p-4">Loading</div>
      ) : isError ? (
        <div className="text-center text-red-400 text-xl p-4">
          Error loading packages
        </div>
      ) : isSuccess ? (
        <div>
          {data.package === null ? (
            <div></div>
          ) : (
            <div className="bg-blue-200 rounded-md  p-1 shadow-md">
              <div className="font-medium">{data.package.name}</div>
              <div className="text-gray-600 p-1 flex space-x-8">
                {data.package.magazinename &&
                data.package.magazinename !== "-" ? (
                  <li>Magazine {data.package.magazinename}</li>
                ) : (
                  ""
                )}
                {data.package.pictures ? (
                  <li>{data.package.pictures} pictures</li>
                ) : (
                  ""
                )}
                {data.package.albumcrystal ? <li>Album Crystal</li> : ""}
                {data.package.magazinemini ? <li>Magazine Mini</li> : ""}
                {data.package.video ? <li>Video</li> : ""}
                {data.package.openphotoandvideo ? (
                  <li>Open Photo and Video</li>
                ) : (
                  ""
                )}
                {data.package.studio ? <li>Studio</li> : ""}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default ContractPackages;
