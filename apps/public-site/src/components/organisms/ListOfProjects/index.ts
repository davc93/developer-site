
import { Project } from "../../../models/project.model";
import {  createProjectCard } from "../../molecules/ProjectCard";

export function createListOfProjects(projects:Project[]) {
  const projectList = document.createElement("div")
  projectList.className = "project-list l-flex l-flex-wrap l-justify-center l-gap-3"  
  const projectsElements = projects.map((project) => {
      
      return createProjectCard(project)
    });

    projectList.append(...projectsElements)
    return projectList
  }