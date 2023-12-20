import "../../../styles/variables.css";
import { createNavbarDesktop } from "./components/molecules/NavbarDesktop";
import { createNavbarMobile } from "./components/molecules/NavbarMobile";
import "./globals.css";
import { navigation } from "./navigation";
import { layout } from "./nodes";
import { createAppointmentsPage } from "./routes/appointments";
import { createBuildPage } from "./routes/build";
import { createErrorPage } from "./routes/error";
import { createHomePage } from "./routes/home/home";
import { createPortfolioPage } from "./routes/portfolio/portfolio";
import { createProfilePage } from "./routes/profile/profile";
import { authService } from "./services/auth.service";

export const navbar =createNavbarDesktop({})
export const navbarMobile = createNavbarMobile({})
layout.append(navbar.element,navbarMobile.element);
export const updateAppSession = () =>{
    authService.getUserInfo().then(()=>{
        navbar.sessionActive()
        navbarMobile.sessionActive()
        
    }).catch(()=>{
    
        navbar.sessionInactive()
        navbarMobile.sessionInactive()
    })
}

createHomePage();
createPortfolioPage();
createAppointmentsPage();
createProfilePage();
createErrorPage()
createBuildPage()
navigation();

updateAppSession()