
import { Project } from "../../models/project.model";
import { ProjectCardType, createProjectCard } from "../ProjectCard";

export function createProjects(projects:Project[],type:ProjectCardType) {
    const projectsElements = projects.map((project) => {
      
      return createProjectCard({type,project})
    });

    return projectsElements
  }