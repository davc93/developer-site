import type { Project } from "@/models/project.model";
export enum ActionTypes {
  CHANGE_STEP = "CHANGE_STEP",
  SET_PROJECT = "SET_PROJECT",
}

// disptach({type:ActionTypes.CHANGE_STEP,payload:Step.TECHNOLOGIES})

export enum Step {
  GENERAL = 1,
  TECHNOLOGIES = 2,
  IMAGES = 3,
}



export interface ProjectDto extends Partial<Omit<Project, "id" | "createdAt"|"labels"|"images">> {
  labels?:{
    order:number,
    labelId:number
  }[],
  images?:{
    url:string
  }[]

}

export type ReducerState = {
  projectDTO: ProjectDto;
  step: Step;
};

export const initialState: ReducerState = {
  step: Step.GENERAL,
  projectDTO: {
    title:"",
    link:"",
    repository:"",
    shortDescription:"",
    published:true,
    description:"",
    slug:"",
    images:[],
    labels:[]

  },
};

export type Actions = {
  type: ActionTypes;
  payload: Step | ReducerState["projectDTO"];
};

const reducerObject = (
  state: ReducerState,
  payload: Step | ReducerState["projectDTO"]
) => {

  return {
    SET_PROJECT: {
      ...state,
      projectDTO: {
        ...state.projectDTO,
        ...payload as ReducerState["projectDTO"]
      },
    },

    CHANGE_STEP: {
      ...state,
      step: payload as Step,
    },
  };
};
export const reducer = (state: ReducerState, action: Actions) => {
  
  return reducerObject(state, action.payload)[action.type] || state;
};
