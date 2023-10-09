import { Link } from "react-router-dom";
import { TextArea } from "../../components/TextArea";
import { TextField, TextFieldInputType } from "../../components/TextField";
import { useCheckbox } from "../../hooks/useCheckbox";
import { useInputValue } from "../../hooks/useInputValue";
import { Project } from "../../models/project.model";
import { Button, ButtonSizes } from "../../components/Button";
import { useContext } from "react";
type GeneralProps = {
  project: Partial<Project> | null;
};

export const General = (props: GeneralProps) => {

  const title = useInputValue(props.project?.title ?? "");
  const description = useInputValue(props.project?.description ?? "");
  const link = useInputValue(props.project?.link ?? "");
  const repository = useInputValue(props.project?.repository ?? "");
  const slug = useInputValue(props.project?.slug ?? "");
  const shortDescription = useInputValue(props.project?.shortDescription ?? "");
  const publishedInput = useCheckbox(props.project?.published ?? true);
  return (
    <>
      <div className="flex h-4/5 overflow-y-scroll">
        <form className="flex gap-16 mt-4   w-full justify-between">
          <div className="w-1/3">
            <TextField
              inputType={TextFieldInputType.TEXT}
              name="title"
              label="Title"
              {...title}
            />
            <TextField
              inputType={TextFieldInputType.TEXT}
              name="shortDescription"
              label="ShortDescription"
              {...shortDescription}
            />
            <TextField
              inputType={TextFieldInputType.TEXT}
              name="link"
              label="Link"
              {...link}
            />
            <TextField
              inputType={TextFieldInputType.TEXT}
              name="repository"
              label="Repository"
              {...repository}
            />
            <div className="input-group">
              <label>Published:</label>
              <input type="checkbox" name="published" {...publishedInput} />
            </div>
            <TextField
              inputType={TextFieldInputType.TEXT}
              name="slug"
              label="Slug"
              {...slug}
            />
          </div>
          <div className="w-2/3 overflow-y-scroll">
            <TextArea
              style={{ height: "70vh" }}
              name="description"
              label="description"
              {...description}
            />
          </div>
        </form>
      </div>
      <div className="h-1/5 flex gap-5 items-center justify-between w-full">
        
          <Link to="/projects">
            <Button
              type="button"
              label="Back to projects"
              size={ButtonSizes.SMALL}
            />
          </Link>
      
          <Button
            label="Next"
            size={ButtonSizes.SMALL}
            type="button"
            onClick={(event) => {

            }}
          />
      </div>
    </>
  );
};
