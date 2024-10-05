import { Link } from "react-router-dom";
import  SignUpForm  from "@/pages/signUp/SignUpForm";
import  LoginForm  from "@/pages/login/LoginForm";

export default function FormCol(props) {
  const { formType } = props;
  return (
    <div className="lg:justify-end lg:h-auto h-full py-10 lg:py-0 justify-center flex xl:col-span-6 lg:col-span-5">
      <div className="flex flex-col  xl:w-4/6 w-5/6">
        <span className="text-4xl font-semibold mb-4">
          {formType === "signup" ? "Sign up" : "Login"}
        </span>
        <p className="mb-10">
          don't have an account?{" "}
          <Link
            to={formType === "signup" ? "/login" : "/signup"}
            className="text-blue-500"
          >
            {formType === "signup" ? " Log in" : " Sign up"}
          </Link>
        </p>
        {formType === "signup" ? <SignUpForm /> : <LoginForm />}
      </div>
    </div>
  );
}
