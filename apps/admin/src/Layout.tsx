import { useContext, ReactNode, useEffect } from "react";
import { Sidebar } from "@/components/Sidebar";
import { AuthContext } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate()
  useEffect(() => {
    if (token) {
      navigate("/profile")
    }
  }, [token])
  
  return (
    <div className="layout ">
      {token && <Sidebar />}
      <main className="h-screen">{children}</main>
    </div>
  );
};
