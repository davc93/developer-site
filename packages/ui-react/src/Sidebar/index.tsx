import { HTMLAttributes, useState } from "react";

type SidebarItem = {
  path: string;
  name: string;
  Icon: () => JSX.Element;
};

type SidebarItemProps = SidebarItem & { isActive: boolean };
type SidebarItemNativeProps = HTMLAttributes<HTMLLIElement>;

export const HomeIcon = () => {
  return (
    <svg
      viewBox="-2 0 21 21"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        {" "}
        <title>home [#1392]</title> <desc>Created with Sketch.</desc>{" "}
        <defs> </defs>{" "}
        <g
          id="Page-1"
          stroke="none"
          strokeWidth={1}
          fill="none"
          fillRule="evenodd"
        >
          {" "}
          <g
            id="Dribbble-Light-Preview"
            transform="translate(-381.000000, -720.000000)"
            fill="#000000"
          >
            {" "}
            <g id="icons" transform="translate(56.000000, 160.000000)">
              {" "}
              <path
                d="M339.875,578.013 L336.6875,578.013 L336.6875,574.013 L330.3125,574.013 L330.3125,578.013 L327.125,578.013 L327.125,568.799 L333.489375,562.809 L339.875,568.819 L339.875,578.013 Z M341.94475,568.013 L333.47025,560 L325,567.999 L325,580.013 L332.4375,580.013 L332.4375,576.013 L334.5625,576.013 L334.5625,580.013 L342,580.013 L342,579.983 L342,568.013 L341.94475,568.013 Z"
                id="home-[#1392]"
              >
                {" "}
              </path>{" "}
            </g>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );
};

const items: SidebarItem[] = [
  {
    path: "/projects",
    name: "Projects",
    Icon: HomeIcon,
  },
  {
    path: "/contact",
    name: "Contacto",
    Icon: HomeIcon,
  },
  {
    path: "/labels",
    name: "Labels",
    Icon: HomeIcon,
  },
];

export const Sidebar = () => {
  const [itemActive, setItemActive] = useState("");
  const handleButtonClick = (item: string) => {
    setItemActive(itemActive !== item ? item : itemActive);
  };
  return (
    <aside className="sidebar">
      <ul>
        {items.map((item) => (
          <SidebarItem
            isActive={itemActive == item.name}
            onClick={() => handleButtonClick(item.name)}
            {...item}
          />
        ))}
      </ul>
    </aside>
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
    <li
      className={["sidebar-item", isActive ? "active" : ""].join(" ")}
      {...props}
    >
      <button>
        <div className="sidebar-item__icon">
          <Icon />
        </div>
        <span className="sidebar-item__name">{name}</span>
      </button>
    </li>
  );
};
