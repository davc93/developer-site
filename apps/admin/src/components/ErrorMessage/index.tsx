import React from "react";
import "./style.css";
interface propsWithChildren {
  children: React.ReactNode;
}

export const ErrorMessage = ({ children }: propsWithChildren) => {
  if (children) {
    return <div className="flex justify-center text-error-600 px-5 py-2 border-error-300 border-x border-y w-full">{children}</div>;
  } else {
    return <div className="px-5 py-2 h-10 w-full"></div>;
  }
};
