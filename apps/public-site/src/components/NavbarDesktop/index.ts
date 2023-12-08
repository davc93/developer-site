import { updateAppSession } from "../../main";
import { goTo } from "../../navigation";
import { deleteCookie } from "../../utils/notifications";
import { GithubIcon, LinkedinIcon } from "../Icons/SocialIcons";
import { createLink } from "../Link";
import { TypographySize, createTypography } from "../Typography";

// reference https://codepen.io/dmendozaec/pen/vwjRvw
export interface NavbarDesktopProps {
  logo?: string;
}

export const createNavbarDesktop = ({}: NavbarDesktopProps) => {
  const navbarContainer = document.createElement("nav");
  navbarContainer.className = ["navbar-container", "navbar-desktop"].join(" ");
  const divNav = document.createElement("div");
  divNav.classList.add("nav");
  // Create the menu
  const inputCheckbox = document.createElement("input");
  inputCheckbox.type = "checkbox";

  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  const divMenu = document.createElement("div");
  divMenu.classList.add("menu");

  //Elements

  const about = document.createElement("li");
  about.append(
    createLink({
      href: "/",
      children: createTypography({
        label: "About",
        size: TypographySize.bodyMedium,
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
      }),
    })
  );
  const appointments = document.createElement("li");
  appointments.append(
    createLink({
      href: "/appointments",
      children: createTypography({
        label: "Appointments",
        size: TypographySize.bodyMedium,
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
      }),
    })
  );
  const loginOutLi = document.createElement("li");
    const logOutButton = createTypography({
      label: "LogOut",
      size: TypographySize.bodyMedium,
    })
    logOutButton.style.cursor = "pointer"
    logOutButton.addEventListener("click",()=>{
      try {
        deleteCookie("access_token")
        goTo("/")
        updateAppSession()
      } catch (error) {
          console.log(error);
          
      }
    })
  loginOutLi.append(
    logOutButton
    );
  
    const separator = document.createElement("li")
    separator.className = "nav__separator"

  //   const logout = createTypography({label:"Log out"})
  const githubLi = document.createElement("li")
  const githubLink = createLink({href:"https://github.com/davc93",children:GithubIcon({width:"36px"})})
  githubLi.append(githubLink)
  
  const linkedinLi = document.createElement("li")
  const linkedinLink = createLink({href:"https://www.linkedin.com/in/diego-vergara-casanova/",children:LinkedinIcon({width:'36px'})})
  linkedinLi.append(linkedinLink)
  
  divMenu.append(
    about,
    portfolio,
    appointments,
    profile,
    loginLi,
    loginOutLi,
    separator,
    githubLi,
    linkedinLi
  );

  // Append all elements to the main div
  divNav.append(inputCheckbox, span1, span2, divMenu);

  navbarContainer.append(divNav);
  window.addEventListener("popstate",()=>{
    inputCheckbox.checked = false
  })
  window.addEventListener("click",(e:any)=>{
    if (!navbarContainer.contains(e.target) && inputCheckbox.checked) {
      inputCheckbox.checked = false

    }
    
  })
  const sessionActive = () => {
     loginLi.style.display = "none"
     profile.style.display = "block"
     loginOutLi.style.display = "block"
  }
  const sessionInactive = () => {
    loginLi.style.display = "block"
    profile.style.display = "none"
    loginOutLi.style.display = "none"
    
  }

  return {
    element:navbarContainer,
    sessionActive,
    sessionInactive
  };
};
