import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

function TailoredWorkflowsBox({ image, title, desc }) {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="p-5 border-2 rounded-2xl bg-gray-800 bg-opacity-30 border-gray-800 backdrop-blur-sm shadow-lg sm:max-w-[382px] max-w-[220px] mx-auto lg:mx-0 relative group">
        <div className="ml-[270px] w-8 h-8 flex-center bg-gray-800 text-[#666684] rounded-full bg-opacity-70 backdrop-blur-sm border border-gray-800 duration-300 opacity-0 group-hover:opacity-100">
          <FaArrowRight size={12} />
        </div>
        <div>
          <img src={image} alt="/" width={350} height={288} />
        </div>
        <div className="bg-[#1B2141] p-3 rounded-full h-[23px] justify-center items-center inline-flex">
          <p className="text-transparent bg-clip-text text-sm bg-gradient-to-r from-indigo-500 to-indigo-200 relative">
            {title}
          </p>
        </div>
        <p className="max-w-[355px] text-[#666684] font-medium mt-2">{desc}</p>
      </div>
    </motion.a>
  );
}

export default TailoredWorkflowsBox;
