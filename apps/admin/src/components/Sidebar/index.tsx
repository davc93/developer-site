import "ui-react/src/Sidebar/sidebar.css";
import { HTMLAttributes, useContext, useRef, useState } from "react";
import { IconNotebook } from "ui-react/src/icons/icon-notebook";
import { IconLetter } from "ui-react/src/icons/icon-letter";
import { IconProfile } from "ui-react/src/icons/icon-profile";
import { IconLabel } from "ui-react/src/icons/icon-label";
import { IconLogout } from "ui-react/src/icons/icon-logout";
import { IconMonitor } from "ui-react/src/icons/icon-monitor";
import { AuthContext } from "@/context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
type SidebarItem = {
  path: string;
  name: string;
  Icon: () => JSX.Element;
};

type SidebarItemProps = SidebarItem & { isActive?: boolean };
type SidebarItemNativeProps = HTMLAttributes<HTMLLIElement>;

const items: SidebarItem[] = [
  
  {
    path: "/dashboard",
    name: "Dashboard",
    Icon: IconMonitor,
  },
  {
    path: "/profile",
    name: "Profile",
    Icon: IconProfile,
  },
  {
    path: "/projects",
    name: "Projects",
    Icon: IconNotebook,
  },
  {
    path: "/contact",
    name: "Contact",
    Icon: IconLetter,
  },
  {
    path: "/labels",
    name: "Labels",
    Icon: IconLabel,
  },
];

export const LogoutButton = () => {
  const { deleteToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const logout = () => {
    try {
      deleteToken();
      navigate("/login");
      // mostrar un pequeno mensaje
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <li onClick={logout}>
      <button className={["sidebar-item"].join(" ")}>
        <div className="sidebar-item__icon">
          <IconLogout />
        </div>
        <span className="sidebar-item__name">Logout</span>
      </button>
    </li>
  );
};

export const Sidebar = () => {
  const [itemActive, setItemActive] = useState("Dashboard");
  const handleButtonClick = (item: string) => {
    setItemActive(itemActive !== item ? item : itemActive);
  };
  const sidebarRef = useRef<HTMLElement>(null);
  const handleToggleMenu = () => {
    sidebarRef.current?.classList.toggle("sidebar--open");
  };
  return (
    <>
      {/* <button className="sidebar-button" onClick={handleToggleMenu}>
        Abrir
      </button> */}
      <aside ref={sidebarRef} className="sidebar sidebar--open">
        <div className="sidebar__header hidden"></div>
        <ul className="sidebar__body scrollbar--vertical">
          {items.map((item) => (
            <SidebarItem
              isActive={itemActive == item.name}
              onClick={() => handleButtonClick(item.name)}
              {...item}
            />
          ))}
        </ul>

        <ul className="sidebar__bottom">
            <LogoutButton />
          </ul>
      </aside>
    </>
  );
};

const SidebarItem = ({
  Icon,
  name,
  path,
  isActive,
  ...props
}: SidebarItemProps & SidebarItemNativeProps) => {
  return (
    <li {...props}>
      <Link
        to={path}
        className={[
          "sidebar-item",
          isActive ? "sidebar-item--active" : "",
        ].join(" ")}
      >
        <div className="sidebar-item__icon">
          <Icon />
        </div>
        <span className="sidebar-item__name">{name}</span>
      </Link>
    </li>
  );
};
