import { config } from "../config";
import { CreateLabelDto, Label, UpdateLabelDto } from "../models/label.model";

class LabelService{

    async createLabel(token:string,label:CreateLabelDto):Promise<Label>{

        const response =  await fetch(`${config.apiUri}/labels`,{
            method:"POST",
            headers:{
                'Authorization':`Bearer ${token}`,
                'Content-type':"application/json"
            },
            body:JSON.stringify(label)
        })

        const data = await response.json()
        
        if(data.error){
            throw new Error(data.message)
        }
        return data

    }
    async updateLabel(token:string,changes:UpdateLabelDto,id:number):Promise<Label>{

        const response =  await fetch(`${config.apiUri}/labels/${id}`,{
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

    async getLabels():Promise<any>{
        const response =  await fetch(`${config.apiUri}/labels?pagination[size]=100&pagination[page]=1&sort[0]=id:desc`)
        const data = await response.json()
        
        if(data.error){
            throw new Error(data.message)
        }
        return data
    }
    async getLabel(id:number):Promise<Label>{
        const response =  await fetch(`${config.apiUri}/labels/${id}`)
        const data = await response.json()
        
        if(data.error){
            throw new Error(data.message)
        }
        return data
    }
    async deleteLabel(token:string,id:number){
        const response =  await fetch(`${config.apiUri}/labels/${id}`,{
            method:"DELETE",
            headers:{
                'Authorization':`Bearer ${token}`,
                'Content-type':"application/json"
            }
        })

        const data = await response.json()
        
        if(data.error){
            throw new Error(data.message)
        }
        return data

    }
}

export const labelService = new LabelService()