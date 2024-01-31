
import { ProjectCardType } from "../../components/molecules/ProjectCard";
import { createSelect } from "../../components/atoms/Select";
import { projectListPortfolio, projectsFilterForm } from "../../nodes";
import { projectService } from "../../services/project.service";
import "./style.css";
import { createListOfProjects } from "../../components/organisms/ListOfProjects";
const techs = await projectService.getLabels();
const options = [{label:"All",value:""},...techs.map((tech) => {
  return {
    label: tech.title,
    value: `${tech.id}`,
  };
})] 
const selectTechEl = createSelect({ options });
export const createPortfolioPage = async () => {

const projects = await projectService.getProjects();
const projectsEl = createListOfProjects(projects,ProjectCardType.MEDIUM);
  selectTechEl.addEventListener("change", async (event) => {
    const target = event.target as any;
    const projects = await projectService.getProjects({
      labelId: target?.value,
    });
    const projectsEl = createListOfProjects(projects,ProjectCardType.MEDIUM)
    while (projectListPortfolio?.firstChild) {
      projectListPortfolio.firstChild.remove();
    }
    projectListPortfolio?.append(...projectsEl)
  });
  projectsFilterForm?.append(selectTechEl);
  projectListPortfolio?.append(...projectsEl);
};
