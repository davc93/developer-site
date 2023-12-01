import "../../../styles/variables.css";
import "./globals.css";
import { navigation } from "./navigation";
import { createAppointmentsPage } from "./routes/appointments";
import { createHomePage } from "./routes/home/home";
import { createPortfolioPage } from "./routes/portfolio/portfolio";
import { createProfilePage } from "./routes/profile/profile";

createHomePage();
createPortfolioPage()
createAppointmentsPage()
createProfilePage()
navigation();
