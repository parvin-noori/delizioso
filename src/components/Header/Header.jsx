import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MdOutlineShoppingCart } from "react-icons/md";
import { TbLayoutGridAdd } from "react-icons/tb";

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

export default function Header() {
  return (
    <header className="header py-10">
      <div className="container">
        <div className="grid lg:grid-cols-6 grid-cols-2 items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="https://github.com/sdf.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1 className="capitalize font-semibold">
              delizi<span className="text-primaryOrange">oso</span>
            </h1>
          </div>
          <div className="col-span-4 lg:block hidden">
            <ul className="flex items-center  justify-around">
              {MainMenu.map((item) => (
                <li key={item.id} className="capitalize">
                  <a href={item.path} className="hover:text-primaryOrange">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className=" flex items-center lg:gap-5 gap-2 justify-end">
            <button className="size-12 aspect-square flex items-center justify-center bg-gray-50 rounded-full relative">
              <span className="badge bg-red-500 text-white size-5 flex items-center justify-center rounded-full text-xs absolute -right-1 -top-1">
                3
              </span>
              <MdOutlineShoppingCart className="text-xl" />
            </button>
            <button className="btn-primary hidden lg:block text-nowrap">log in</button>
            <button className="lg:hidden size-12 flex items-center justify-center rounded-full text-xl">
              <TbLayoutGridAdd />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
