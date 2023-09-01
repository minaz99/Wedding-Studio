import React from "react";
import { useGetPackageByIDQuery } from "../../../services/api/packageSlice";
import { MinusCircleIcon } from "@heroicons/react/24/outline";
import { useUpdateContractMutation } from "../../../services/api/contractSlice";

function PackageDelete(props) {
  const { data, isLoading, isError, isSuccess } = useGetPackageByIDQuery(
    { token: props.token, id: props.id },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const onClickUpdate = async () => {
    await updateContract({
      token: props.token,
      id: props.contractID,
      body: { packageID: "0" },
    });
    props.setPkgID("0");
  };
  const [updateContract, result] = useUpdateContractMutation();
  return (
    <div className="flex space-x-2 items-center">
      {result.isSuccess ? (
        <div></div>
      ) : (
        <div className="space-x-3 flex items-center">
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
                      <li>
                        {data.package.albumcrystal ? "Album Crystal" : ""}
                      </li>
                      <li>
                        {data.package.magazinemini ? "Mini Magazine" : ""}
                      </li>
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
          <MinusCircleIcon
            height={26}
            width={26}
            color="#475569"
            className="cursor-pointer"
            onClick={() => onClickUpdate()}
          />
        </div>
      )}
    </div>
  );
}

export default PackageDelete;
