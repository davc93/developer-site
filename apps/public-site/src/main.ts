import "../../../styles/variables.css";
import "./globals.css";
import { navigation } from "./navigation";
import { createHomePage } from "./routes/home/home";
import { createPortfolioPage } from "./routes/portfolio/portfolio";

createHomePage();
createPortfolioPage()
navigation();
