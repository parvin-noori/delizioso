import { motion } from "framer-motion";
import { slideUp } from "../Banner/Banner";
import ReserveImg from "../../assets/imgs/reserve.png";
import CircleImg from "../cirecleImg/CircleImg";

export default function Reservation() {
  return (
    <section className=" lg:py-64 py-5 bg-orange-50 overflow-x-hidden">
      <div className=" grid lg:grid-cols-2 items-center xl:gap-72 lg:gap-44 space-y-36  lg:space-y-0 justify-center">
        {/* img secion  */}

        <div className="relative m-auto order-last  lg:order-first mt-16 lg:mt-0">
          <div className="xl:size-[880px] lg:size-[680px] md:size-[500px] sm:size-[400px] size-[300px] rounded-full bg-transparent border border-black/20 aspect-square relative lg:-translate-x-[100px] ">
            <CircleImg
              src={ReserveImg}
              containerClasses="size-9/12 !transform translate-x-1/2 -translate-y-1/2 top-1/2 right-1/2"
            />
            <CircleImg
              src={ReserveImg}
              containerClasses="size-2/12 top-0 lg:right-32 right-16"
            />
            <CircleImg
              src={ReserveImg}
              containerClasses="size-2/12 bottom-0 lg:left-32 left-16"
            />
          </div>
        </div>
        {/* text section  */}
        <div className="space-y-16 capitalize text-xl order-first lg:order-last  lg:max-w-lg md:max-w-4xl  max-w-xl">
          <motion.h2
            variants={slideUp(0.5)}
            initial="hidden"
            whileInView="show"
            className="lg:text-[80px] text-6xl font-semibold text-balance font-tinos leading-[90px]"
          >
            let's reserve <span className="text-primaryOrange">a table</span>
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
            reservation
          </motion.button>
        </div>
      </div>
    </section>
  );
}
