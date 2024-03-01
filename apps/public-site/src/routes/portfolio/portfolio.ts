import { createSelect } from "../../components/atoms/Select";
import { createProjectCard } from "../../components/molecules/ProjectCard";
import { projectListPortfolio, projectsFilterForm } from "../../nodes";
import { projectService } from "../../services/project.service";
import "./style.css";
import type { Project } from "../../models/project.model";

function createListOfProjects(projects: Project[]) {
  const projectList = document.createElement("div");
  projectList.className = "portfolio-project-list";
  const projectsElements = projects.map((project) => {
    return createProjectCard(project);
  });

  projectList.append(...projectsElements);
  return projectList;
}




const techs = await projectService.getLabels();
const options = [
  { label: "All", value: "" },
  ...techs.map((tech) => {
    return {
      label: tech.title,
      value: `${tech.id}`,
    };
  }),
];
const selectTechEl = createSelect({ options });
export const createPortfolioPage = async () => {
  const projects = await projectService.getProjects();
  const projectsEl = createListOfProjects(projects);

  
  selectTechEl.addEventListener("change", async (event) => {
    const target = event.target as any;
    const projects = await projectService.getProjects({
      labelId: target?.value,
    });
    const projectsEl = createListOfProjects(projects);
    while (projectListPortfolio?.firstChild) {
      projectListPortfolio.firstChild.remove();
    }
    projectListPortfolio?.append(projectsEl);
  });
  projectsFilterForm?.append(selectTechEl);
  projectListPortfolio?.append(projectsEl);
};
