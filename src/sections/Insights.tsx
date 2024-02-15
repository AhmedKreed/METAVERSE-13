"use client";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { InsightCard, TitleText, TypingText } from "../components";
import { insights } from "../constants";

const Insights = () => (
  <section className="relative z-10 paddings">
    <div className="gradient-02_01 z-[-1] left-[-200px] top-[-250px] rotate-[-78.79deg] rounded-full " />
    <div className="gradient-02_02 z-[-1] left-[-200px] top-[-90px] rotate-[-78.79deg] rounded-full" />
    <div className="gradient-02_03 z-[-1] left-[-200px] top-[50px] rotate-[-78.79deg] rounded-full" />
    <div className="gradient-02_04 z-[-1] left-[-200px] top-[197px] rotate-[-78.79deg] rounded-full" />
    <motion.div
      variants={staggerContainer("staggerChildren", "delayChildren")}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="2xl:max-w-[1280px] w-full mx-auto flex flex-col "
    >
      <TypingText title={"| Insight"} textStyles={"text-center"} />
      <TitleText title={"Insight about metaverse"} textStyles={"text-center"} />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((item, index) => (
          <InsightCard index={index + 1} key={item.title} {...item} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
