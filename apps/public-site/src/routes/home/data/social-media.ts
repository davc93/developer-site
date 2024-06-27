import {
  IconGithub,
  IconLinkedin
} from '@/components/ui/icons'
import { type SocialMedia } from '@/models/social-media.model'

export const socialMedia: SocialMedia[] = [
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/diego-vergara-casanova/',
    icon: IconLinkedin({ width: '36px' })
  },
  {
    name: 'Github',
    url: 'https://github.com/davc93',
    icon: IconGithub({ width: '36px' })
  }
]
