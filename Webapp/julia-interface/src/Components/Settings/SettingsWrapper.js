import React from "react";
import { motion } from "framer-motion";
import UserInfo from "./UserInfo";
function SettingsWrapper() {
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
      className="rounded-r-lg  space-y-6  p-3 items-center h-full  shadow-md   bg-slate-600"
    >
      <UserInfo />
    </motion.div>
  );
}

export default SettingsWrapper;
