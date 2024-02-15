"use client";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { StartSteps, TitleText, TypingText } from "../components";
import { startingFeatures } from "../constants";
import getStarted from "/public/assets/get-started.png";
import Image from "next/image";
const GetStarted = () => (
  <section className="relative z-10 paddings">
    <motion.div
      variants={staggerContainer("staggerChildren", "delayChildren")}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8"
    >
      <motion.div
        variants={planetVariants("left")}
        className="flex justify-center items-center flex-1"
      >
        <Image
          src={getStarted}
          alt={"Get Started"}
          className="w-[90%] h-[90%] object-contain"
          priority
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title={"| How Metaverus Works"} textStyles={""} />
        <TitleText
          title={"Get started with just a few clicks"}
          textStyles={""}
        />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((item, index) => (
            <StartSteps key={index} number={index + 1} text={item} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
