import { CreateProjectDto } from "../../models/project.model"

enum Step {
    GENERAL = 1,
    TECHNOLOGIES = 2,
    IMAGES = 3
}

type ReducerState = {
    projectDTO: Partial<CreateProjectDto> 
    step: Step
}

export const initialState:ReducerState = {
    step: Step.GENERAL,
    projectDTO:{}
}



enum ActionTypes {
    CHANGE_STEP = "change_step",
    SET_PROJECT = "set_project"
}

const reducerObject = (state:ReducerState,payload:Step | ReducerState["projectDTO"]) => {

    return {
        "SET_PROJECT":{
            ...state,
            uploadingForm:true,
            error:null
        },

        "CHANGE_STEP":{
            ...state,
            step:payload
        }
    }
}
export const reducer = (state:ReducerState,action:ActionTypes)=>{
    return reducerObject(state,action.payload)[action.type] || state

    
}