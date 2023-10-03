import { Project } from "../../models/project.model";
import { AccordionItemWidth, createAccordionItem } from "../AccordionItem";
import { ButtonSizes, ButtonStyles, createButton } from "../Button";
import { createContainer } from "../Container";
import {
  TypographyColor,
  TypographySize,
  TypographyWeight,
  createTypography,
} from "../Typography";
export enum ProjectCardType {
  LARGE = "project-card--large",
  MEDIUM = "project-card--medium",
}

export interface ProjectCardProps {
  project: Project;
  type: ProjectCardType;
}

export const createProjectCard = ({ type, project }: ProjectCardProps) => {
  const projectCard = document.createElement("div")
  projectCard.classList.add(type);
  const projectImage = document.createElement("img");
  projectImage.src = project.images[0].url;
  const projectTitle = createTypography({
    label: project.title,
    weight: TypographyWeight.MEDIUM,
    color: TypographyColor.White,
    size: TypographySize.titleSmall,
  });
  const projectDescription = createTypography({
    label: project.shortDescription,
    weight: TypographyWeight.REGULAR,
    color: TypographyColor.White,
    size: TypographySize.bodyLarge,
  });
  const techsContainer = document.createElement("div");
  techsContainer.classList.add(`${type}__tech-list`);
  const techs = project.labels
    .filter((label) => label.type == undefined)
    .slice(0, 4)
    .map((label) => {
      const techContainer = createContainer({ border: true });
      techContainer.classList.add(`${type}__tech`);
      const techImage = document.createElement("img");
      techImage.src = label.image;
      const techName = createTypography({
        label: label.title,
        size: TypographySize.bodyLarge,
        weight: TypographyWeight.MEDIUM,
        color: TypographyColor.White,
      });
      techContainer.append(techImage, techName);
      return techContainer;
    });
  techsContainer.append(...techs);
  const  mobileTechsContainer = techsContainer.cloneNode(true) as any
  mobileTechsContainer.classList.replace(`${type}__tech-list`,`${type}__tech-list--mobile`)
  const techAccordion = createAccordionItem({content:mobileTechsContainer,width:AccordionItemWidth.AUTO} )
  techAccordion.classList.add("project-card--large__accordion")
  

  const cardButtons = document.createElement("div")
  cardButtons.className = `${type}__buttons`

  const cta = createButton({
    style: ButtonStyles.outlined,
    size: ButtonSizes.LARGE,
    label: "More details",
    href:`/portfolio/${project.slug}`
  });
  cardButtons.append(cta,techAccordion)

  const textContainer = createContainer({ border: false });
  textContainer.classList.add(`${type}__text`);
  textContainer.append(projectTitle, projectDescription, cardButtons);
  projectCard.append(projectImage, textContainer, techsContainer);
  return projectCard;
};
