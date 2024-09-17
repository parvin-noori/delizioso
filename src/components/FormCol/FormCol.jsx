import React from "react";
import { Link } from "react-router-dom";
import { Input } from "../input";
import { CheckboxWrapper } from "../checkboxWrapper";

export default function FormCol() {
  return (
    <div className="flex flex-col p-16">
      <span className="text-4xl font-semibold mb-4">sign up</span>
      <p className="mb-10">
        don't have an account?{" "}
        <Link to="/login" className="text-blue-500">
          Log in
        </Link>
      </p>
      <form action="">
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
            Log in
          </button>
        </div>
      </form>
    </div>
  );
}
