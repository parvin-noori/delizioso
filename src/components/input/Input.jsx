import React from "react";

export default function Input(props) {
  const { type, placeholder } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      autoComplete="new-password"
      className="bg-neutral-50 w-full py-3 px-8 rounded-md placeholder:text-sm"
    />
  );
}
