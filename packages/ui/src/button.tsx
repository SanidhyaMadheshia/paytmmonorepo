"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  // appName: string;
  onClick? : React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button
      className={className}
      // className=""
      // onClick={() => alert(`Hello f  rom your ${appName} app!`)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};