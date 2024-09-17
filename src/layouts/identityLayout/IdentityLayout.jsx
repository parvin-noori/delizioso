import { FormCol } from "@/components/FormCol";
import { ImgCol } from "@/components/imgCol";

export default function IdentityLayout() {
  return (
    <div className="flex h-100svh w-100svw items-center justify-center bg-gray-400">
      <div className="grid lg:grid-cols-2 xl:w-3/5  sm:w-4/5 w-full h-full bg-white">
        <FormCol />
        <ImgCol />
      </div>
    </div>
  );
}
