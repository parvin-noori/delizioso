import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, decreaseCart } from "@/features/cartSlice";
import { FaTrash } from "react-icons/fa";

export default function Cart({ showCart, setShowCart }) {
  const drawerRef = useRef(null);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setShowCart(false);
      }
    };

    if (showCart) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCart]);

  function handleAddFood(product) {
    dispatch(addToCart(product));
    // console.log(product.cartQuantity)
  }
  function handleDecreaseFood(product) {
    dispatch(decreaseCart(product));
  }

  function handleRemoveFood(product) {
    dispatch(removeFromCart(product));
  }

  return (
    <div
      ref={drawerRef}
      className={`bg-white fixed right-0 min-w-80 top-0 bottom-0 z-50 ${
        showCart ? "translate-x-0" : "translate-x-full"
      }  transform transition-transform duration-700`}
    >
      {cart.cartItems.length === 0 ? (
        <span>cart is empty</span>
      ) : (
        <ul className="">
          {cart.cartItems.map((item,index) => (
            <li
              key={item.id}
              className={`p-3 flex items-center gap-3 ${
                cart.cartItems.length - 1 !== index ? "shadow-sm" : ""
              }`}
            >
              <img src={item.img} alt={item.title} className="size-28" />
              <div className="flex flex-col gap-3 flex-grow">
                <span className="font-semibold">{item.title}</span>
                <div className="flex items-center justify-between">
                  <span className="text-primaryOrange ">${item.price}</span>
                  <div className="flex gap-3 items-center justify-around ms-auto">
                    {item.cartQuantity > 1 ? (
                      <button
                        onClick={() => handleDecreaseFood(item)}
                        className="bg-primaryOrange text-white text-xl rounded-full size-9 flex items-center justify-center"
                      >
                        -
                      </button>
                    ) : (
                      <button
                        onClick={() => handleRemoveFood(item)}
                        className="bg-primaryOrange text-white text-sm  rounded-full size-9 flex items-center justify-center"
                      >
                        <FaTrash />
                      </button>
                    )}

                    <span>{item.cartQuantity}</span>
                    <button
                      onClick={() => handleAddFood(item)}
                      className="bg-primaryOrange rounded-full text-xl text-white flex items-center justify-center size-9"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
