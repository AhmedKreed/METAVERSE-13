"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TypingText } from "../components";
const About = () => (
  <section className="paddings relative z-10">
    <div className="gradient-02_01 z-[-1] top-[-250px] rotate-[-78.79deg] rounded-full " />
    <div className="gradient-02_02 z-[-1] top-[-90px] rotate-[-78.79deg] rounded-full" />
    <div className="gradient-02_03 z-[-1] top-[50px] rotate-[-78.79deg] rounded-full" />
    <div className="gradient-02_04 z-[-1] top-[197px] rotate-[-78.79deg] rounded-full" />
    <motion.div
      variants={staggerContainer("staggerChildren", "delayChildren")}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="2xl:max-w-[1280px] w-full mx-auto flex justify-center items-center flex-col"
    >
      <TypingText title={"| About Metaverus"} textStyles={"text-center"} />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Metaverse</span> is a new
        thing in the future, where you can enjoy the virtual world by feeling
        like it&apos;s really real, you can feel what you feel in this metaverse
        world, because this is really the{" "}
        <span className="font-extrabold text-white">
          madness of the metaverse
        </span>{" "}
        of today, using only{" "}
        <span className="font-extrabold text-white">VR</span> devices you can
        easily explore the metaverse world you want, turn your dreams into
        reality. Let&apos;s{" "}
        <span className="font-extrabold text-white">explore</span> the madness
        of the metaverse by scrolling down
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/assets/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
