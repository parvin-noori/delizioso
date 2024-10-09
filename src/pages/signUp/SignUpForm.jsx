import { Input } from "@/components/input";
import { CheckboxWrapper } from "@/components/checkbox-wrapper";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "@/config";

export default function SignUpForm() {
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const id = e.target.id;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setUserInfo((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const response = await fetch(`${API_URL_USER}/register`, {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(userInfo),
    // });

    // const responseJson = await response.json();
    // localStorage.setItem("token", responseJson.accessToken);
    const { data, error } = await supabase.auth.signUp({
      email: userInfo.email,
      password: userInfo.password,
    });
    error ? console.log(error.message) : navigate("/login");
    e.target.reset();
  };
  return (
    <form id="signUpForm" className="h-full" onSubmit={handleSubmit}>
      <div className="space-y-8 h-full flex flex-col">
        <Input
          type="text"
          placeholder="Full name"
          id="username"
          onChange={handleChange}
        />
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
          <CheckboxWrapper id="remember-me" />
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
