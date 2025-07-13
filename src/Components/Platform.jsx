import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import PrimerButtons from "./PrimerButtons";

function Platform() {
  return (
    <section className="w-full px-4 sm:px-6 flex items-center justify-center ">
      <div className="max-w-[1104px] w-full bg-linear py-12 flex items-center flex-col gap-y-16 bg-gradient-to-r from-transparent via-gray-800/50">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-[#C8D3FF] text-4xl md:text-5xl font-semibold text-center"
        >
          Join the content-first platform
        </motion.h2>

        <PrimerButtons />
      </div>
    </section>
  );
}

export default Platform;
