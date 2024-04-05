import { useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { AuthContext } from "@/context/AuthContext";
import { NotificationContext } from "@/context/NotificationContext";
import { Router } from "@/routes";
import { useCookies } from "./hooks/useCookies";

function App() {
  const {cvalue,setCookie,removeCookie} = useCookies("auth")

  const [notifications, setNotifications] = useState<string[]>([]);

  const addNotification = (message: string) => {
    setNotifications([...notifications, message]);
  };
  return (
    <AuthContext.Provider value={{ token:cvalue, setToken:setCookie,deleteToken:removeCookie }}>
      <NotificationContext.Provider value={{ notifications, addNotification }}>
        <Router/>
      </NotificationContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
