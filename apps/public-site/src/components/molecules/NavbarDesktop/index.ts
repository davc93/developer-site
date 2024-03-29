import "./navbar-desktop.css";
import { updateAppSession } from "@/main";
import { goTo } from "@/navigation";
import { deleteCookie } from "@/utils";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { createLink } from "@/components/atoms/Link";
import {
  TypographySize,
  createTypography,
} from "@/components/atoms/Typography";

// reference https://codepen.io/dmendozaec/pen/vwjRvw
export interface NavbarDesktopProps {
  logo?: string;
}

export const createNavbarDesktop = ({}: NavbarDesktopProps) => {
  const navbar = document.createElement("nav");
  navbar.className = "navbar-desktop";

  const menuButton = document.createElement("button");
  menuButton.classList.add("menu-button");
  const line1 = document.createElement("span");
  line1.classList.add("menu-button__line1","menu-button__line");
  const line2 = document.createElement("span");
  line2.classList.add("menu-button__line2","menu-button__line");
  const line3 = document.createElement("span");
  line3.classList.add("menu-button__line3","menu-button__line");

  menuButton.append(line1, line2,line3);
  menuButton.addEventListener("click",(event)=>{
    menuButton.classList.toggle("menu-button--open")

    navbar.classList.toggle("navbar-desktop--open")
  })
  const itemList = document.createElement("div");
  itemList.classList.add("navbar-desktop__item-list");

  //Elements

  const about = document.createElement("li");
  about.append(
    createLink({
      href: "/",
      children: createTypography({
        label: "About me",
        size: TypographySize.bodyMedium,
        className:"navbar-desktop__item"
      }),
    })
  );

  const portfolio = document.createElement("li");
  portfolio.append(
    createLink({
      href: "/portfolio",
      children: createTypography({
        label: "Portfolio",
        size: TypographySize.bodyMedium,
        className:"navbar-desktop__item"

      }),
    })
  );

  const profile = document.createElement("li");
  profile.append(
    createLink({
      href: "/profile",
      children: createTypography({
        label: "Profile",
        size: TypographySize.bodyMedium,
        className:"navbar-desktop__item"

      }),
    })
  );
  const loginLi = document.createElement("li");

  loginLi.append(
    createLink({
      href: "/api/auth/login",
      children: createTypography({
        label: "Login",
        size: TypographySize.bodyMedium,
        className:"navbar-desktop__item"

      }),
    })
  );
  const loginOutLi = document.createElement("li");
  const logOutButton = createTypography({
    label: "LogOut",
    size: TypographySize.bodyMedium,
    className:"navbar-desktop__item"

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
  loginOutLi.append(logOutButton);

  const separatorContainer = document.createElement("li");
  const separator =  document.createElement("div")
  separator.className = "navbar-desktop__separator";
  separatorContainer.append(separator)
  //   const logout = createTypography({label:"Log out"})
  const githubLi = document.createElement("li");
  const githubLink = createLink({
    href: "https://github.com/davc93",
    children: GithubIcon({ width: "36px" }),
  });
  githubLi.append(githubLink);

  const linkedinLi = document.createElement("li");
  const linkedinLink = createLink({
    href: "https://www.linkedin.com/in/diego-vergara-casanova/",
    children: LinkedinIcon({ width: "36px" }),
  });
  linkedinLi.append(linkedinLink);

  itemList.append(
    about,
    portfolio,
    profile,
    loginLi,
    loginOutLi,
    separatorContainer,
    githubLi,
    linkedinLi
  );

  // Append all elements to the main div

  navbar.append(menuButton, itemList);
  window.addEventListener("popstate", () => {
    navbar.classList.remove("navbar-desktop--open");
    menuButton.classList.remove("menu-button--open");

  });
  document.addEventListener("click", (e: any) => {
    if (
      !navbar.contains(e.target) &&
      menuButton.classList.contains("menu-button--open")
    ) {
      menuButton.classList.remove("menu-button--open");
      navbar.classList.toggle("navbar-desktop--open")

    }
  });
  const sessionActive = () => {
    loginLi.style.display = "none";
    profile.style.display = "block";
    loginOutLi.style.display = "block";
  };
  const sessionInactive = () => {
    loginLi.style.display = "block";
    profile.style.display = "none";
    loginOutLi.style.display = "none";
  };

  return {
    element: navbar,
    sessionActive,
    sessionInactive,
  };
};
