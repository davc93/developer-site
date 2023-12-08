import "../../../styles/variables.css";
import { createNavbarDesktop } from "./components/NavbarDesktop";
import { createNavbarMobile } from "./components/NavbarMobile";
import "./globals.css";
import { navigation } from "./navigation";
import { layout } from "./nodes";
import { createAppointmentsPage } from "./routes/appointments";
import { createHomePage } from "./routes/home/home";
import { createPortfolioPage } from "./routes/portfolio/portfolio";
import { createProfilePage } from "./routes/profile/profile";
import { authService } from "./services/auth.service";

export const navbar =createNavbarDesktop({})
export const navbarMobile = createNavbarMobile({})
layout.append(navbar.element,navbarMobile.element);
export const updateAppSession = () =>{
    authService.getUserInfo().then((data)=>{
        navbar.sessionActive()
        navbarMobile.sessionActive()
        
    }).catch((error)=>{
    
        navbar.sessionInactive()
        navbarMobile.sessionInactive()
    })
}

createHomePage();
createPortfolioPage();
createAppointmentsPage();
createProfilePage();
navigation();

updateAppSession()