import React from "react";
import { motion } from "framer-motion";
function ContractReview() {
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
      className="rounded-md bg-white mx-auto p-4"
    >
      <div className="font-extrabold text-xl">Contract Review</div>
    </motion.div>
  );
}

export default ContractReview;
