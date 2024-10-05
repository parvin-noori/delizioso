import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, decreaseCart } from "@/features/cartSlice";
// import { FaTrash } from "react-icons/fa";

export default function MenuItem({ food, index }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  function handleAddFood(product) {
    dispatch(addToCart(product));
  }
  function handleDecreaseFood(product) {
    dispatch(decreaseCart(product));
    console.log(cartItem.cartQuantity);
  }

  function handleRemoveFood(product) {
    dispatch(removeFromCart(product));
  }
  const cartItem = cart.cartItems.find((item) => item.id === food.id);

  return (
    <div className="foodCard group bg-gray-50 p-4  md:hover:text-black md:hover:bg-gray-50 md:hover:shadow-sm duration-200 md:p-8 rounded-[40px] md:rounded-[80px] text-center sm:space-y-6 space-y-3">
      <img
        src={food.img}
        alt={food.title}
        className="m-auto size-84 aspect-square md:group-hover:scale-110 md:group-hover:rotate-12 drop-shadow-lg duration-700"
      />
      <span className="lg:text-4xl md:text-3xl text-xl font-semibold line-clamp-1">
        {food.title}
      </span>
      <p className="leading-8 line-clamp-2 lg:line-clamp-3">{food.desc}</p>
      <div className="flex items-center justify-between">
        <span className="md:text-2xl font-semibold text-primaryOrange md:text-black">
          ${food.price}
        </span>
        <div className="sm:w-36 flex items-center justify-around">
          {cartItem ? (
            <div className="flex sm:gap-3 gap-2 items-center justify-around">
              {cartItem.cartQuantity > 1 ? (
                <button
                  type="button"
                  onClick={() => handleDecreaseFood(food)}
                  className="bg-primaryOrange   text-white sm:text-2xl rounded-full sm:size-10 size-8 flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="size-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 12h14"
                    />
                  </svg>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => handleRemoveFood(food)}
                  className="bg-primaryOrange text-white sm:text-md text-xs  rounded-full sm:size-10 size-8 flex items-center justify-center"
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

              <span>{cartItem.cartQuantity}</span>
              <button
                type="button"
                onClick={() => handleAddFood(food)}
                className="bg-primaryOrange   rounded-full sm:text-2xl text-white flex items-center justify-center sm:size-10 size-8"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="size-4 "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => handleAddFood(food)}
              className="text-white  md:hover:scale-110 duration-200 bg-primaryOrange  rounded-full sm:py-4 sm:w-full size-8 sm:size-auto flex items-center justify-center"
            >
              <span className="hidden sm:block">order now</span>
              <span className="block sm:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="size-4 "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
