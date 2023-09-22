import { config } from "../config";
import { Label } from "../models/label.model";

class LabelService{

    async getLabels():Promise<Label[]>{
        const response = await fetch(`${config.apiUrl}/labels`)
        const data = await response.json()
        if(!response.ok){
            throw new Error(data.message ?? "Something when wrong")
        }
        return data
    }

    
    
}

export const labelService = new LabelService()