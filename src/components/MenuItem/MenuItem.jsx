import { motion } from "framer-motion";
import { slideUp } from "../Banner/Banner";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, decreaseCart } from "@/features/cartSlice";
import { FaTrash } from "react-icons/fa";

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
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  function handleAddFood(product) {
    dispatch(addToCart(product));
  }
  function handleDecreaseFood(product) {
    dispatch(decreaseCart(product));
    console.log(cartItem.cartQuantity)
  }

  function handleRemoveFood(product) {
    dispatch(removeFromCart(product));
  }
  const cartItem = cart.cartItems.find((item) => item.id === food.id);

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
        <div className="sm:w-36 flex items-center justify-around">
          {cartItem ? (
            <div className="flex sm:gap-3 gap-2 items-center justify-around">
              {cartItem.cartQuantity > 1 ? (
                <button
                  onClick={() => handleDecreaseFood(food)}
                  className="bg-primaryOrange text-white sm:text-2xl rounded-full sm:size-10 size-7 flex items-center justify-center"
                >
                  -
                </button>
              ) : (
                <button
                  onClick={() => handleRemoveFood(food)}
                  className="bg-primaryOrange text-white sm:text-md text-xs  rounded-full sm:size-10 size-7 flex items-center justify-center"
                >
                  <FaTrash />
                </button>
              )}

              <span>{cartItem.cartQuantity}</span>
              <button
                onClick={() => handleAddFood(food)}
                className="bg-primaryOrange rounded-full sm:text-2xl text-white flex items-center justify-center sm:size-10 size-7"
              >
                +
              </button>
            </div>
          ) : (
            <button
              onClick={() => handleAddFood(food)}
              className="text-white hover:scale-110 duration-200 bg-primaryOrange rounded-full sm:py-4 sm:w-full size-7 sm:size-auto flex items-center justify-center"
            >
              <span className="hidden sm:block">order now</span>
              <span className="block sm:hidden">+</span>
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
