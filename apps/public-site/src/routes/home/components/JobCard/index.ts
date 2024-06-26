import "./style.css"
import { ImageFormat, createImage } from "@/components/ui/atoms/Image"
import { createTypography, TypographySize } from "@/components/ui/atoms/Typography"

export interface JobCardProps {
  jobLogo: string
  jobTitle: string
  organization: string
  from: string
  to: string
  description: string
  jobUrl?: string
}
export const createJobCard = ({
  jobTitle,
  organization,
  description,
  from,
  jobLogo,
  to
}: JobCardProps) => {
  const container = document.createElement("div")
  container.className = "job-card"
  const line = document.createElement('div')
  line.className = 'job-card__line'
  const generalInfo = document.createElement("div")
  generalInfo.className = "job-card__general-info"
  const jobTitleEl = createTypography({
    label: jobTitle,
    size: TypographySize.bodyMedium
  })
  jobTitleEl.classList.add('job-card__title')
  const organizationEl = createTypography({
    label: organization,
    size: TypographySize.bodyMedium,
    style: "color: var(--foreground--300); "
  })
  const fromToEl = createTypography({
    label: `${from} - ${to}`,
    size: TypographySize.bodyMedium,
    style: "color: var(--foreground--300); "
  })

  const imageEl = createImage({
    url: jobLogo,
    width: 100,
    height: 100,
    format: ImageFormat.PNG,
    isCloudinary: false
  })
  imageEl.classList.add("job-card__logo")
  generalInfo.append(imageEl, jobTitleEl, organizationEl, fromToEl)
  const generalInfoContainer = document.createElement("div")
  generalInfoContainer.className = "job-card__general-info-container"
  const descriptionEl = createTypography({
    label: description,
    size: TypographySize.bodyMedium
  })
  generalInfoContainer.append(imageEl, generalInfo)
  descriptionEl.classList.add("job-card__description")
  container.append(line,generalInfoContainer, descriptionEl)
  return container
}
