import "ui-react/src/Sidebar/sidebar.css";
import { HTMLAttributes, useContext, useRef, useState } from "react";
import { Typography, TypographySize } from "ui-react";
import { NotebookIcon } from "ui-react/src/Icons/NotebookIcon";
import { LetterIcon } from "ui-react/src/Icons/LetterIcon";
import { ProfileIcon } from "ui-react/src/Icons/ProfileIcon";
import { LabelIcon } from "ui-react/src/Icons/LabelIcon";
import { LogoutIcon } from "ui-react/src/Icons/LogoutIcon";
import { AuthContext } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
type SidebarItem = {
  path: string;
  name: string;
  Icon: () => JSX.Element;
};

type SidebarItemProps = SidebarItem & { isActive?: boolean };
type SidebarItemNativeProps = HTMLAttributes<HTMLLIElement>;

const items: SidebarItem[] = [
  {
    path: "/profile",
    name: "Profile",
    Icon: ProfileIcon,
  },
  {
    path: "/projects",
    name: "Projects",
    Icon: NotebookIcon,
  },
  {
    path: "/contact",
    name: "Contact",
    Icon: LetterIcon,
  },
  {
    path: "/labels",
    name: "Labels",
    Icon: LabelIcon,
  },
];

export const LogoutButton = () => {
  const {deleteToken} = useContext(AuthContext)
  const navigate = useNavigate()
  const logout = () => {
    try {
      deleteToken()
      navigate("/login")
      // mostrar un pequeno mensaje

    } catch (error) {
      console.error(error);
      
    }
  }
  return (
    <li onClick={logout}>
    <button
      className={[
        "sidebar-item",
      ].join(" ")}
    >
      <div className="sidebar-item__icon">
        <LogoutIcon />
      </div>
      <span className="sidebar-item__name">Logout</span>
    </button>
  </li>

  )
}



export const Sidebar = () => {
  const [itemActive, setItemActive] = useState("Profile");
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
        <div className="sidebar__header">
          <Typography
            size={TypographySize.bodyLarge}
            style={{ fontWeight: 700 }}
          >
            Diego Vergara
          </Typography>
        </div>
        <ul className="sidebar__body">
          {items.map((item) => (
            <SidebarItem
              isActive={itemActive == item.name}
              onClick={() => handleButtonClick(item.name)}
              {...item}
            />
          ))}
          <ul className="sidebar__bottom">
            <LogoutButton />
          </ul>
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
      <button
        className={[
          "sidebar-item",
          isActive ? "sidebar-item--active" : "",
        ].join(" ")}
      >
        <div className="sidebar-item__icon">
          <Icon />
        </div>
        <span className="sidebar-item__name">{name}</span>
      </button>
    </li>
  );
};