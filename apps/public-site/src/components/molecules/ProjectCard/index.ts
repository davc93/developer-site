import "./style.css"
import { Project } from "@/models/project.model";
import { ButtonSizes, ButtonStyles, createButton } from "@/components/atoms/Button";
import { ImageFormat, createImage } from "@/components/atoms/Image";
import { createLink } from "@/components/atoms/Link";
import {
  TypographyContrast,
  TypographySize,
  createTypography,
} from "@/components/atoms/Typography";
import { LinkIcon } from "../../icons/ExternalLink";
export enum ProjectCardType {
  LARGE = "project-card--large",
  MEDIUM = "project-card--medium",
}

export interface ProjectCardProps extends Project {
}


export const createProjectCard = ({ title,shortDescription,images,labels ,slug }: ProjectCardProps) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card"
    const imageContainer = document.createElement("div")
    imageContainer.className = "project-card__image-container"
    
    const image = createImage({url:images[0].url,width:600,height:600,format:ImageFormat.JPG,isCloudinary:true})
    imageContainer.append(image)
    image.className = "project-card__image"
    const projectTitle = createTypography({
      label: title,
      size: TypographySize.bodyMedium,
    });
    projectTitle.classList.add("project-card__title")
    const projectDescription = createTypography({
      label: shortDescription,
      size: TypographySize.bodyMedium,
    });
    projectDescription.classList.add("project-card__description")

    const techsContainer = document.createElement("div");
    techsContainer.className = "project-card__tech-list"
    const techs = labels
      .filter((label) => label.type == undefined)
      .slice(0, 4)
      .map((label) => {
        const techContainer = document.createElement("div")
        techContainer.className = "project-card__tech-container"
        const techImage = document.createElement("img");
        techImage.className = "project-card__tech-image"
        techImage.src = label.image;
        const techName = createTypography({
          label: label.title,
          size: TypographySize.bodyMedium,
        });
        techName.classList.add("project-card__tech-text")
        techContainer.append(techImage, techName);
        return techContainer;
      });

    techsContainer.append(...techs);

    const cardButtons = document.createElement("div");
      cardButtons.className = "project-card__actions"
    const buttonIcon = LinkIcon()
    buttonIcon.classList.add("project-card__button-icon")
      const cta = createButton({
      style: ButtonStyles.PRIMARY,
      size: ButtonSizes.SMALL,
      label: "More details",
      tag:"span",
      icon:buttonIcon
    });
    const link = createLink({href:`/portfolio/${slug}`,children:cta})
     
    cardButtons.append(link);
    const content = document.createElement("div")
    content.className = "project-card__content"
    content.append(projectTitle, projectDescription,techsContainer);
    projectCard.append(
      imageContainer,
      content,
      cardButtons
    );

    return projectCard;
   
};
