import { useContext, ReactNode, useEffect } from "react";
import { Sidebar } from "@/components/Sidebar";
import { AuthContext } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const { token } = useContext(AuthContext);
  
  return (
    <div className="h-screen">
      {token && <Sidebar />}
      {children}
    </div>
  );
};
