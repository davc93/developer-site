import './style.css'
import type { Project } from '@/models/project.model'
import {
  ButtonSizes,
  ButtonStyles,
  createButton
} from '@/components/ui/atoms/Button'
import { ImageFormat, createImage } from '@/components/ui/atoms/Image'
import { createLink } from '@/components/ui/atoms/Link'
import { TypographySize, createTypography } from '@/components/ui/atoms/Typography'
import { LinkIcon } from '@/components/ui/icons/ExternalLink'
import { GithubIcon } from '@/components/ui/icons/SocialIcons'
import { BrowserIcon } from '@/components/ui/icons/BrowserIcon'
export enum ProjectCardType {
  LARGE = 'project-card--large',
  MEDIUM = 'project-card--medium'
}

export interface ProjectCardProps extends Project {}

export const createProjectCard = ({
  title,
  shortDescription,
  link,
  repository,
  images,
  labels,
  slug
}: ProjectCardProps): HTMLDivElement => {
  const projectCard = document.createElement('div')
  projectCard.className = 'project-card'
  const imageContainer = document.createElement('div')
  imageContainer.className = 'project-card__image-container'

  const image = createImage({
    mode: 'c_thumb',
    url: images[0].url,
    width: 400,
    height: 400,
    format: ImageFormat.WEBP,
    quality: 50,
    isCloudinary: true
  })
  imageContainer.append(image)
  image.className = 'project-card__image'
  const projectTitle = createTypography({
    label: title,
    size: TypographySize.bodyMedium
  })
  projectTitle.classList.add('project-card__title')
  const projectDescription = createTypography({
    label: shortDescription,
    size: TypographySize.bodyMedium
  })
  projectDescription.classList.add('project-card__description')

  const techsContainer = document.createElement('div')
  techsContainer.className = 'project-card__tech-list'
  const techs = labels
    .filter((label) => label.type === undefined)
    .slice(0, 4)
    .map((label) => {
      const techContainer = document.createElement('div')
      techContainer.className = 'project-card__tech-container'
      const techImage = document.createElement('img')
      techImage.className = 'project-card__tech-image'
      techImage.src = label.image
      const techName = createTypography({
        label: label.title,
        size: TypographySize.bodyMedium
      })
      techName.classList.add('project-card__tech-text')
      techContainer.append(techImage, techName)
      return techContainer
    })

  techsContainer.append(...techs)

  const cardButtons = document.createElement('div')
  cardButtons.className = 'project-card__actions'

  const codeIcon = GithubIcon({})
  codeIcon.classList.add('project-card__code-icon')

  const codeButton = createButton({
    style: ButtonStyles.PRIMARY,
    size: ButtonSizes.SMALL,
    label: 'Code',
    tag: 'span',
    icon: codeIcon
  })
  const code = createLink({ href: repository, children: codeButton })

  const previewIcon = BrowserIcon()
  previewIcon.classList.add('project-card__preview-icon')

  const previewButton = createButton({
    style: ButtonStyles.PRIMARY,
    size: ButtonSizes.SMALL,
    label: 'Preview',
    tag: 'span',
    icon: previewIcon
  })
  const preview = createLink({ href: link, children: previewButton })

  const docIcon = LinkIcon()
  docIcon.classList.add('project-card__doc-icon')
  const docButton = createButton({
    style: ButtonStyles.PRIMARY,
    size: ButtonSizes.SMALL,
    label: 'Documentation',
    tag: 'span',
    icon: docIcon
  })
  const detail = createLink({ href: `/portfolio/${slug}`, children: docButton })

  cardButtons.append(code, preview, detail)
  const content = document.createElement('div')
  content.className = 'project-card__content'
  content.append(projectTitle, projectDescription, techsContainer)
  projectCard.append(imageContainer, content, cardButtons)

  return projectCard
}
