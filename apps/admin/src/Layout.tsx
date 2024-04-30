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
    <div className="h-screen w-full overflow-hidden flex">
      <div></div>
      {token && <Sidebar />}

      <main className="overflow-y-auto overflow-x-hidden w-full scrollbar--native">
        <div className="page-container w-full h-full max-w-5xl pl-12 mr-auto ">{children}</div>
      </main>
    </div>
  );
};
