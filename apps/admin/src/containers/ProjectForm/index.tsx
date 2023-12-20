import { FormEventHandler, useContext, useEffect, useReducer, useState } from "react";
import { Project } from "../../models/project.model";
import { projectService } from "../../services/project.service";
import { labelProjectService } from "../../services/label-project.service";
import { AuthContext } from "../../context/AuthContext";
import { imageService } from "../../services/image.service";
import { ActionTypes, Step, initialState, reducer } from "./reducer";
import { Link, useNavigate } from "react-router-dom";
import { Button, ButtonSizes } from "../../components/atoms/Button";
import { General } from "./General";
import { Technologies } from "./Technologies";
import { Images } from "./Images";
import { ProjectFormContext } from "./Context";
import { ErrorMessage } from "../../components/atoms/ErrorMessage";
import { useLocalStorage } from "../../hooks/useLocalStorage";
type ProjectFormProps = {
  project: Project | null;
};

export const ProjectForm = (props: ProjectFormProps) => {
  // if not local storage then fill with project if not edit then let empty
  const [storedValue,setStoredValue] = useLocalStorage("projectForm",{})
  const { token } = useContext(AuthContext);
  const { state, dispatch } = useContext(ProjectFormContext);
  const [submitError, setSubmitError] = useState<string | null>(null)
  const navigate = useNavigate();
  const isEdit = props.project;
  const handleSubmit: FormEventHandler = async (event) => {
    event.preventDefault();
    
    const { images, labels, ...general } = state.projectDTO;
    
    
    
    try {
      if (!isEdit) {
        const { id } = await projectService.addProject(
          token as string,
          general as any
        );
        const filesPromises: any = images?.map((file: any) => {
          return imageService.addImage(token as string, {
            url: file,
            projectId: id,
          });
        });

        const LabelProjectPromises: any = labels?.map((labelInput: any) => {
          return labelProjectService.addLabel(token as string, {
            projectId: id,
            labelId: labelInput.labelId as number,
            order: labelInput.order,
          });
        });
        await Promise.all(filesPromises);
        await Promise.all(LabelProjectPromises);
      } else {
        await projectService.updateProject(
          token as string,
          props?.project?.id as number,
          general
        );
        await projectService.deleteLabels(
          token as string,
          props?.project?.id as number
        );
        await projectService.deleteImages(
          token as string,
          props?.project?.id as number
        );
        const filesPromises: any = images?.map((image: any) => {
          return imageService.addImage(token as string, {
            url: image,
            projectId: props.project?.id as number,
          });
        });

        const LabelProjectPromises: any = labels?.map((labelInput: any) => {
          return labelProjectService.addLabel(token as string, {
            projectId: props.project?.id as number,
            labelId: labelInput.labelId as number,
            order: labelInput.order,
          });
        });

        await Promise.all(filesPromises);
        await Promise.all(LabelProjectPromises);
      }
      navigate("/projects");
    } catch (error) {
      setSubmitError(`${error}`)
    }
  };
  
  return (
    <section className="flex h-full flex-col">
      {state.step == 1 && <General project={props.project} />}
      {state.step == 2 && <Technologies project={props.project} />}
      {state.step == 3 && <Images project={props.project} />}

      {state.step == 3 && (
        <div className="h-1/5 flex gap-5 items-center justify-between w-full">
          <Button
            type="button"
            label="Previous"
            size={ButtonSizes.SMALL}
            onClick={(event) => {
              dispatch({
                type: ActionTypes.CHANGE_STEP,
                payload: Step.TECHNOLOGIES,
              });
            }}
          />
          <ErrorMessage>{submitError}</ErrorMessage>
          <Button
            label="Submit"
            size={ButtonSizes.SMALL}
            onClick={handleSubmit}
            type="submit"
          />
        </div>
      )}
    </section>
  );
};
