import React from "react";
import heroPoster from "/images/videos poster/image.webp";
import neonGlow from "/images/lights/neon-glow-hero_section.svg";
import { motion } from "framer-motion";

import PrimerButtons from "./PrimerButtons";

function Hero() {
  return (
    <>
      <div className="absolute -z-10 right-52 top-10">
        <img src={neonGlow} alt="" />
      </div>
      <section className="w-full px-4 py-20 sm:px-6 flex items-center justify-center">
        <div className="max-w-[1104px] w-full">
          <div className="w-full flex-center relative">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-[#C8D3FF] text-4xl md:text-5xl font-semibold text-center mb-5"
            >
              AI-driven tools for product teams
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-[#8B8FA7] text-xl font-medium text-center mb-8 max-w-[768px]"
            >
              Our landing page template works on all devices, so you only have
              to set it up once, and get beautiful results forever.
            </motion.p>
            <PrimerButtons />
          </div>
          <div className="mt-20 overflow-hidden rounded-3xl">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              src={heroPoster}
              alt="/"
              width={1104}
              height={576}
              className="opacity-50 rounded-3xl w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
