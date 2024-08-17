import React, { useRef, useEffect } from "react";

export default function Cart({ showCart, setShowCart }) {

  const drawerRef = useRef(null);

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

  return (
    <div
      ref={drawerRef}
      className={`bg-white fixed right-0 min-w-80 top-0 bottom-0 z-50 ${
        showCart ? "translate-x-0" : "translate-x-full"
      }  transform transition-transform duration-700`}
    >
      Cart
    </div>
  );
}
