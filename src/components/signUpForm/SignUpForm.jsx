import { Input } from "../input";
import { CheckboxWrapper } from "../checkboxWrapper";
import { Link } from "react-router-dom";

export default function SignUpForm() {
  return (
    <form id="signUpForm">
      <div className="space-y-8">
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
          className="bg-primaryOrange text-white rounded-md p-2 w-full"
        >
          Sign up
        </button>
      </div>
    </form>
  );
}
