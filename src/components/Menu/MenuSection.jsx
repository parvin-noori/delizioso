import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { MenuItem } from "../MenuItem";
import usePaginatedFetch from "@/usePaginatedFetch";
import { PaginationSection } from "../Pagination";
import { API_URL, supabase } from "@/config";
import _ from "lodash";

export default function MenuSection({ sectionTitle }) {
  const [categories, setCategories] = useState([]);
  const menuRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const url = `${API_URL}/products`;
  // const urlSupa = async () => {

  // };
  // console.log(url);
  const pageSize = 6; // Number of items per page
  const [loading, data] = usePaginatedFetch(url, pageSize);
  const [page, setPage] = useState(1);

  const [foods, setFoods] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFoods(data.flat() || []); // Flatten the paginated data
  }, [loading, data]);

  useEffect(() => {
    const getProduct = async () => {
      let { data: products, error } = await supabase
        .from("products")
        .select("*");
      console.log(products);
    };
    getProduct();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      let { data: products, error } = await supabase
        .from("products")
        .select("category");

      const uniqueCategories = [
        ...new Set(products.map((product) => product.category)),
      ];
      setCategories(uniqueCategories);
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (category) => {
    console.log(category)
    setActiveCategory(category);
    setPage(1); // Reset to the first page when changing category
  };

  // Filter the foods based on the active category
  const filterFoods =
    activeCategory === "all"
      ? foods
      : foods.filter((food) => food.category === activeCategory);

  // Calculate total pages based on filtered data and page size
  const totalItems = filterFoods.length;
  const filterPageCount = Math.ceil(totalItems / pageSize);

  // Paginate the filtered items
  const pageinatedFilterFoods = _.chunk(filterFoods, pageSize);

  // console.log("Total items:", totalItems);
  // console.log("Filter page count:", filterPageCount);
  // console.log("Current page foods:", pageinatedFilterFoods[page - 1]);

  return (
    <section className="md:py-42 py-10">
      <div className="container grid grid-cols-1 md:space-y-24 space-y-10">
        <span className="md:text-[80px] text-4xl text-center font-bold font-tinos capitalize">
          {sectionTitle}
        </span>
        <ul
          ref={menuRef}
          className="category-menu flex items-center justify-between flex-nowrap overflow-x-auto gap-3"
        >
          <li>
            <a
              className={`${
                activeCategory === "all" ? "bg-brown text-white" : "bg-gray-100"
              } md:py-6 md:text-lg text-base md:px-16 px-6 py-3 rounded-full capitalize text-nowrap block cursor-pointer`}
              onClick={() => handleCategoryClick("all")}
            >
              all category
            </a>
          </li>
          {categories.map((category, index) => (
            <li key={index}>
              <a
                className={`${
                  activeCategory === category
                    ? "bg-brown text-white"
                    : "bg-gray-100"
                } md:py-6 md:text-lg md:px-16 px-6 py-3 rounded-full capitalize text-nowrap block cursor-pointer`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
        {loading ? (
          <span>Loading...</span>
        ) : filterFoods.length > 0 ? (
          <>
            <div className="menu grid lg:grid-cols-3 grid-cols-2 sm:gap-10 gap-3">
              {pageinatedFilterFoods[page - 1]?.map((food, index) => (
                <MenuItem key={food.id} food={food} index={index} />
              ))}
            </div>

            <div className="flex m-auto md:py-10">
              <PaginationSection
                menuRef={menuRef}
                activePage={page}
                setPage={setPage}
                pages={filterPageCount} // Pass the correct number of pages
              />
            </div>
          </>
        ) : (
          <p className="text-center">No items found</p>
        )}
      </div>
    </section>
  );
}
