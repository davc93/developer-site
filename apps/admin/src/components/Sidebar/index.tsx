import React, {
  EventHandler,
  MouseEventHandler,
  useContext,
  useRef,
} from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import "./style.css";
import { AuthContext } from "../../context/AuthContext";
import { Typography, TypographySize } from "../Typography";
const routes = [
  {
    path: "/profile",
    name: "Profile",
    onlyPublic: false,
    private: true,
  },
  {
    path: "/projects",
    name: "Projects",

    onlyPublic: false,
    private: true,
    routes: [
      {
        path: "/projects",
        name: "All Projects",
      },

      {
        path: "/projects/create",
        name: "Create Project",
      },
    ],
  },
  {
    path: "/labels",
    name: "Labels",
    routes: [
      {
        path: "/labels",
        name: "All Labels",
      },

      {
        path: "/labels/create",
        name: "Create Label",
      },
    ],
    onlyPublic: false,
    private: true,
  },
];
export const Sidebar = () => {
  const { setToken } = useContext(AuthContext);
  const menu = useRef<HTMLElement>(null);
  const mobileButton = useRef<HTMLElement>(null);
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  function MenuAnimation() {
    return {
      open: () => gsap.to(menu.current, { x: "0", duration: 0.5 }),
      close: () => gsap.to(menu.current, { x: "-100%", duration: 0.5 }),
    };
  }

  const handleLogoutClick = () => {
    setToken(null);
  };

  const menuAnimation = MenuAnimation();
  const handleMenuClick = () => {
    mobileButton.current?.classList.toggle("isOpen");
    

    menu.current?.querySelectorAll(".dropdown-content").forEach((element) => {
      element.classList.add("hidden");
    });
    if (mobileButton.current?.classList.contains("isOpen")) {
      setSidebarOpen(true);
      menuAnimation.open();
    } else {
      setSidebarOpen(false);
      menuAnimation.close();
    }
  };

  const handleDropdown: MouseEventHandler<HTMLElement> = (event) => {
    const target = event.target as any;

    document.querySelectorAll(".dropdown-content").forEach((element) => {
      if (element.id == `${target.id}`.replace("btn", "content")) {
        element.classList.toggle("hidden");
      } else {
        element.classList.add("hidden");
      }
    });
  };
  return (
    <aside role="navigation" className="navbar--mobile">
      <ul className="navbar--mobile__menu" ref={menu as any}>
        {routes.map((route, index) => {
          if (route.routes) {
            return (
              <li
                key={route.name}
                className="dropdown w-full cursor-pointer  relative inline-block"
                style={{ zIndex: 1 }}
              >
                <button
                  id={`dropdown-btn-${index}`}
                  onClick={handleDropdown}
                  className="dropdown-btn w-full text-start py-2 pl-6 pr-2 flex justify-between"
                >
                  <Typography size={TypographySize.bodyLarge}>{route.name}</Typography>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 96 960 960"
                    width="24"
                    fill="var(--white)"
                  >
                    <path d="m375 816-43-43 198-198-198-198 43-43 241 241-241 241Z" />
                  </svg>
                </button>
                {
                  <div
                    id={`dropdown-content-${index}`}
                    className="dropdown-content hidden absolute bg-neutral-900 w-40 m-4 space-y-2 px-2 py-2"
                    style={{
                      zIndex: 3,
                      right: -175,
                      top: -16
                    }}
                  >
                    {route.routes?.map((route) => {
                      return (
                        <Link
                          key={route.path}
                          onClick={handleMenuClick}
                          className="nav-link flex flex-col  px-1"
                          to={route.path}
                        >
                          <Typography size={TypographySize.bodyLarge}>{route.name}</Typography>
                        </Link>
                      );
                    })}
                  </div>
                }
              </li>
            );
          } else {
            return (
              <li className="dropdown w-full cursor-pointer  relative inline-block" key={index}>
                <Link
                  className="dropdown-btn w-full text-start  py-2 pl-6 pr-2 flex justify-between"
                  to={route.path}
                  onClick={handleMenuClick}
                >
                  <Typography size={TypographySize.bodyLarge}>{route.name}</Typography>
                </Link>
              </li>
            );
          }
        })}
        <li className="absolute bottom-5 left-6">
          <button onClick={handleLogoutClick} className="">
            <div className="flex items-center gap-3">

            <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 96 960 960" width="36px" fill="var(--white)"><path d="M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h291v60H180v600h291v60H180Zm486-185-43-43 102-102H375v-60h348L621 444l43-43 176 176-174 174Z"/></svg>
            <Typography size={TypographySize.bodyLarge}>Log out</Typography>
            </div>
          </button>
        </li>
      </ul>
      <button
        type="button"
        className="navbar--mobile__button"
        ref={mobileButton as any}
        onClick={handleMenuClick}
      >
        <span className="line line-1" />
        <span className="line line-2" />
        <span className="line line-3" />
      </button>
      {sidebarOpen && <div className="navbar--mobile__background"></div>}
    </aside>
  );
};
