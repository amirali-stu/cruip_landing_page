import React from "react";
import { motion } from "framer-motion";

function AdvancedControlsBox({ icon: Icon, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="space-y-2 max-w-[324px] mx-auto"
    >
      <div>
        <Icon className="text-3xl text-indigo-500" />
      </div>
      <h2 className="text-[#C8D3FF] ">{title}</h2>
      <p className="text-[#8B8FA7]">{desc}</p>
    </motion.div>
  );
}

export default AdvancedControlsBox;
