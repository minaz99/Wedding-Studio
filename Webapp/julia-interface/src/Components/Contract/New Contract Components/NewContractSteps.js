import React from "react";
import { motion } from "framer-motion";
function NewContractSteps(props) {
  return (
    <div>
      <div className="flex justify-between space-x-3">
        <div
          className="rounded-md h-2 w-52 "
          style={{ background: props.contractDetailsColor }}
        >
          <div>
            <motion.div
              initial={{ opacity: 0.25, x: props.xi, y: 0, scale: 1 }} //x:200 ,x:0
              animate={{
                opacity: 1,
                y: 0,
                x: props.xf,
                scale: 1,
              }}
              transition={{ duration: 1 }}
              className="h-2 w-52 rounded-md bg-blue-500 "
            ></motion.div>
          </div>
          <div className="font-medium text-gray-400">Step 1</div>
          <div className="text-white text-lg">Contract details</div>
        </div>
        <div>
          <div
            className="rounded-md h-2 w-52 "
            style={{ background: props.packagesColor }}
          ></div>
          <div className="font-medium text-gray-400">Step 2</div>
          <div className="text-white text-lg">Packages</div>
        </div>
        <div>
          <div
            className="h-2 w-52 rounded-md"
            style={{ background: props.contractReviewColor }}
          ></div>
          <div className="font-medium text-gray-400">Step 3</div>
          <div className="text-white text-lg">Contract review</div>
        </div>
      </div>
    </div>
  );
}

export default NewContractSteps;
