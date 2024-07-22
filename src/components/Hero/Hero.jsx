import React from "react";
import ItanlianPasta from "../../assets/imgs/italian-pasta.png";
import Lettuce from "../../assets/imgs/Lettuce.png";
import { motion } from "framer-motion";

export const slideUp = (delay) => {
  return {
    hidden: {
      y: "100%",
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: delay,
      },
    },
  };
};
export default function Hero() {
  return (
    <section className="lg:py-20 py-5 overflow-x-hidden">
      <div className="grid container lg:grid-cols-2 items-center lg:gap-20 space-y-32 lg:space-y-0 justify-center">
        {/* text section  */}
        <div className="space-y-5 capitalize text-xl">
          <motion.span
            variants={slideUp(0.5)}
            initial="hidden"
            whileInView="show"
            className=" bg-orange-100 text-primaryOrange  py-2 px-8 rounded-full"
          >
            resturant
          </motion.span>
          <motion.h2
            variants={slideUp(1)}
            initial="hidden"
            whileInView="show"
            className="text-[80px] font-semibold text-balance leading-[90px]"
          >
            italian <br /> cuisine
          </motion.h2>
          <motion.p
            variants={slideUp(1.5)}
            initial="hidden"
            whileInView="show"
            className=" text-brown/70 leading-10 lg:text-xl tracking-wider"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
            senectus dictum arcu sit tristique donec eget.
          </motion.p>
          <motion.div
            className="flex items-center gap-5"
            variants={slideUp(2)}
            initial="hidden"
            whileInView="show"
          >
            <button className="btn-primary mt-11 bg-primaryOrange md:py-5 md:px-20 font-normal text-nowrap">
              order now
            </button>
            <button className="btn-primary mt-11 md:py-5 md:px-20 font-normal">
              reservation
            </button>
          </motion.div>
        </div>
        {/* img secion  */}
        <div className="relative  max-w-[350px] sm:max-w-[500px] m-auto lg:max-w-full">
          <motion.img
            initial={{ opacity: 0, rotate: 20, x: 200, y: 100 }}
            whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
            transition={{ duration: 0.8 }}
            src={ItanlianPasta}
            alt=""
            className="relative z-10  aspect-square"
          />
          <motion.img
            initial={{ opacity: 0, rotate: 120, x: 200, y: 100 }}
            whileInView={{ opacity: 1, rotate: 200, x: 0, y: 0 }}
            transition={{ duration: 0.8 }}
            src={Lettuce}
            alt=""
            className="absolute -top-14 rotate-[200deg] -left-9 sm:-left-16 sm:-top-18 xxl:-left-20 xl:-left-16 xxl:-top-18 xl:-top-14  z-0 size-52 sm:size-64 lg:size-max"
          />
          <motion.img
            initial={{ opacity: 0, rotate: 120, x: 200, y: 100 }}
            whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
            transition={{ duration: 0.8 }}
            src={Lettuce}
            alt=""
            className="absolute bottom-4 -right-4 sm:-right-11 sm:bottom-10 lg:-right-4 z-0  size-52 sm:size-64 lg:size-max"
          />
        </div>
      </div>
    </section>
  );
}
