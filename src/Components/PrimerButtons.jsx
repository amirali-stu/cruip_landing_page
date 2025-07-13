import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

function PrimerButtons() {
  return (
    <div className="mx-auto max-w-xs flex flex-col sm:flex-row sm:max-w-none sm:justify-center gap-x-3 gap-y-4 w-full">
      <motion.button
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-sm h-[44px] w-[100%] sm:w-[136px] text-[#FEFEFF] font-bold bg-[#5950FC] rounded-lg border-[0.5px] border-[#313C4E] flex items-center gap-x-2 justify-center group"
      >
        Start Building
        <FaArrowRight className="text-gray-200/50 delay-100 transition-all group-hover:translate-x-1" />
      </motion.button>
      <motion.button
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut", stiffness: 200 }}
        whileHover={{
          rotate: [0, 5, -5, 5, -5, 0],
          transition: { duration: 0.4 },
        }}
        whileTap={{ scale: 0.95 }}
        className="text-sm h-[44px]  w-[100%] sm:w-[136px] text-[#AFB4BD] font-bold flex-center bg-[#1C2635] rounded-lg border-[0.5px] border-[#313C4E]"
      >
        Schedule Demo
      </motion.button>
    </div>
  );
}

export default PrimerButtons;
