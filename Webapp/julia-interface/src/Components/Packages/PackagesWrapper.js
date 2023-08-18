import React, { useState } from "react";
import { motion } from "framer-motion";

import Packages from "./Package/Packages";

import Compnts from "./Compnt/Compnts";
function PackagesWrapper(props) {
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
      <Compnts role={props.role} token={props.token} type="Magazine" />
      <Compnts role={props.role} token={props.token} type="Album" />
      <Compnts role={props.role} token={props.token} type="Video" />
      <Compnts role={props.role} token={props.token} type="Pictures" />
      <Compnts role={props.role} token={props.token} type="Frame" />
      <Packages role={props.role} token={props.token} />
    </motion.div>
  );
}

export default PackagesWrapper;
