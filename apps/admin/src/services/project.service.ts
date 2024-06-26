import { config } from "../config";
import { CreateProjectDto, Project, UpdateProjectDto } from "../models/project.model";

class ProjectService{

    async getProjects():Promise<Project[]>{
        const response = await fetch(`${config.apiUri}/projects`)
        const data = await response.json()
        if(data.error){
            throw new Error(data.message)
        }
        return data
    }
    async getProject(id:number):Promise<Project>{
        const response = await fetch(`${config.apiUri}/projects/${id}`)
        const data = await response.json()
        if(data.error){
            throw new Error(data.message)
        }
        return data

    }

    async addProject(token:string,project:Omit<CreateProjectDto,"labels" | "images" > ):Promise<Project>{
        const response =  await fetch(`${config.apiUri}/projects`,{
            method:"POST",
            headers:{
                'Authorization':`Bearer ${token}`,
                'Content-type':"application/json"
            },
            body:JSON.stringify(project)
        })

        const data = await response.json()
        
        if(data.error){
            throw new Error(data.message)
        }
        return data
    }
    async updateProject(token:string,id:number,changes:UpdateProjectDto):Promise<Project>{
        const response =  await fetch(`${config.apiUri}/projects/${id}`,{
            method:"PATCH",
            headers:{
                'Authorization':`Bearer ${token}`,
                'Content-type':"application/json"
            },
            body:JSON.stringify(changes)
        })

        const data = await response.json()
        
        if(data.error){
            throw new Error(data.message)
        }
        return data
    }
    async deleteProject(token:string,id:number){
        const response =  await fetch(`${config.apiUri}/projects/${id}`,{
            method:"DELETE",
            headers:{
                'Authorization':`Bearer ${token}`,
            }
        })

        const data = await response.json()
        
        if(data.error){
            throw new Error(data.message)
        }
        return data

    }
    async deleteImages (token:string,id:number){
        const response =  await fetch(`${config.apiUri}/projects/${id}/delete-images`,{
            method:"DELETE",
            headers:{
                'Authorization':`Bearer ${token}`,
            }
        })

        const data = await response.json()
        
        if(data.error){
            throw new Error(data.message)
        }
        return data

    }

    async deleteLabels (token:string,id:number){
        const response =  await fetch(`${config.apiUri}/projects/${id}/delete-labels`,{
            method:"DELETE",
            headers:{
                'Authorization':`Bearer ${token}`,
            }
        })

        const data = await response.json()
        
        if(data.error){
            throw new Error(data.message)
        }
        return data
        
    }
    
    
}

export const projectService = new ProjectService()

