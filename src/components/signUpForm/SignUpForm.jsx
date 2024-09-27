import { Input } from "../input";
import { CheckboxWrapper } from "../checkbox-wrapper";
import { Link } from "react-router-dom";

export default function SignUpForm() {
  return (
    <form id="signUpForm" className="h-full">
      <div className="space-y-8 h-full flex flex-col">
        <Input type="text" placeholder="Full name" />
        <Input type="email" placeholder="Email address" />
        <Input type="password" placeholder="Password" />
        <div className="flex text-sm justify-between items-center">
          <CheckboxWrapper />
          <Link className="capitalize " to="/">
            forget password?
          </Link>
        </div>
        <button
          type="submit"
          className="bg-primaryOrange text-white rounded-md p-4 w-full md:!mt-8 !mt-auto"
        >
          Sign up
        </button>
      </div>
    </form>
  );
}
