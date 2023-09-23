import "../../../styles/variables.css";
import "./globals.css";
import { navigation } from "./navigation";
import { createHomePage } from "./routes/home/home";
import { createPortfolioDetailPage } from "./routes/portfolio/[slug]";
import { createPortfolioPage } from "./routes/portfolio/portfolio";
window.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");
});
window.addEventListener("load", () => {
  console.log("load");
});
createPortfolioDetailPage()
createPortfolioPage()
createHomePage();
navigation();
