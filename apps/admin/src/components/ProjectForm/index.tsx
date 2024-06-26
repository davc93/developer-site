import { type FormEventHandler, useContext, useState } from "react";
import { projectService } from "@/services/project.service";
import { labelProjectService } from "@/services/label-project.service";
import { AuthContext } from "@/providers/auth-provider";
import { imageService } from "@/services/image.service";
import { ActionTypes, type ProjectDto, Step } from "./reducer";
import { useNavigate } from "react-router-dom";
import { NotificationType, Button, ButtonSizes } from "ui-react";
import { General } from "./General";
import { Technologies } from "./Technologies";
import { Images } from "./Images";
import { ProjectFormContext } from "./Context";
import type { CreateProjectDto, Project } from "@/models/project.model";
import { NotificationContext } from "@/providers/notification-provider";
type ProjectFormProps = {
  project: Project | null;
};

export const ProjectForm = (props: ProjectFormProps) => {
  const { token } = useContext(AuthContext);
  const { state, dispatch } = useContext(ProjectFormContext);
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false)
  const isEdit = props.project ? true : false;
  const {addNotification} = useContext(NotificationContext)

  const submit = async () => {
    setSubmitting(true)
    const { images, labels, ...project } =
      state.projectDTO as Required<ProjectDto>;
    if (!isEdit) {
      try {
        const { id } = await projectService.addProject(
          token as string,
          project as CreateProjectDto
        );

        const imagePromises = images.map((image) => {
          return imageService.addImage(token as string, {
            url: image.url,
            projectId: id,
          });
        });
        const LabelProjectPromises = labels.map((labelInput) => {
          return labelProjectService.addLabel(token as string, {
            projectId: id,
            labelId: labelInput.labelId,
            order: labelInput.order,
          });
        });
        await Promise.all(imagePromises);
        await Promise.all(LabelProjectPromises);
        navigate("..");
        
        addNotification({
          title:"Save succesfully",
          message:"The project was save succesfully",
          type:NotificationType.INFO
          
        })


      } catch (error) {

        addNotification({
          title:"Error saving",
          message:`${error}`,
          type:NotificationType.ERROR
          
        })
      }
    } else {
      try {
        const id = props?.project?.id as number;
        await projectService.updateProject(token as string, id, project);
        await projectService.deleteLabels(token as string, id);
        await projectService.deleteImages(token as string, id);
        const imagePromises = images.map((image) => {
          return imageService.addImage(token as string, {
            url: image.url,
            projectId: id,
          });
        });
        const LabelProjectPromises = labels.map((labelInput) => {
          return labelProjectService.addLabel(token as string, {
            projectId: id,
            labelId: labelInput.labelId,
            order: labelInput.order,
          });
        });
        await Promise.all(imagePromises);
        await Promise.all(LabelProjectPromises);
        navigate("../..");

        addNotification({
          title:"Save succesfully",
          message:"The project was save succesfully",
          type:NotificationType.INFO
          
        })
      } catch (error) {

        addNotification({
          title:"Error saving",
          message:`${error}`,
          type:NotificationType.ERROR
          
        })
      }
    }
    setSubmitting(false)
  };
  const handleStepNext: FormEventHandler = (event) => {
    if (state.step == Step.IMAGES) {
      event.preventDefault();
      submit();
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
        <Button size={ButtonSizes.SMALL} onClick={handleStepNext} loading={submitting}>
          {state.step == Step.IMAGES ? "Submit" : "Next"}
        </Button>
      </div>
    </div>
  );
};
