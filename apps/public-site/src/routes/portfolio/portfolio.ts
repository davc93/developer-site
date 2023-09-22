import { createProjects } from "../../components/ListOfProjects";
import { projectListPortfolio } from "../../nodes";
import "./style.css"

const projectsEl = await createProjects();

export const createPortfolioPage = () => {
    console.log("portfolio-loaded");
    projectListPortfolio?.append(...projectsEl)
}