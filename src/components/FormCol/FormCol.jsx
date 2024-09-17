import React from "react";
import { Link } from "react-router-dom";
import { SignUpForm } from "@/components/signUpForm";
import { LoginForm } from "../loginForm";

export default function FormCol(props) {
  const { formType } = props;
  return (
    <div className="flex flex-col p-16">
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
  );
}
