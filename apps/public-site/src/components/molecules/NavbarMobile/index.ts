import "./navbar-mobile.css"
import { updateAppSession } from "@/main"
import { goTo } from "@/navigation"
import { deleteCookie } from "@/utils"
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons"
import { createLink } from "@/components/atoms/Link"
import { TypographySize, createTypography } from "@/components/atoms/Typography"

// reference https://codepen.io/nikkk-me/pen/LYYWexL

export const createNavbarMobile = () => {
  // Create the main div with class "main"
  const navbarMobile = document.createElement("div")
  navbarMobile.classList.add("navbar-mobile")

  const menuButton = document.createElement("button")
  menuButton.classList.add("navbar-mobile-menu-button")

  const line1 = document.createElement("span")
  line1.classList.add(
    "navbar-mobile-menu-button__line1",
    "navbar-mobile-menu-button__line"
  )
  const line2 = document.createElement("span")
  line2.classList.add(
    "navbar-mobile-menu-button__line2",
    "navbar-mobile-menu-button__line"
  )

  const line3 = document.createElement("span")
  line3.classList.add(
    "navbar-mobile-menu-button__line3",
    "navbar-mobile-menu-button__line"
  )

  const toggleMenu = () => {
    if (menu.classList.contains("navbar-mobile__menu--open")) {
      menu.classList.add("navbar-mobile__menu--closing")
      menuButton.classList.remove("navbar-mobile-menu-button--open")

      menu.addEventListener("animationend", (event) => {
        if (event.animationName == "navbar-mobile-menu-closing") {
          menu.classList.remove("navbar-mobile__menu--closing")
          menu.classList.remove("navbar-mobile__menu--open")
        }
      })
    } else {
      menu.classList.add("navbar-mobile__menu--open")
      menuButton.classList.add("navbar-mobile-menu-button--open")
    }
  }
  menuButton.append(line1, line2, line3)
  menuButton.addEventListener("click", () => {
    toggleMenu()
  })
  // Create the div element with class "item-list"
  const menu = document.createElement("div")
  menu.classList.add("navbar-mobile__menu")

  // Create and append individual divs with text content to the "item-list" div
  const aboutA = createLink({
    href: "/",
    className: "navbar-mobile__item",
    children: createTypography({
      label: "About",
      size: TypographySize.titleSmall
    })
  })
  const portfolioA = createLink({
    href: "/portfolio",
    className: "navbar-mobile__item",

    children: createTypography({
      label: "Portfolio",
      size: TypographySize.titleSmall
    })
  })
  // const services = createLink({href:"/servicios",children:createTypography({label:"Servicios 🇨🇱",size:TypographySize.bodyMedium})})

  const profile = createLink({
    href: "/profile",
    className: "navbar-mobile__item",
    children: createTypography({
      label: "Profile",
      size: TypographySize.titleSmall
    })
  })
  const loginEl = createLink({
    href: "/api/auth/login",

    className: "navbar-mobile__item",
    children: createTypography({
      label: "Login",
      size: TypographySize.titleSmall
    })
  })
  const logOutButton = createTypography({
    label: "LogOut",
    size: TypographySize.titleSmall,
    className: "navbar-mobile__item"
  })
  logOutButton.style.cursor = "pointer"
  logOutButton.addEventListener("click", () => {
    try {
      deleteCookie("access_token")
      goTo("/")
      updateAppSession()
    } catch (error) {
      console.log(error)
    }
  })
  const separator = document.createElement("div")
  separator.className = "navbar-mobile__separator"

  const github = createLink({
    href: "https://github.com/davc93",
    children: GithubIcon({ width: "36px" })
  })
  const linkedin = createLink({
    href: "https://www.linkedin.com/in/diego-vergara-casanova/",
    children: LinkedinIcon({ width: "36px" })
  })
  const socialContainer = document.createElement("div")
  socialContainer.className = ["navbar-mobile__social-container"].join(" ")
  socialContainer.append(github, linkedin)
  const itemsContainer = document.createElement("div")
  itemsContainer.className = ["navbar-mobile__items-container"].join(" ")
  itemsContainer.append(aboutA, portfolioA)
  menu.append(itemsContainer, socialContainer)

  navbarMobile.append(menuButton, menu)

  const sessionActive = () => {
    loginEl.style.display = "none"
    profile.style.display = "flex"
    logOutButton.style.display = "flex"
  }
  const sessionInactive = () => {
    loginEl.style.display = "flex"
    profile.style.display = "none"
    logOutButton.style.display = "none"
  }
  window.addEventListener("popstate", () => {
    // menuButton.checked = false
    menu.classList.remove("navbar-mobile__menu--open")
    menuButton.classList.remove("navbar-mobile-menu-button--open")
  })
  window.addEventListener("click", (e: any) => {
    if (
      !navbarMobile.contains(e.target) &&
      menuButton.classList.contains("navbar-mobile-menu-button--open")
    ) {
      // menuButton.checked = false
      // menuButton.classList.remove("navbar-mobile-menu-button--open")
    }
  })

  // const navbarWrapper = document.createElement("div");
  // navbarWrapper.classList.add("navbar-mobile-wrapper");
  // navbarWrapper.append(menuButton, navbarMobile);

  return {
    element: navbarMobile,
    sessionActive,
    sessionInactive
  }
}

// Helper function to create the option div
