import axios from "axios";
// import ItanlianPasta from "../../assets/imgs/italian-pasta.png";
import { useEffect, useState } from "react";
import MenuItem from "../MenuItem/MenuItem";

export default function MenuSection({sectionTitle}) {
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
         {sectionTitle}
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
            <MenuItem key={food.id} food={food} />
          ))}
        </div>
      </div>
    </section>
  );
}
