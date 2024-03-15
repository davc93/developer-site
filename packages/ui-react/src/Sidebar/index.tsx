import "./sidebar.css";
import { HTMLAttributes, useRef, useState } from "react";
import { Typography, TypographySize } from "../Typography";
import { NotebookIcon } from "../Icons/NotebookIcon";
import { LetterIcon } from "../Icons/LetterIcon";
import { ProfileIcon } from "../Icons/ProfileIcon";
import { LabelIcon } from "../Icons/LabelIcon";
import { LogoutIcon } from "../Icons/LogoutIcon";
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
      <button className="sidebar-button" onClick={handleToggleMenu}>
        Abrir
      </button>
      <aside ref={sidebarRef} className="sidebar">
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
            <SidebarItem name="Logout" path="/" Icon={LogoutIcon} />
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
