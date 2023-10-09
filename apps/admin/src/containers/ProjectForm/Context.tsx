import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { initialState, reducer } from "./reducer";
const initialDTO = {
  project: {
    title: "",
    shortDescription: "",
    link: "",
    repository: "",
    description: "",
    published: false,
    slug: "",
    files: [],
    labelsInputs: [],
  },
  setProject: null,
};

const DTOContext = createContext(initialDTO);
const StepContext = createContext(initialState);
export const ProjectFormProvider = ({ children }: { children: ReactNode }) => {
  const [projectDTO, setProjectDTO] = useState(initialDTO);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StepContext.Provider value={{}}>
      <DTOContext.Provider
        value={{
          
        }}
      >
        {children}
      </DTOContext.Provider>
    </StepContext.Provider>
  );
};
