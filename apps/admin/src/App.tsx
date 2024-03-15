import { useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { AuthContext } from "@/context/AuthContext";
import { NotificationContext } from "@/context/NotificationContext";
import { Router } from "@/routes";

function App() {
  const [token, setToken] = useLocalStorage("token");
  const [notifications, setNotifications] = useState<string[]>([]);

  const addNotification = (message: string) => {
    setNotifications([...notifications, message]);
  };
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <NotificationContext.Provider value={{ notifications, addNotification }}>
        <Router/>
      </NotificationContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
