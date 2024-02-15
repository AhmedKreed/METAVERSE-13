"use client";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import Image from "next/image";
const NavBar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="py-8 relative padding-X"
    >
      <div className="absolute w-[50%] h-[93px] gradient-01 inset-0" />
      <div className="absolute w-[408px] h-[197px] top-[-188.15px] left-[50%]  bg-[#CFECFD] blur-[100px] rounded-full" />
      <div className="flex justify-between items-center">
        <Image
          src={"/assets/search.svg"}
          alt={"Search"}
          width={24}
          height={24}
          className="object-contain"
        />
        <h1 className=" font-extrabold text-[24px] leading-[30px] text-white">
          METAVERSUS
        </h1>
        <Image
          src={"/assets/menu.svg"}
          alt={"Menu"}
          width={24}
          height={24}
          className="object-contain"
        />
      </div>
    </motion.nav>
  );
};

export default NavBar;
