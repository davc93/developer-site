import "./navbar-mobile.css";
import { updateAppSession } from "@/main";
import { goTo } from "@/navigation";
import { deleteCookie } from "@/utils";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { createLink } from "@/components/atoms/Link";
import {
  TypographySize,
  createTypography,
} from "@/components/atoms/Typography";

// reference https://codepen.io/nikkk-me/pen/LYYWexL
export interface NavbarMobileProps {
  logo?: string;
}

export const createNavbarMobile = ({}: NavbarMobileProps) => {
  // Create the main div with class "main"
  const navbarMobile = document.createElement("div");
  navbarMobile.classList.add("navbar-mobile");

  const menuButton = document.createElement("button");
  menuButton.classList.add("navbar-mobile-menu-button");

  const line1 = document.createElement("span");
  line1.classList.add(
    "navbar-mobile-menu-button__line1",
    "navbar-mobile-menu-button__line"
  );
  const line2 = document.createElement("span");
  line2.classList.add(
    "navbar-mobile-menu-button__line2",
    "navbar-mobile-menu-button__line"
  );

  const line3 = document.createElement("span");
  line3.classList.add(
    "navbar-mobile-menu-button__line3",
    "navbar-mobile-menu-button__line"
  );
  menuButton.append(line1, line2,line3);
  menuButton.addEventListener("click", (event) => {
    menuButton.classList.toggle("navbar-mobile-menu-button--open");

    navbarMobile.classList.toggle("navbar-mobile--open");
  });

  // Create the div element with class "item-list"
  const itemList = document.createElement("div");
  itemList.classList.add("navbar-mobile__item-list");

  // Create and append individual divs with text content to the "item-list" div
  const aboutA = createLink({
    href: "/",
    className: "navbar-mobile__item",
    children: createTypography({
      label: "About",
      size: TypographySize.bodyMedium,
    }),
  });
  const portfolioA = createLink({
    href: "/portfolio",
    className: "navbar-mobile__item",

    children: createTypography({
      label: "Portfolio",
      size: TypographySize.bodyMedium,
    }),
  });
  // const services = createLink({href:"/servicios",children:createTypography({label:"Servicios 🇨🇱",size:TypographySize.bodyMedium})})

  const profile = createLink({
    href: "/profile",
    className: "navbar-mobile__item",
    children: createTypography({
      label: "Profile",
      size: TypographySize.bodyMedium,
    }),
  });
  const loginEl = createLink({
    href: "/api/auth/login",

    className: "navbar-mobile__item",
    children: createTypography({
      label: "Login",
      size: TypographySize.bodyMedium,
    }),
  });
  const logOutButton = createTypography({
    label: "LogOut",
    size: TypographySize.bodyMedium,
    className: "navbar-mobile__item",
  });
  logOutButton.style.cursor = "pointer";
  logOutButton.addEventListener("click", () => {
    try {
      deleteCookie("access_token");
      goTo("/");
      updateAppSession();
    } catch (error) {
      console.log(error);
    }
  });
  const separator = document.createElement("div");
  separator.className = "navbar-mobile__separator";

  const github = createLink({
    href: "https://github.com/davc93",
    children: GithubIcon({ width: "36px" }),
  });
  const linkedin = createLink({
    href: "https://www.linkedin.com/in/diego-vergara-casanova/",
    children: LinkedinIcon({ width: "36px" }),
  });
  const socialContainer = document.createElement("div");
  socialContainer.className = ["navbar-mobile__social-container","navbar-mobile__item"].join(" ");
  socialContainer.append(github, linkedin);

  itemList.append(
    aboutA,
    portfolioA,
    loginEl,
    socialContainer,
    profile,
    logOutButton,
  );

  navbarMobile.append(menuButton,itemList);

  const sessionActive = () => {
    loginEl.style.display = "none";
    profile.style.display = "flex";
    logOutButton.style.display = "flex";
  };
  const sessionInactive = () => {
    loginEl.style.display = "flex";
    profile.style.display = "none";
    logOutButton.style.display = "none";
  };
  window.addEventListener("popstate", () => {
    // menuButton.checked = false
    menuButton.classList.remove("navbar-mobile-menu-button--open");
  });
  window.addEventListener("click", (e: any) => {
    if (
      !navbarMobile.contains(e.target) &&
      menuButton.classList.contains("navbar-mobile-menu-button--open")
    ) {
      // menuButton.checked = false
      // menuButton.classList.remove("navbar-mobile-menu-button--open")
    }
  });

  // const navbarWrapper = document.createElement("div");
  // navbarWrapper.classList.add("navbar-mobile-wrapper");
  // navbarWrapper.append(menuButton, navbarMobile);

  return {
    element: navbarMobile,
    sessionActive,
    sessionInactive,
  };
};

// Helper function to create the option div
