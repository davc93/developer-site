import { createProjects } from "../../components/ListOfProjects";
import { createSelect } from "../../components/Select";
import { projectListPortfolio, projectsFilterForm } from "../../nodes";
import { labelService } from "../../services/label.service";
import "./style.css";

const projectsEl = await createProjects();
const techs = await labelService.getLabels();
const options = techs.map((tech) => {
  return {
    label: tech.title,
    value: `${tech.id}`,
  };
});
const selectTechEl = createSelect({ options });
export const createPortfolioPage = () => {
    selectTechEl.addEventListener("change",(event)=>{
        alert(event.target.value)
    })
  projectsFilterForm?.append(selectTechEl);
  projectListPortfolio?.append(...projectsEl);
};
