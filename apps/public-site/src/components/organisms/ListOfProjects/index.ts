
import { Project } from "../../../models/project.model";
import { ProjectCardType, createProjectCard } from "../../molecules/ProjectCard";

export function createProjects(projects:Project[],type:ProjectCardType) {
    const projectsElements = projects.map((project) => {
      
      return createProjectCard({type,project})
    });

    return projectsElements
  }