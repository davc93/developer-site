import { Project } from "../../models/project.model";
import { createAccordionItem } from "../AccordionItem";
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
  const projectCard = createContainer({ border: false });
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
  const techsContainer = createContainer({ border: false });
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

  const cta = createButton({
    style: ButtonStyles.outlined,
    size: ButtonSizes.Large,
    label: "More details",
    href:`/portfolio/${project.slug}`
  });
  const textContainer = createContainer({ border: false });
  textContainer.classList.add(`${type}__text`);
  textContainer.append(projectTitle, projectDescription, cta);
  projectCard.append(projectImage, textContainer, techsContainer,createAccordionItem({header:"More details",content:createTypography({label:"tech",size:TypographySize.bodySmall})}));
  return projectCard;
};
