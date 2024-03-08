import { HTMLAttributes, useRef, useState } from "react";
import "./sidebar.css";
import { Typography, TypographySize } from "../Typography";
type SidebarItem = {
  path: string;
  name: string;
  Icon: () => JSX.Element;
};

type SidebarItemProps = SidebarItem & { isActive?: boolean };
type SidebarItemNativeProps = HTMLAttributes<HTMLLIElement>;

export const LogoutIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="36px"
      viewBox="0 96 960 960"
      fill="var(--icon-color)"
    >
      <path d="M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h291v60H180v600h291v60H180Zm486-185-43-43 102-102H375v-60h348L621 444l43-43 176 176-174 174Z" />
    </svg>
  );
};

export const ProjectsIcon = () => {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 7.00013H15V12.0001H9V7.00013ZM10.5 8.50013V10.5001H13.5V8.50013H10.5Z"
          fill="var(--icon-color)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18 4.00024H6V6.00016H4V7.50016H6V11.0112H4V12.5112H6V16.0223H4V17.5223H6V20.0002H18V4.00024ZM7.5 5.50024V18.5002H16.5V5.50024H7.5Z"
          fill="var(--icon-color)"
        />
      </g>
    </svg>
  );
};

export const HomeIcon = () => {
  return (
    <svg
      viewBox="-2 0 21 21"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <title>home [#1392]</title> <desc>Created with Sketch.</desc>{" "}
        <defs> </defs>
        <g
          id="Page-1"
          stroke="none"
          strokeWidth={1}
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="Dribbble-Light-Preview"
            transform="translate(-381.000000, -720.000000)"
            fill="var(--icon-color)"
          >
            <g id="icons" transform="translate(56.000000, 160.000000)">
              <path
                d="M339.875,578.013 L336.6875,578.013 L336.6875,574.013 L330.3125,574.013 L330.3125,578.013 L327.125,578.013 L327.125,568.799 L333.489375,562.809 L339.875,568.819 L339.875,578.013 Z M341.94475,568.013 L333.47025,560 L325,567.999 L325,580.013 L332.4375,580.013 L332.4375,576.013 L334.5625,576.013 L334.5625,580.013 L342,580.013 L342,579.983 L342,568.013 L341.94475,568.013 Z"
                id="home-[#1392]"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export const MessageIcon = () => {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <path
          d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
          stroke="var(--icon-color)"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x={3}
          y={5}
          width={18}
          height={14}
          rx={2}
          stroke="var(--icon-color)"
          strokeWidth={2}
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export const LabelIcon = () => {
  return (
    <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <path
          d="M4.97879 4.63551C4.97887 4.63462 4.97895 4.63373 4.97903 4.63284C4.97992 4.63276 4.98081 4.63267 4.9817 4.63259C5.43849 4.59036 6.07532 4.54622 6.79718 4.51753C8.25652 4.45955 9.99036 4.46795 11.2768 4.65973C11.3353 4.66845 11.4111 4.70095 11.4872 4.77708L19.2406 12.5304C19.4358 12.7257 19.4358 13.0423 19.2406 13.2375L13.5837 18.8944C13.3884 19.0897 13.0719 19.0897 12.8766 18.8944L5.12325 11.141C5.04711 11.0649 5.01462 10.9891 5.0059 10.9306C4.81412 9.6442 4.80573 7.91035 4.86373 6.451C4.89241 5.72913 4.93656 5.0923 4.97879 4.63551Z"
          stroke="var(--icon-color)"
          strokeWidth={2}
          strokeLinecap="round"
        />{" "}
        <circle
          cx="9.4346"
          cy="9.17334"
          r={1}
          transform="rotate(-45 9.4346 9.17334)"
          fill="var(--icon-color)"
        />
      </g>
    </svg>
  );
};
export const ProfileIcon = () => {
  return (
    <svg
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="var(--icon-color)"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <g
          id="Page-1"
          stroke="none"
          strokeWidth={1}
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="Dribbble-Light-Preview"
            transform="translate(-140.000000, -2159.000000)"
            fill="var(--icon-color)"
          >
            <g id="icons" transform="translate(56.000000, 160.000000)">
              <path
                d="M100.562548,2016.99998 L87.4381713,2016.99998 C86.7317804,2016.99998 86.2101535,2016.30298 86.4765813,2015.66198 C87.7127655,2012.69798 90.6169306,2010.99998 93.9998492,2010.99998 C97.3837885,2010.99998 100.287954,2012.69798 101.524138,2015.66198 C101.790566,2016.30298 101.268939,2016.99998 100.562548,2016.99998 M89.9166645,2004.99998 C89.9166645,2002.79398 91.7489936,2000.99998 93.9998492,2000.99998 C96.2517256,2000.99998 98.0830339,2002.79398 98.0830339,2004.99998 C98.0830339,2007.20598 96.2517256,2008.99998 93.9998492,2008.99998 C91.7489936,2008.99998 89.9166645,2007.20598 89.9166645,2004.99998 M103.955674,2016.63598 C103.213556,2013.27698 100.892265,2010.79798 97.837022,2009.67298 C99.4560048,2008.39598 100.400241,2006.33098 100.053171,2004.06998 C99.6509769,2001.44698 97.4235996,1999.34798 94.7348224,1999.04198 C91.0232075,1998.61898 87.8750721,2001.44898 87.8750721,2004.99998 C87.8750721,2006.88998 88.7692896,2008.57398 90.1636971,2009.67298 C87.1074334,2010.79798 84.7871636,2013.27698 84.044024,2016.63598 C83.7745338,2017.85698 84.7789973,2018.99998 86.0539717,2018.99998 L101.945727,2018.99998 C103.221722,2018.99998 104.226185,2017.85698 103.955674,2016.63598"
                id="profile_round-[#1342]"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

const items: SidebarItem[] = [
  {
    path: "/profile",
    name: "Profile",
    Icon: ProfileIcon,
  },
  {
    path: "/projects",
    name: "Projects",
    Icon: ProjectsIcon,
  },
  {
    path: "/contact",
    name: "Contact",
    Icon: MessageIcon,
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
  const sidebarRef = useRef<HTMLElement>(null)
  const handleToggleMenu = () => {
    sidebarRef.current.classList.toggle("sidebar--open")
  }
  return (
    <>
      <button className="sidebar-button" onClick={handleToggleMenu}>Abrir</button>
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
