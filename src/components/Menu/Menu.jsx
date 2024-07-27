import axios from "axios";
// import ItanlianPasta from "../../assets/imgs/italian-pasta.png";
import { useEffect, useState } from "react";

export default function Menu() {
  const categories = [
    {
      id: 1,
      title: "all category",
      path: "/all",
    },
    {
      id: 2,
      title: "dinner",
      path: "/dinner",
    },
    {
      id: 3,
      title: "lunch",
      path: "/lunch",
    },
    {
      id: 4,
      title: "dessert",
      path: "/dessert",
    },
    {
      id: 5,
      title: "drink",
      path: "/drink",
    },
  ];

  const [foods, setFoods] = useState([]);

  useEffect(() => {
    let fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        setFoods(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className="lg:py-48 py-24">
      <div className="container grid grid-cols-1 md:space-y-24 space-y-10">
        <span className="md:text-[80px] text-5xl text-center font-bold font-tinos  capitalize">
          our popular menu
        </span>
        <ul className="category-menu flex items-center justify-between flex-nowrap overflow-x-auto gap-3">
          {categories.map((category) => (
            <li key={category.id}>
              <a className="bg-gray-100 md:py-6 text-lg md:px-16 px-6 py-3 rounded-full capitalize text-nowrap block">
                {category.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="menu grid lg:grid-cols-3 grid-cols-2 sm:gap-10 gap-5">
          {foods.map((food) => (
            <div
              className="foodCard bg-gray-50 p-4 md:p-8 rounded-[40px] md:rounded-[80px] text-center sm:space-y-6 space-y-3"
              key={food.id}
            >
              <img src={food.img} alt={food.title} className="m-auto size-84 aspect-square" />
              <span className="lg:text-4xl md:text-3xl text-xl font-semibold text-nowrap">{food.title}</span>
              <p className="leading-8 line-clamp-2 lg:line-clamp-3">{food.desc}</p>
              <div className="flex items-center justify-around ">
                <span className="text-2xl font-semibold text-primaryOrange md:text-black">${food.price}</span>
                <button className="text-white bg-primaryOrange rounded-full sm:py-4 sm:px-10 size-10 sm:size-auto flex items-center justify-center">
                  <span className="hidden sm:block">order now</span>
                  <span className="block sm:hidden">+</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
