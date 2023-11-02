import React from "react";
import { motion } from "framer-motion";
function Credits() {
  return (
    <motion.div
      initial={{ opacity: 0.25, x: -200, y: 0, scale: 1.2 }} //x:200 ,x:0
      animate={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
      }}
      transition={{ duration: 0.75 }}
      className="rounded-r-lg  space-y-6  p-3 items-center h-full w-11/12 shadow-md overflow-y-scroll  bg-slate-600"
    >
      <div>
        <a
          href="https://www.flaticon.com/free-icons/wedding"
          title="wedding icons"
        >
          Wedding icons created by Vectors Market - Flaticon
        </a>
      </div>
    </motion.div>
  );
}

export default Credits;
