import { goTo } from "../../../navigation"
import { projectDescription } from "../../../nodes"
import { projectService } from "../../../services/project.service"
import "./style.css"
import { marked } from "marked"
export const createPortfolioDetailPage = async () => {
    projectDescription.innerHTML = ""
    const slug = window.location.pathname.split("/").at(-1) as string
    const project = await projectService.getProjects({slug})
    const html = marked.parse(project[0].description)
    projectDescription.innerHTML = html
    projectDescription.querySelectorAll("a").forEach((link)=>{
        if(!link.href.includes("http")){

            link.addEventListener("click",(event)=>{
                event.preventDefault()
                goTo(link.href)
            })
        }
    })
    
    
}