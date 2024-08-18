import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MdOutlineShoppingCart } from "react-icons/md";
import { TbLayoutGridAdd } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { animate, motion } from "framer-motion";
import Cart from "../cart/Cart";
import { useEffect, useLayoutEffect, useState } from "react";
import Overlay from "../Overlay";
import { useDispatch, useSelector } from "react-redux";
import { getTotal } from "@/features/cartSlice";

const MainMenu = [
  {
    id: 1,
    title: "home",
    path: "/",
    delay: "0.1",
  },
  {
    id: 2,
    title: "menu",
    path: "/menu",
    delay: "0.2",
  },
  {
    id: 3,
    title: "about us",
    path: "/aboutUs",
    delay: "0.3",
  },
  {
    id: 4,
    title: "order online",
    path: "/orderOnline",
    delay: "0.4",
  },
  {
    id: 5,
    title: "reservation",
    path: "/reservation",
    delay: "0.5",
  },
  {
    id: 6,
    title: "contact us",
    path: "/contactUs",
    delay: "0.6",
  },
];

const slideDown = (delay) => {
  return {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: delay,
      },
    },
  };
};

export default function Header() {
  const [showCart, setShowCart] = useState(false);

  const { cartTotalQuantity, cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(getTotal());
  }, [dispatch, cartItems]);



  return (
    <header className="header py-10">
      <div className="container">
        <div className="grid lg:grid-cols-6 grid-cols-2 items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <NavLink to="/" className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="https://github.com/sdf.png" />
                <AvatarFallback>D</AvatarFallback>
              </Avatar>
              <h1 className="capitalize font-semibold">
                delizi<span className="text-primaryOrange">oso</span>
              </h1>
            </NavLink>
          </motion.div>
          <div className="col-span-4 lg:block hidden">
            <ul className="flex items-center  justify-around">
              {MainMenu.map((item) => (
                <motion.li
                  variants={slideDown(item.delay)}
                  initial="initial"
                  animate="animate"
                  key={item.id}
                  className="capitalize"
                  data-delay={item.delay}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-primaryOrange"
                        : "hover:text-primaryOrange"
                    }
                  >
                    {item.title}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className=" flex items-center lg:gap-5 gap-2 justify-end">
            <motion.button
              className="size-12 aspect-square flex items-center justify-center bg-gray-50 rounded-full relative"
              variants={slideDown(0.7)}
              initial="initial"
              animate="animate"
              onClick={() => setShowCart(true)}
            >
              <span className="badge bg-red-500 text-white size-4 flex items-center justify-center rounded-full text-[10px] absolute right-1 top-1">
                {cartTotalQuantity}
              </span>
              <MdOutlineShoppingCart className="text-xl" />
            </motion.button>
            <motion.button
              className="btn-primary hidden lg:block text-nowrap"
              variants={slideDown(0.8)}
              initial="initial"
              animate="animate"
            >
              log in
            </motion.button>
            <motion.button
              className="lg:hidden size-12 flex items-center justify-center rounded-full text-xl"
              variants={slideDown(0.8)}
              initial="initial"
              animate="animate"
            >
              <TbLayoutGridAdd />
            </motion.button>
          </div>
        </div>
      </div>

      <Cart showCart={showCart} setShowCart={setShowCart} />
      {showCart && <Overlay />}
    </header>
  );
}
