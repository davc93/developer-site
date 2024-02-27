
import { Project } from "../../../models/project.model";
import {  createProjectCard } from "../../molecules/ProjectCard";
import "./style.css"
export function createListOfProjects(projects:Project[]) {
  const projectList = document.createElement("div")
  projectList.className = "project-list"  
  const projectsElements = projects.map((project) => {
      
      return createProjectCard(project)
    });

    projectList.append(...projectsElements)
    return projectList
  }