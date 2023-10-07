import React, { useContext, ReactNode } from "react";
import { Sidebar } from "../Sidebar";
import { AuthContext } from "../../context/AuthContext";
import "./style.css";
type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const { token } = useContext(AuthContext);
  return (
    <div className="layout ">
      {token && <Sidebar />}
      <main className={`page-content h-screen bg-dark ${token ? "pt-16" : ""}`}>{children}</main>
    </div>
  );
};
