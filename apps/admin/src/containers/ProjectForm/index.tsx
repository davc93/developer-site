import { FormEventHandler, useContext, useState } from "react";
import { projectService } from "@/services/project.service";
import { labelProjectService } from "@/services/label-project.service";
import { AuthContext } from "@/context/AuthContext";
import { imageService } from "@/services/image.service";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ActionTypes, Step } from "./reducer";
import { useNavigate } from "react-router-dom";
import { Button, ButtonSizes } from "ui-react";
import { General } from "./General";
import { Technologies } from "./Technologies";
import { Images } from "./Images";
import { ProjectFormContext } from "./Context";
import type { CreateProjectDto, Project } from "@/models/project.model";
type ProjectFormProps = {
  project: Project | null;
};

export const ProjectForm = (props: ProjectFormProps) => {
  const { token } = useContext(AuthContext);
  const { state, dispatch } = useContext(ProjectFormContext);
  const navigate = useNavigate();
  const isEdit = props.project;
  const submit = async () => {
    try {
      console.log(state.projectDTO);
      navigate("/projects");
    } catch (error) {}
    // try {
    //   if (!isEdit) {
    //     const { id } = await projectService.addProject(
    //       token as string,
    //       general
    //     );
    //     const filesPromises = images?.map((file) => {
    //       return imageService.addImage(token as string, {
    //         url: file.url,
    //         projectId: id,
    //       });
    //     });

    //     const LabelProjectPromises = labels?.map((labelInput) => {
    //       return labelProjectService.addLabel(token as string, {
    //         projectId: id,
    //         labelId: labelInput.labelId as number,
    //         order: labelInput.order,
    //       });
    //     });
    //     await Promise.all(filesPromises);
    //     await Promise.all(LabelProjectPromises);
    //   } else {
    //     await projectService.updateProject(
    //       token as string,
    //       props?.project?.id as number,
    //       general
    //     );
    //     await projectService.deleteLabels(
    //       token as string,
    //       props?.project?.id as number
    //     );
    //     await projectService.deleteImages(
    //       token as string,
    //       props?.project?.id as number
    //     );
    //     const filesPromises: any = images?.map((image) => {
    //       return imageService.addImage(token as string, {
    //         url: image.url,
    //         projectId: props.project?.id as number,
    //       });
    //     });

    //     const LabelProjectPromises = labels?.map((labelInput) => {
    //       return labelProjectService.addLabel(token as string, {
    //         projectId: props.project?.id as number,
    //         labelId: labelInput.labelId as number,
    //         order: labelInput.order,
    //       });
    //     });

    //     await Promise.all(filesPromises);
    //     await Promise.all(LabelProjectPromises);
    //   }
    //   navigate("/projects");
    // } catch (error) {

    // }
  };
  const handleStepNext: FormEventHandler = (event) => {
    if (state.step == Step.IMAGES) {
      event.preventDefault();
      submit();
      //submit form
    } else {
      dispatch({ type: ActionTypes.CHANGE_STEP, payload: state.step + 1 });
    }
  };
  const handleStepPrevious = () => {
    if (state.step == Step.GENERAL) {
      navigate("/projects");
    } else {
      dispatch({ type: ActionTypes.CHANGE_STEP, payload: state.step - 1 });
    }
  };
  return (
    <div className="h-full flex flex-col py-12 justify-between">
      <div>
        <General show={state.step == Step.GENERAL} project={props.project} />
        <Technologies
          show={state.step == Step.TECHNOLOGIES}
          project={props.project}
        />
        <Images show={state.step == Step.IMAGES} project={props.project} />
      </div>
      <div className="flex justify-center gap-16 ">
        <Button
          type="button"
          size={ButtonSizes.SMALL}
          onClick={handleStepPrevious}
        >
          {state.step == Step.GENERAL ? "Back to projects" : "Previous"}
        </Button>
        <Button size={ButtonSizes.SMALL} onClick={handleStepNext}>
          {state.step == Step.IMAGES ? "Submit" : "Next"}
        </Button>
      </div>
    </div>
  );
};
