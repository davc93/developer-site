import { useContext } from "react";
import { Link } from "react-router-dom";
import { TextArea } from "ui-react";
import { Input} from "ui-react";
import { useCheckbox } from "@/hooks/useCheckbox";
import { useInputValue } from "@/hooks/useInputValue";
import type { Project } from "@/models/project.model";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Button, ButtonSizes } from "ui-react";
import { ProjectFormContext } from "./Context";
import { ActionTypes, Step } from "./reducer";
type GeneralProps = {
  project: Partial<Project> | null;
};

export const General = (props: GeneralProps) => {
  const [storedValue,setStoredValue] = useLocalStorage("projectForm",{})
  const {state,dispatch} = useContext(ProjectFormContext)
  const title = useInputValue(props.project?.title ?? "");
  const description = useInputValue(props.project?.description ?? "");
  const link = useInputValue(props.project?.link ?? "");
  const repository = useInputValue(props.project?.repository ?? "");
  const slug = useInputValue(props.project?.slug ?? "");
  const shortDescription = useInputValue(props.project?.shortDescription ?? "");
  const publishedInput = useCheckbox(props.project?.published ?? true);
 
  return (
    <div>
      <div className="">
        <form className="flex gap-16 justify-between">
          <div className="">
            <Input
              name="title"
              label="Title"
              {...title}
            />
            <Input
              name="shortDescription"
              label="ShortDescription"
              {...shortDescription}
            />
            <Input
              name="link"
              label="Link"
              {...link}
            />
            <Input
              name="repository"
              label="Repository"
              {...repository}
            />
            <div className="input-group">
              <label>Published:</label>
              <input type="checkbox" name="published" {...publishedInput} />
            </div>
            <Input
              name="slug"
              label="Slug"
              {...slug}
            />
          </div>
          <div className="w-full">
            <TextArea
              name="description"
              label="description"
              style={{
                he
              }}
              {...description}
            />
          </div>
        </form>
      </div>
      <div className="flex justify-between">
        
          <Link to="/projects">
            <Button
              type="button"
              size={ButtonSizes.SMALL}
            >
              Back to projects
            </Button>
          </Link>
      
          <Button
            size={ButtonSizes.SMALL}
            type="button"
            onClick={(event) => {
              setStoredValue({
                ...storedValue,
                title:title.value,
                description:description.value,
                link:link.value,
                repository:repository.value,
                slug:slug.value,
                shortDescription:shortDescription.value,
                published:publishedInput.checked
          
              })
                dispatch({type:ActionTypes.SET_PROJECT,payload:{
                  title:title.value,
                  description:description.value,
                  link:link.value,
                  repository:repository.value,
                  slug:slug.value,
                  shortDescription:shortDescription.value,
                  published:publishedInput.checked
            
                }})
              dispatch({type:ActionTypes.CHANGE_STEP,payload:Step.TECHNOLOGIES})
            }}
          >
            Next
          </Button>
      </div>
    </div>
  );
};
