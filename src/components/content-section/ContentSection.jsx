import React from "react";

export default function ContentSection({ children, colWidth, order }) {
  return (
    <div
      className={`lg:col-span-${colWidth} col-span-12 ${
        order === 'inverse' ? "lg:order-1 order-2" : "order-2"
      }`}
    >
      <div className="flex flex-col space-y-8 lg:text-start text-center">
        {children}
      </div>
    </div>
  );
}
