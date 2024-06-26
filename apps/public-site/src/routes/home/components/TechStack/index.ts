import "./style.css"
import { TypographySize, createTypography } from "@/components/ui/atoms/Typography"
import { technologies } from "@/routes/home/data/technologies"
export const createTechStack = () => {
  const techsContainer = document.createElement("div")
  techsContainer.className = "tech-stack"
  const techsEls = technologies
    .sort((a, b) => b.knowledgeLevel - a.knowledgeLevel)
    .map((tech) => {
      const width = 25

      const container = document.createElement("div")
      container.className = "tech-stack__container"
      const level = document.createElement("div")

      level.className = "tech-stack__level"
      level.style.width = `${((100 - width) / 5) * tech.knowledgeLevel}%`
      const name = createTypography({
        label: tech.name,
        size: TypographySize.bodyMedium
      })
      name.classList.add("tech-stack__label")
      name.style.width = `${width}%`
      container.append(name, level)
      return container
    })
  techsContainer.append(...techsEls)
  return techsContainer
}
