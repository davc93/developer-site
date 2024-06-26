import { pagesContainer, portfolioDetails } from "@/nodes"
import { createPortfolioDetailPage } from "@/routes/project-detail"

export const goTo = (path: string) => {
  window.history.pushState({}, "", path)
  window.dispatchEvent(new Event("popstate"))
  navigation()
}

export const navigation = async () => {
  // detect path
  // pageLoader.classList.remove("inactive");

  const path = window.location.pathname

  // search path in element
  let currentPage = pagesContainer?.children.namedItem(path)

  // if !path then search building set path building , !building then set path 404
  if (/portfolio\/\w/.test(path)) {
    currentPage = portfolioDetails

    //render page
    Object.entries(pagesContainer?.children as any).forEach((page: any) => {
      if (page[1] !== currentPage) {
        page[1].classList.add("hidden")
      } else {
        page[1].classList.remove("hidden")
        page[1].classList.add("active")
      }
    })

    await createPortfolioDetailPage()
  } else if (!currentPage) {
    goTo("/error?message=page-not-found")
  } else {
    //render page
    Object.entries(pagesContainer?.children as any).forEach((page: any) => {
      if (page[1] !== currentPage) {
        page[1].classList.add("hidden")
      } else {
        page[1].classList.remove("hidden")
        page[1].classList.add("active")
      }
    })
  }
  // navbarInput.checked = false;
  // navbarMobileInput.checked = false;
  // pageLoader.classList.add("inactive");
}

document.querySelectorAll<HTMLAnchorElement>(".link").forEach((anchor) => {
  if (anchor.href.includes(window.location.host)) {
    anchor.addEventListener("click", (event) => {
      event.preventDefault()
      goTo(anchor.href)
    })
  }
})
window.addEventListener("popstate", (event) => {
  event.preventDefault()
  navigation()
})
