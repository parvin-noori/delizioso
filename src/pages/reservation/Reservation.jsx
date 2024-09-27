import { Input } from "@/components/input";

export default function Reservation() {
  return (
    <div className="flex h-svh w-svw items-center justify-center bg-gray-400">
      <div className="grid lg:grid-cols-12 items-center  w-full h-full bg-white">
        <div className="xl:col-span-6 col-span-7 hidden lg:flex h-full justify-start overflow-hidden  items-center relative"></div>
        <div className="lg:justify-start lg:h-auto h-full py-10 lg:py-0 justify-center flex xl:col-span-6 lg:col-span-5">
          <div className="flex flex-col  xl:w-4/6 w-5/6">
            <form id="signUpForm" className="h-full">
              <div className="space-y-8 h-full flex flex-col">
                <Input type="date" placeholder="Date" />
                <Input type="date" placeholder="time" />
                <Input type="number" placeholder="Party size" />

                <button
                  type="submit"
                  className="bg-primaryOrange text-white rounded-md p-4 w-full md:!mt-8 !mt-auto"
                >
                  book now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
