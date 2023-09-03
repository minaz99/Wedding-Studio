import {
  MinusCircleIcon,
  PencilSquareIcon,
  PlusCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import ContractPackages from "./ContractPackages";
import ContractComponents from "./ContractComponents";
import PackageDelete from "./PackageDelete";
import ComponentDelete from "./ComponentDelete";
import AddComponentsWrapper from "./AddComponentsWrapper";

function EditContractPackages(props) {
  const [addComps, setAddComps] = useState(false);
  return (
    <div className="space-y-3">
      <PackageDelete
        token={props.token}
        id={props.packageID}
        contractID={props.contractID}
        setPkgID={props.setPkgID}
      />
      <ComponentDelete
        setCompsIDs={props.setCompsIDs}
        token={props.token}
        compsIDs={props.compsIDs}
        contractID={props.contractID}
      />
      {addComps ? (
        <AddComponentsWrapper
          setCompsIDs={props.setCompsIDs}
          token={props.token}
          contractID={props.contractID}
          compsIDs={props.compsIDs}
          price={props.price}
        />
      ) : (
        <div></div>
      )}
      <div className="flex space-x-2 flex-1">
        <div className="text-gray-500">Total</div>
        <input
          value={props.price}
          style={{
            background: "#94a3b8",
            borderRadius: "6px",
            border: "none",
            color: "#475569",
            padding: "3px 3px 3px 3px",
            outline: "none",
          }}
          className="font-medium "
          onChange={(e) => props.setPrice(e.target.value)}
        />
      </div>
      <React.Fragment>
        {addComps ? (
          <div className="flex justify-center mx-auto">
            <PlusCircleIcon
              height={24}
              width={24}
              color="#475569"
              className="cursor-pointer"
              onClick={() => setAddComps(true)}
            />
          </div>
        ) : (
          <div className="flex justify-center mx-auto">
            <MinusCircleIcon
              height={24}
              width={24}
              color="#475569"
              className="cursor-pointer"
              onClick={() => setAddComps(false)}
            />
          </div>
        )}
      </React.Fragment>
    </div>
  );
}

export default EditContractPackages;
