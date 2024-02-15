"use client";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TitleText, TypingText } from "../components";
import Image from "next/image";
import map from "@/public/assets/map.png";
import people01 from "@/public/assets/people-01.png";
import people02 from "@/public/assets/people-02.png";
import people03 from "@/public/assets/people-03.png";
const World = () => (
  <section className="relative z-10 paddings">
    <div className="gradient-02_01 z-[-1] top-[-250px] rotate-[-78.79deg] rounded-full " />
    <div className="gradient-02_02 z-[-1] top-[-90px] rotate-[-78.79deg] rounded-full" />
    <div className="gradient-02_03 z-[-1] top-[-50px] rotate-[-78.79deg] rounded-full" />
    <div className="gradient-02_04 z-[-1] top-[-197px] rotate-[-78.79deg] rounded-full" />
    <motion.div
      variants={staggerContainer("staggerChildren", "delayChildren")}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="2xl:max-w-[1280px] w-full mx-auto flex flex-col "
    >
      <TypingText title={"| People on the World"} textStyles={"text-center"} />
      <TitleText
        title={
          "Track friends around you and invite them to play together in the same world"
        }
        textStyles={"text-center"}
      />
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px] max-sm:hidden"
      >
        <Image src={map} alt={"map"} className="w-full h-full " />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680] people_01-shadow ">
          <Image src={people01} alt="people" className="w-full h-full" />
          <div className="arrow-down mx-auto" />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680] people_02-shadow ">
          <Image src={people02} alt="people" className="w-full h-full" />
          <div className="arrow-down mx-auto" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680] people_03-shadow ">
          <Image src={people03} alt="people" className="w-full h-full" />
          <div className="arrow-down mx-auto" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
