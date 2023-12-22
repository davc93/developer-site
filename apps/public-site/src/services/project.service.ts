import { config } from "../config";
import type { Project } from "../models/project.model";
import type { Label } from "../models/label.model";

enum ServiceStatus {
    LOADING= "loading",
    ERROR = "error",
    DELAYED = "delayed"

}

type ServiceResponse = {
    data:Promise<any>,
    status:ServiceStatus
    message:string | null
}
class ProjectService{


    async getProjects(queryParamsObj?:Record<string, string>):Promise<ServiceResponse>{
        
        let status = ServiceStatus.LOADING
        let message = null

        const controller = new AbortController()
    
        const queryParams = queryParamsObj ? `?${(new URLSearchParams(queryParamsObj)).toString()}` : ""
        const url = `${config.apiUrl}/projects${queryParams}`
        
        const response = await fetch(url,{signal:controller.signal})
        const data = response.json()
        
        if(!response.ok){
            status = ServiceStatus.ERROR
            message = "Bad request"
        }

        return {
            data,
            status,
            message
        }
    }
    async getProject(id:number):Promise<Project>{
        const response = await fetch(`${config.apiUrl}/projects/${id}`)
        const data = await response.json()
        if(data.error){
            throw new Error(data.message)
        }
        return data

    }
    async getLabels():Promise<Label[]>{
        const response = await fetch(`${config.apiUrl}/labels`)
        const data = await response.json()
        if(!response.ok){
            throw new Error(data.message ?? "Something when wrong")
        }
        return data
    }

    
    
}

export const projectService = new ProjectService()

