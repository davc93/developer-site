import { navbarInput, navbarMobileInput, pagesContainer, portfolioDetails } from "./nodes";
import { createPortfolioDetailPage } from "./routes/portfolio/[slug]";

export const goTo = (path: string) => {
  window.history.pushState({}, "", path);
  navigation();
};

export const navigation = () => {
  // detect path
  const path = window.location.pathname;

  // search path in element
  let currentPage = pagesContainer?.children.namedItem(path);

  // if !path then search building set path building , !building then set path 404
  if (/portfolio\/\w/.test(path)) {
    currentPage = portfolioDetails;

    //render page
    Object.entries(pagesContainer?.children as any).forEach((page: any) => {
      if (page[1] !== currentPage) {
        page[1].classList.add("page-inactive");
      } else {
        page[1].classList.remove("page-inactive");
      }
    });
    
    scrollTo(0, 0);
    createPortfolioDetailPage()
  } else if (currentPage?.classList.contains("building")) {
    goTo("/building");
  } else if (!currentPage) {
    goTo("/not-found");
  } else {
    //render page
    Object.entries(pagesContainer?.children as any).forEach((page: any) => {
      if (page[1] !== currentPage) {
        page[1].classList.add("page-inactive");
      } else {
        page[1].classList.remove("page-inactive");
      }
    });
    scrollTo(0, 0);
  }
  navbarInput.checked = false
  navbarMobileInput.checked = false
};

document
  .querySelectorAll<HTMLAnchorElement>("a.link--internal")
  .forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      event.preventDefault();
      goTo(anchor.href);
    });
  });
window.addEventListener("popstate",navigation)