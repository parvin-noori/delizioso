import italianSalad from "../../assets/imgs/italian-salad.png";
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

export default function Banner() {
  return (
    <section className=" lg:py-20 py-5 bg-green-50 overflow-hidden">
      <div className="container grid lg:grid-cols-2 items-center lg:gap-20 space-y-36 lg:space-y-0 justify-center">
        {/* img secion  */}
        <div className="relative  max-w-[350px] sm:max-w-[500px] m-auto lg:max-w-full order-last lg:order-first mt-16 lg:mt-0">
          <motion.img
            initial={{ opacity: 0, rotate: 20, x: -200, y: 100 }}
            whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
            transition={{ duration: 0.8 }}
            src={italianSalad}
            alt=""
            className="relative z-10  aspect-square"
          />
        </div>
        {/* text section  */}
        <div className="space-y-16 capitalize text-xl order-first lg:order-last">
          <motion.h2
            variants={slideUp(0.5)}
            initial="hidden"
            whileInView="show"
            className="text-[80px] font-semibold text-balance leading-[90px]"
          >
            Welcome to <span className="text-primaryOrange">delizioso</span>
          </motion.h2>
          <motion.p
            variants={slideUp(1)}
            initial="hidden"
            whileInView="show"
            className=" text-brown/70 leading-10 lg:text-xl tracking-wider"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            ultricies at eleifend proin. Congue nibh nulla malesuada ultricies
            nec quam
          </motion.p>

          <motion.button
            variants={slideUp(1.5)}
            initial="hidden"
            whileInView="show"
            className="btn-primary mt-12  bg-primaryOrange md:py-5 md:px-20 font-normal text-nowrap"
          >
            see our menu
          </motion.button>
        </div>
      </div>
    </section>
  );
}
