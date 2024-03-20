import { useContext, ReactNode } from "react";
import { Sidebar } from "ui-react";
import { AuthContext } from "@/context/AuthContext";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const { token } = useContext(AuthContext);
  return (
    <div className="layout ">
      {token && <Sidebar />}
      <main className={`page-content h-screen overflow-y-scroll  bg-dark ${token ? "pt-16 px-5" : ""}`}>{children}</main>
    </div>
  );
};
