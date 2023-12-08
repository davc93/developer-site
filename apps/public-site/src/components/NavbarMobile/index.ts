import { navbarMobile, updateAppSession } from "../../main";
import { goTo } from "../../navigation";
import { deleteCookie } from "../../utils/notifications";
import { GithubIcon, LinkedinIcon } from "../Icons/SocialIcons";
import { createLink } from "../Link";
import { TypographySize, createTypography } from "../Typography";

// reference https://codepen.io/nikkk-me/pen/LYYWexL
export interface NavbarMobileProps {
  logo?: string;
}

export const createNavbarMobile = ({ }: NavbarMobileProps) => {
  // Create the main div with class "main"
  const divMain = document.createElement("div");
  divMain.classList.add("main","navbar-mobile");

  // Create the label element with class "menu-button-wrapper"
  const labelMenuButtonWrapper = document.createElement("label");
  labelMenuButtonWrapper.classList.add("menu-button-wrapper");

  // Create the input element with class "menu-button" inside the label
  const inputMenuButton = document.createElement("input");
  inputMenuButton.classList.add("menu-button");
  inputMenuButton.type = "checkbox";

  // Create the div element with class "icon-wrapper"
  const divIconWrapper = document.createElement("div");
  divIconWrapper.classList.add("icon-wrapper");

  // Create the label element with class "hamburger"
  const labelHamburger = document.createElement("label");
  labelHamburger.classList.add("hamburger");

  // Create the input element with class "hamburger-input" inside the label
  const inputHamburgerInput = document.createElement("input");
  inputHamburgerInput.classList.add("hamburger-input");
  inputHamburgerInput.type = "checkbox";

  // Create three span elements with classes "hamburger-line first", "hamburger-line second", "hamburger-line third"
  const spanFirst = document.createElement("span");
  spanFirst.classList.add("hamburger-line", "first");

  const spanSecond = document.createElement("span");
  spanSecond.classList.add("hamburger-line", "second");

  const spanThird = document.createElement("span");
  spanThird.classList.add("hamburger-line", "third");

  // Append spans and input to the label "hamburger"
  labelHamburger.appendChild(inputHamburgerInput);
  labelHamburger.appendChild(spanFirst);
  labelHamburger.appendChild(spanSecond);
  labelHamburger.appendChild(spanThird);

  // Append label "hamburger" to the div "icon-wrapper"
  divIconWrapper.appendChild(labelHamburger);

  // Create the div element with class "item-list"
  const divItemList = document.createElement("div");
  divItemList.classList.add("item-list");

  // Create and append individual divs with text content to the "item-list" div
  const aboutA = createLink({href:"/about",children:createTypography({label:"About",size:TypographySize.bodyMedium})})
  const portfolioA = createLink({href:"/portfolio",children:createTypography({label:"Portfolio",size:TypographySize.bodyMedium})})
  const appointmentsA = createLink({href:"/appointments",children:createTypography({label:"Appointments",size:TypographySize.bodyMedium})})

  const profile = createLink({
    href: "/profile",
    children: createTypography({
      label: "Profile",
      size: TypographySize.bodyMedium,
    }),
  })
  const loginEl = createLink({
    href: "/api/auth/login",
    children: createTypography({
      label: "Login",
      size: TypographySize.bodyMedium,
    }),
  })
  const logOutButton = createTypography({
    label: "LogOut",
    size: TypographySize.bodyMedium,
  })
  logOutButton.style.cursor = "pointer"
  logOutButton.addEventListener("click",(ev)=>{
    try {
      deleteCookie("access_token")
      goTo("/")
      updateAppSession()
      
    } catch (error) {
        console.log(error);
        
    }
  })
  const separator = document.createElement("div")
  separator.className = "navbar-mobile__separator"

  const github = createLink({href:"https://github.com/davc93",children:GithubIcon({width:"36px"})})
  const linkedin = createLink({href:"https://www.linkedin.com/in/diego-vergara-casanova/",children:LinkedinIcon({width:'36px'})})
  const socialContainer = document.createElement("div")
  socialContainer.className = "navbar-mobile__social-container"
  socialContainer.append(github,linkedin)
 

  divItemList.append(aboutA,portfolioA,appointmentsA,profile,loginEl,logOutButton,separator,socialContainer)


  // Append input, icon-wrapper, and item-list to the label "menu-button-wrapper"
  labelMenuButtonWrapper.appendChild(inputMenuButton);
  labelMenuButtonWrapper.appendChild(divIconWrapper);
  labelMenuButtonWrapper.appendChild(divItemList);

  // Append elements to the main div "main"
  divMain.appendChild(labelMenuButtonWrapper);

  // Append the main div "main" to the container
  const sessionActive = () => {
    
    loginEl.style.display = "none"
    profile.style.display = "block"
    logOutButton.style.display = "block"
 }
 const sessionInactive = () => {
   loginEl.style.display = "block"
   profile.style.display = "none"
   logOutButton.style.display = "none"
   
 }
  window.addEventListener("popstate",(ev)=>{
    inputMenuButton.checked = false
  })
  window.addEventListener("click",(e:any)=>{
    if (!divMain.contains(e.target) && inputMenuButton.checked) {
      inputMenuButton.checked = false

    }
    
  })
  return {
    element:divMain,
    sessionActive,
    sessionInactive
  };
};

// Helper function to create the option div
