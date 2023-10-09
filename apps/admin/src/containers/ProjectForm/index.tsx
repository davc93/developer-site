import { FormEventHandler, useContext, useReducer } from "react";
import { Project } from "../../models/project.model";
import { projectService } from "../../services/project.service";
import { labelProjectService } from "../../services/label-project.service";
import { AuthContext } from "../../context/AuthContext";
import { imageService } from "../../services/image.service";
import { initialState, reducer } from "./reducer";
import { Link, useNavigate } from "react-router-dom";
import { Button, ButtonSizes } from "../../components/Button";
import { General } from "./General";
import { Technologies } from "./Technologies";
import { Images } from "./Images";
type ProjectFormProps = {
  project: Project | null;
};

export const ProjectForm = (props: ProjectFormProps) => {
  const { token } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleSubmit: FormEventHandler = async (event) => {
    event.preventDefault();

    try {
      if (!props.project) {
        const { id } = await projectService.addProject(token as string, {
          title: project.title,
          shortDescription: project.shortDescription,
          link: project.link,
          repository: project.repository,
          description: project.description,
          published: project.published,
          slug: project.slug,
        });
        const filesPromises: any = project.files?.map((file: any) => {
          return imageService.addImage(token as string, {
            url: file.url,
            projectId: id,
          });
        });

        const LabelProjectPromises = project.labelsInputs.map(
          (labelInput: any) => {
            return labelProjectService.addLabel(token as string, {
              projectId: id,
              labelId: labelInput.labelId as number,
              order: labelInput.order,
            });
          }
        );
        await Promise.all(filesPromises);
        await Promise.all(LabelProjectPromises);
      } else {
        await projectService.updateProject(token as string, props.project.id, {
          title: project.title,
          shortDescription: project.shortDescription,
          link: project.link,
          repository: project.repository,
          description: project.description,
          published: project.published,
          slug: project.slug,
        });
        await projectService.deleteLabels(token as string, props.project.id);
        await projectService.deleteImages(token as string, props.project.id);
        const filesPromises = project.files?.map((image: any) => {
          return imageService.addImage(token as string, {
            url: image.url,
            projectId: props.project?.id as number,
          });
        });

        const LabelProjectPromises = project.labelsInputs.map(
          (labelInput) => {
            return labelProjectService.addLabel(token as string, {
              projectId: props.project?.id as number,
              labelId: labelInput.labelId as number,
              order: labelInput.order,
            });
          }
        );

        await Promise.all(filesPromises);
        await Promise.all(LabelProjectPromises);

      }
      navigate("/projects");
    } catch (error) {
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
              dispatch({ type: "CHANGE_STEP", payload: state.step - 1 });
            }}
          />

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
