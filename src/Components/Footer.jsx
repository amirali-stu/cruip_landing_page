import React from "react";
import FooterSubMenu from "./FooterSubMenu";
import FooterSubMenuDatas from "./FooterSubMenuDatas";
import logo from "/images/logo/logo.svg";
import { FaXTwitter, FaSquareInstagram, FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";

function Footer() {
  return (
    <section className="w-full px-4 sm:px-6 flex items-center justify-center ">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-[1104px] w-full py-12 grid lg:grid-cols-4 grid-cols-3"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 lg:col-span-3 col-span-3 mb-5">
          {FooterSubMenuDatas.map((data) => (
            <FooterSubMenu key={data.id} {...data} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex lg:items-end items-start flex-col gap-y-3 lg:col-span-1"
        >
          <img src={logo} alt="logo" />
          <p className="text-indigo-200/65 text-[15px] font-medium">
            © Cruip.com ·{" "}
            <span className=" hover:text-indigo-500 duration-300 ">Terms</span>
          </p>
          <div>
            <ul className="flex items-center gap-x-3">
              <li>
                <a
                  href="#"
                  className="text-indigo-500 duration-300 hover:text-indigo-400"
                >
                  <FaXTwitter size={20} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-indigo-500 duration-300 hover:text-indigo-400"
                >
                  <FaSquareInstagram size={20} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-indigo-500 duration-300 hover:text-indigo-400"
                >
                  <FaGithub size={20} />
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Footer;
