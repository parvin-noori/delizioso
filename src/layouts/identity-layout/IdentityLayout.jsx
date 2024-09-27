import { Outlet } from "react-router-dom";
import { ImgCol } from "@/components/imgCol";

export default function IdentityLayout() {
  return (
    <div className="flex h-svh w-svw items-center justify-center bg-gray-400">
      <div className="grid lg:grid-cols-2 items-center  w-full h-full bg-white">
        <Outlet />
        <ImgCol />
      </div>
    </div>
  );
}
