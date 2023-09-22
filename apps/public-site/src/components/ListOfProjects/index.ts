
import { projectService } from "../../services/project.service";
import { ButtonSizes, ButtonStyles, createButton } from "../Button";
import { createContainer } from "../Container";
import { TypographyColor, TypographySize, TypographyWeight, createTypography } from "../Typography";

export async function createProjects() {
    const projects = await projectService.getProjects();
    const projectsElements = projects.map((project) => {
      
      const projectCard = createContainer({border:false})
      projectCard.classList.add("project-card") 
      const projectImage = document.createElement("img")
      projectImage.src = project.images[0].url
      const projectTitle = createTypography({label:project.title,weight:TypographyWeight.MEDIUM,color:TypographyColor.White,size:TypographySize.titleSmall})
      const projectDescription =createTypography({label:project.shortDescription,weight:TypographyWeight.REGULAR,color:TypographyColor.White,size:TypographySize.bodyLarge})
      const techsContainer = createContainer({border:false})
      techsContainer.classList.add("project-card__tech-list")  
      const techs = project.labels.filter((label)=>label.type == undefined).slice(0,3).map((label)=>{
        const techContainer = createContainer({border:true})
        techContainer.classList.add("project-card__tech")
        const techImage = document.createElement("img")
        techImage.src = label.image
        const techName = createTypography({label:label.title,size:TypographySize.bodyLarge,weight:TypographyWeight.MEDIUM,color:TypographyColor.White})
        techContainer.append(techImage,techName)
        return techContainer
      })
      techsContainer.append(...techs)
      
      
      const cta = createButton({style:ButtonStyles.outlined,size:ButtonSizes.Large,label:"More details"})
      const textContainer = createContainer({border:false})
      textContainer.classList.add("project-card__text")
      textContainer.append(projectTitle,projectDescription,cta)
      projectCard.append(projectImage,textContainer,techsContainer)
      return projectCard
    });

    return projectsElements
  }