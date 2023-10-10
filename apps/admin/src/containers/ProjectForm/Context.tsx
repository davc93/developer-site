import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { Actions, Step, initialState, reducer,ReducerState } from "./reducer";

export const ProjectFormContext = createContext<{state:ReducerState,dispatch:React.Dispatch<Actions>}>({state:initialState,dispatch:(action:any)=>{}});
export const ProjectFormProvider = ({ children }: { children: ReactNode }) => {
  const [state,dispatch] = useReducer(reducer, initialState);

  return (
    <ProjectFormContext.Provider value={{state,dispatch}}>
      {children}
    </ProjectFormContext.Provider>
  );
};
