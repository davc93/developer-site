import "./style.css"
import type { Project } from "@/models/project.model"
import { createSelect } from "@/components/ui/atoms/Select"
import { createProjectCard } from "@/components/ProjectCard"
import { projectListPortfolio } from "@/nodes"
import { projectService } from "@/services/project.service"

function createListOfProjects(projects: Project[]) {
  const projectList = document.createElement("div")
  projectList.className = "portfolio-project-list"
  const projectsElements = projects.map((project) => {
    return createProjectCard(project)
  })

  projectList.append(...projectsElements)
  return projectList
}

export const createPortfolioPage = async () => {
  
  
  const projects = await projectService.getProjects({
    published: true
  })
  const projectsEl = createListOfProjects(projects)

  projectListPortfolio?.append(projectsEl)
}
