import "./globals.css";
import "ui-styles/src/variables.css"
import "ui-styles/src/base.css"
import "ui-styles/src/animations.css"

import "ui-styles/src/icon.css"
import "ui-styles/src/section-container.css"



import { createNavbarDesktop } from "@/components/molecules/NavbarDesktop";
import { createNavbarMobile } from "@/components/molecules/NavbarMobile";
import { navigation } from "@/navigation";
import { layout } from "@/nodes";
import { createBuildPage } from "@/routes/build";
import { createErrorPage } from "@/routes/error";
import { createHomePage } from "@/routes/home/home";
import { createPortfolioPage } from "@/routes/portfolio/portfolio";
import { createProfilePage } from "@/routes/profile/profile";
import { authService } from "@/services/auth.service";
export const navbar =createNavbarDesktop({})
export const navbarMobile = createNavbarMobile({})
layout.append(navbar.element,navbarMobile.element);
export const updateAppSession = async () =>{
    try {
        await authService.getUserInfo()
        navbar.sessionActive()
        navbarMobile.sessionActive()    
    } catch (error) {
        console.error(error);
        
        navbar.sessionInactive()
        navbarMobile.sessionInactive()   
    }
}

createHomePage();
createPortfolioPage();
createProfilePage();
createErrorPage()
createBuildPage()
navigation();

updateAppSession()