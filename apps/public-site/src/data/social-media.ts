import { GithubIcon, InstagramIcon, LinkedinIcon } from "../components/Icons/SocialIcons";
import { SocialMedia } from "../models/social-media.model";

export const socialMedia:SocialMedia[] = [
    {
        name:"Linkedin",
        url:"https://www.linkedin.com/in/diego-vergara-casanova/",
        icon:LinkedinIcon()
    },
    {
        name:"Github",
        url:"https://github.com/davc93",
        icon:GithubIcon()
    },
    {
        name:"Instagram",
        url:"https://www.instagram.com/davc1993/",
        icon:InstagramIcon()
    }
]