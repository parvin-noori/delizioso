import { motion } from "framer-motion";
import { slideUp } from "../Banner/Banner";

export const slideDown = (delay) => {
  return {
    hidden: {
      y: 0,
      opacity: 1,
    },
    show: {
      y: "100%",
      opacity: 0,
      transition: {
        duration: 0.6,
        delay: delay,
      },
    },
  };
};

export default function MenuItem({ food, index }) {
  return (
    <motion.div
      variants={slideUp(index * 0.1)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="foodCard group bg-gray-50 p-4 hover:shadow-sm duration-200 md:p-8 rounded-[40px] md:rounded-[80px] text-center sm:space-y-6 space-y-3"
    >
      <img
        src={food.img}
        alt={food.title}
        className="m-auto size-84 aspect-square group-hover:scale-110 group-hover:rotate-12 drop-shadow-lg duration-700"
      />
      <span className="lg:text-4xl md:text-3xl text-xl font-semibold line-clamp-1">
        {food.title}
      </span>
      <p className="leading-8 line-clamp-2 lg:line-clamp-3">{food.desc}</p>
      <div className="flex items-center justify-around ">
        <span className="md:text-2xl font-semibold text-primaryOrange md:text-black">
          ${food.price}
        </span>
        <button className="text-white hover:scale-110 duration-200 bg-primaryOrange rounded-full sm:py-4 sm:px-10 size-7 sm:size-auto flex items-center justify-center">
          <span className="hidden sm:block">order now</span>
          <span className="block sm:hidden">+</span>
        </button>
      </div>
    </motion.div>
  );
}
