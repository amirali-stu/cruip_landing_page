import React from "react";
import AdvancedControlsBox from "./AdvancedControlsBox";
import image from "/images/advanced controls sec/features.png";
import { IoMdChatboxes } from "react-icons/io";
import { MdFingerprint } from "react-icons/md";
import { HiOutlineSignal } from "react-icons/hi2";
import { SiTicktick } from "react-icons/si";
import { FaMapLocationDot } from "react-icons/fa6";
import { AiFillFire } from "react-icons/ai";
import { motion } from "framer-motion";

function AdvancedControls() {
  const AdvancedControlsBoxData = [
    {
      id: 1,
      icon: IoMdChatboxes,
      title: "Project Milestones",
      desc: "Track progress across custom flows for your team. Find the right balance for the user, privacy and security.",
    },
    {
      id: 2,
      icon: MdFingerprint,
      title: "Team Views",
      desc: "Track progress across custom flows for your team. Find the right balance for the user, privacy and security.",
    },
    {
      id: 3,
      icon: HiOutlineSignal,
      title: "Advanced Search",
      desc: "Track progress across custom flows for your team. Find the right balance for the user, privacy and security.",
    },
    {
      id: 4,
      icon: SiTicktick,
      title: "Strategic Initiatives",
      desc: "Track progress across custom flows for your team. Find the right balance for the user, privacy and security.",
    },
    {
      id: 5,
      icon: FaMapLocationDot,
      title: "Flexible Workflows",
      desc: "Track progress across custom flows for your team. Find the right balance for the user, privacy and security.",
    },
    {
      id: 6,
      icon: AiFillFire,
      title: "Unified Timeline",
      desc: "Track progress across custom flows for your team. Find the right balance for the user, privacy and security.",
    },
  ];

  return (
    <section className="w-full px-4 md:py-20 py-10 sm:px-6 flex items-center justify-center ">
      <div className="max-w-[1104px] w-full border-gradient-top">
        <div className="flex-center w-full space-y-4 mt-20">
          <motion.span
            id="text-effect"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-200 relative"
          >
            Advanced Controls
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-[#C8D3FF] text-4xl md:text-5xl font-semibold text-center"
          >
            Built for modern product teams
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-[#8B8FA7] text-xl font-medium text-center max-w-[888px]"
          >
            Open AI reads and understands your files, and with nothing more than
            a single line of feedback, so you can go further than the speed of
            thought.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex justify-center pb-4 md:pb-12"
          >
            <img
              alt="Features"
              loading="lazy"
              width="1104"
              height="384"
              className="!w-[1104px] "
              src={image}
            />
          </motion.div>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-20 gap-y-10 mx-auto pt-5">
          {AdvancedControlsBoxData.map((box) => (
            <>
              <AdvancedControlsBox key={box.id} {...box} />
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdvancedControls;
