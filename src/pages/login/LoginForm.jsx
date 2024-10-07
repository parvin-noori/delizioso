import { Input } from "@/components/input";
import { CheckboxWrapper } from "@/components/checkbox-wrapper";
import { Link } from "react-router-dom";
import { useState } from "react";
import { API_URL_USER } from "@/config";

export default function LoginForm() {
  const [userInfo, setUserInfo] = useState({});

  const handleChange = (e) => {
    const id = e.target.id;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setUserInfo((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${API_URL_USER}/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });

    const responseJson = await response.json();
    localStorage.setItem("token", responseJson.accessToken);
  };
  return (
    <form id="signUpForm" className="h-full" onSubmit={handleSubmit}>
      <div className="space-y-8 h-full flex flex-col">
        <Input
          type="email"
          placeholder="Email address"
          id="email"
          onChange={handleChange}
        />
        <Input
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
        />
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
          login
        </button>
      </div>
    </form>
  );
}
