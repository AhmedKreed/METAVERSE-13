"use client";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { NewFeatures, TitleText, TypingText } from "../components";
import { newFeatures } from "../constants";
import whatNew from "/public/assets/whats-new.png";
import Image from "next/image";
const WhatsNew = () => (
  <section className="relative z-10 paddings">
    <motion.div
      variants={staggerContainer("staggerChildren", "delayChildren")}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8"
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title={"| Whats New?"} textStyles={""} />
        <TitleText title={"What's new about Metaversus?"} textStyles={""} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[10px]">
          {newFeatures.map((item) => (
            <NewFeatures key={item.title} {...item} />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants("right")}
        className="flex justify-center items-center flex-1"
      >
        <Image
          src={whatNew}
          alt={"Get Started"}
          className="w-[90%] h-[90%] object-contain"
          priority
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
