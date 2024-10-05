import React, { useRef, useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  decreaseCart,
  clearCart,
} from "@/features/cartSlice";
// import { FaTrash } from "react-icons/fa";
// import { RiCloseLargeLine } from "react-icons/ri";
import emptyCart from "../../assets/imgs/emptyCart.svg";
import { getTotal } from "@/features/cartSlice";

export default function Cart({ showCart, setShowCart }) {
  const drawerRef = useRef(null);
  const cart = useSelector((state) => state.cart);
  const { cartTotalQuantity, cartItems } = cart;
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(getTotal());
  }, [dispatch, cartItems]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setShowCart(false);
      }
    };

    if (showCart) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
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

  function handleClearCart(product) {
    dispatch(clearCart());
  }

  return (
    <div
      ref={drawerRef}
      className={`bg-white fixed right-0 min-w-80 top-0 flex flex-col bottom-0 z-50 h-full ${
        showCart ? "translate-x-0 visible" : "translate-x-full"
      }  transform transition-transform duration-700`}
    >
      <div className="cart-header flex items-center justify-between p-4 shadow-lg">
        <div className="flex items-center gap-3">
          <span>my cart</span>
          {cart.cartItems.length > 0 && (
            <>
              <span className="text-sm">{cartTotalQuantity} items</span>
              <button
                className="text-sm bg-gray-100 p-2 rounded-full text-gray-500"
                onClick={handleClearCart}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            </>
          )}
        </div>

        <button type="btn" className="p-3">
          <svg
            onClick={() => setShowCart(false)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      {cart.cartItems.length === 0 ? (
        <div className="h-full items-center justify-center flex-col flex">
          <img src={emptyCart} className="size-52" />
          <span className="font-semibold">your cart is empty :( </span>
        </div>
      ) : (
        <>
          <div className="cart-body  overflow-y-auto flex-grow">
            <ul className="">
              {cart.cartItems.map((item, index) => (
                <li
                  key={item.id}
                  className={`p-3 flex items-center gap-3 ${
                    cart.cartItems.length - 1 !== index ? "shadow-sm" : ""
                  }`}
                >
                  <img src={item.img} alt={item.title} className="size-20" />
                  <div className="flex flex-col gap-3 flex-grow">
                    <span className="line-clamp-2">{item.title}</span>
                    <div className="flex items-center justify-between">
                      <span className="text-primaryOrange ">${item.price}</span>
                      <div className="flex gap-4 items-center justify-around ms-auto">
                        {item.cartQuantity > 1 ? (
                          <button
                            onClick={() => handleDecreaseFood(item)}
                            className="bg-primaryOrange text-white text-xl rounded-full size-9 flex items-center justify-center"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              className="size-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 12h14"
                              />
                            </svg>
                          </button>
                        ) : (
                          <button
                            onClick={() => handleRemoveFood(item)}
                            className="bg-primaryOrange text-white text-sm  rounded-full size-9 flex items-center justify-center"
                          >
                            {/* <FaTrash /> */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                              />
                            </svg>
                          </button>
                        )}

                        <span className="text-xl">{item.cartQuantity}</span>
                        <button
                          onClick={() => handleAddFood(item)}
                          className="bg-primaryOrange opacity-100 rounded-full text-xl text-white flex items-center justify-center size-9"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="size-4 "
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 4.5v15m7.5-7.5h-15"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="cartFooter p-2 border border-t-1 border-gray flex flex-col">
            <button className="btn-primary relative">
              continue{" "}
              <span className="bg-black/30 px-2 py-1 rounded-full absolute right-2 top-1/2 transform -translate-y-1/2">
                ${cart.cartTotalAmout.toFixed(3)}
              </span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
