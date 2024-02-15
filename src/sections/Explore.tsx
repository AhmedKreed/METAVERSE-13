"use client";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { ExploreCard, TitleText, TypingText } from "../components";
import { exploreWorlds } from "../constants";
import { useState } from "react";
const Explore = () => {
  const [active, setActive] = useState("world-2");
  return (
    <section className="paddings relative z-10" id="explore">
      <div className="gradient-02_01 z-[-1] left-[-250px] top-[200px] rotate-[-78.79deg] rounded-full " />
      <div className="gradient-02_02 z-[-1] left-[-250px] top-[400px] rotate-[-78.79deg] rounded-full" />
      <div className="gradient-02_03 z-[-1] left-[-250px] top-[600px] rotate-[-78.79deg] rounded-full" />
      <div className="gradient-02_04 z-[-1] left-[-250px] top-[800px] rotate-[-78.79deg] rounded-full" />
      <motion.div
        variants={staggerContainer("staggerChildren", "delayChildren")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
      >
        <TypingText title={"| The World"} textStyles={"text-center"} />
        <TitleText
          title={
            <>
              Choose the world you want <br className="max-md:hidden" /> to
              explore
            </>
          }
          textStyles={"text-center"}
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map(
            (
              world: { id: string; imgUrl: string; title: string },
              index: number
            ) => (
              <ExploreCard
                index={index}
                handleClick={setActive}
                key={world.id}
                {...world}
                active={active}
              />
            )
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
