import { CreateProjectDto } from "../../models/project.model"
export enum ActionTypes {
    CHANGE_STEP = "CHANGE_STEP",
    SET_PROJECT = "SET_PROJECT"
}

// disptach({type:ActionTypes.CHANGE_STEP,payload:Step.TECHNOLOGIES})


export enum Step {
    GENERAL = 1,
    TECHNOLOGIES = 2,
    IMAGES = 3
}



export type ReducerState = {
    projectDTO: Partial<CreateProjectDto> 
    step: Step
}

export const initialState:ReducerState = {
    step: Step.GENERAL,
    projectDTO:{}
}

export type Actions = {type:ActionTypes,payload:Step | Partial<CreateProjectDto>}

const reducerObject = (state:ReducerState,payload:Step | Partial<CreateProjectDto>) => {

    return {
        "SET_PROJECT":{
            ...state,
            projectDTO:{
                ...payload as Partial<CreateProjectDto>
            }
        },

        "CHANGE_STEP":{
            ...state,
            step:payload as Step
            
        }
    }
}
export const reducer = (state:ReducerState,action:Actions)=>{
    return reducerObject(state,action.payload)[action.type] || state   
}