import {
  GithubIcon,
  LinkedinIcon
} from '../components/icons/SocialIcons'
import { type SocialMedia } from '../models/social-media.model'

export const socialMedia: SocialMedia[] = [
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/diego-vergara-casanova/',
    icon: LinkedinIcon({ width: '36px' })
  },
  {
    name: 'Github',
    url: 'https://github.com/davc93',
    icon: GithubIcon({ width: '36px' })
  }
]
