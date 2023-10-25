import React from "react";
import { useGetPackagesQuery } from "../../../services/api/packageSlice";
import PackageRowWrapper from "../../Packages/Package/PackageRowWrapper";

function GetPackages(props) {
  const { data, isLoading, isError, isSuccess } = useGetPackagesQuery(
    { token: props.token },
    {
      refetchOnMountOrArgChange: true,
    }
  );
  return isLoading ? (
    <div className="text-center text-blue-400 text-xl p-4">Loading</div>
  ) : isError ? (
    <div className="text-center text-red-400 text-xl p-4">
      Error loading components
    </div>
  ) : isSuccess ? (
    data.packages.map((pkg) => {
      return (
        <PackageRowWrapper
          token={props.token}
          editPackage={props.editPackage}
          deletePackage={props.deletePackage}
          id={pkg.id}
          name={pkg.name}
          pictures={pkg.pictures}
          size={pkg.magazinename}
          albumCrystal={pkg.albumcrystal}
          magazineMini={pkg.magazinemini}
          video={pkg.video}
          openPV={pkg.openphotoandvideo}
          studio={pkg.studio}
          price={pkg.price}
          role={props.role}
        />
      );
    })
  ) : (
    <div></div>
  );
}

export default GetPackages;
