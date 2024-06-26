import './globals.css'
import 'ui-styles/src/variables.css'
import 'ui-styles/src/base.css'
import 'ui-styles/src/animations.css'

import 'ui-styles/src/icon.css'
import 'ui-styles/src/section-container.css'

import { createNavbarDesktop } from '@/components/NavbarDesktop'
import { createNavbarMobile } from '@/components/NavbarMobile'
import { navigation } from '@/navigation'
import { layout, pageLoader } from '@/nodes'
import { createHomePage } from '@/routes/home/home'
import { createPortfolioPage } from '@/routes/portfolio/portfolio'
import { createProfilePage } from '@/routes/profile/profile'
import { authService } from '@/services/auth.service'
export const navbar = createNavbarDesktop()
export const navbarMobile = createNavbarMobile()
layout.append(navbar.element, navbarMobile.element)
export const updateAppSession = async (): Promise<void> => {
  try {
    await authService.getUserInfo()
    navbar.sessionActive()
    navbarMobile.sessionActive()
  } catch (error) {
    navbar.sessionInactive()
    navbarMobile.sessionInactive()
  }
}

createHomePage()
createPortfolioPage()
createProfilePage()
navigation()
pageLoader.classList.add('inactive')
updateAppSession()
