import { TypographyColor, TypographySize, createTypography } from "../../atoms/Typography";
import { technologies } from "../../../data/technologies";
export const createTechStack = () => {
    const techsContainer = document.createElement("div");
    techsContainer.className = "tech-stack";
    const techsEls = technologies
      .sort((a, b) => b.knowledgeLevel - a.knowledgeLevel)
      .map((tech) => {
        const width = 30;
  
        const container = document.createElement("div");
        container.className = "tech-stack__container"
        const level = document.createElement("div");

        level.className = "tech-stack__level";
        level.style.width = `${((100 - width) / 5) * tech.knowledgeLevel}%`;
        const name = createTypography({
          label: tech.name,
          size: TypographySize.bodyMedium,
          color: TypographyColor.White,
        });
        name.classList.add("tech-stack__label")
        name.style.width = `${width}%`;
        container.append(name, level);
        return container;
      });
    techsContainer.append(...techsEls);
    return techsContainer;   
}