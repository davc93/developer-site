import { createProjects } from "../../components/ListOfProjects";
import { ProjectCardType } from "../../components/ProjectCard";
import { createSelect } from "../../components/Select";
import { projectListPortfolio, projectsFilterForm } from "../../nodes";
import { labelService } from "../../services/label.service";
import { projectService } from "../../services/project.service";
import "./style.css";
const techs = await labelService.getLabels();
const options = [{label:"All",value:""},...techs.map((tech) => {
  return {
    label: tech.title,
    value: `${tech.id}`,
  };
})] 
const selectTechEl = createSelect({ options });
export const createPortfolioPage = async () => {

const projects = await projectService.getProjects();
const projectsEl = createProjects(projects,ProjectCardType.MEDIUM);
  selectTechEl.addEventListener("change", async (event) => {
    const target = event.target as any;
    const projects = await projectService.getProjects({
      labelId: target?.value,
    });
    const projectsEl = createProjects(projects,ProjectCardType.MEDIUM)
    while (projectListPortfolio?.firstChild) {
      projectListPortfolio.firstChild.remove();
    }
    projectListPortfolio?.append(...projectsEl)
  });
  projectsFilterForm?.append(selectTechEl);
  projectListPortfolio?.append(...projectsEl);
};
