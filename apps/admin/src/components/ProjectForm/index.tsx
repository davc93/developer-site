import {
  FormEventHandler,
  useState,
  useEffect,
  useContext,
  useReducer,
} from "react";
import { Project } from "../../models/project.model";
import { projectService } from "../../services/project.service";
import { labelProjectService } from "../../services/label-project.service";
import { useInputValue } from "../../hooks/useInputValue";
import { useCheckbox } from "../../hooks/useCheckbox";
import { AuthContext } from "../../context/AuthContext";
import { imageService } from "../../services/image.service";
import { useMultiFile } from "../../hooks/useMultiFile";
import { useGetLabels } from "../ListOfLabels";
import { initialState, reducer } from "./reducer";
import { Link, useNavigate } from "react-router-dom";
import { Button, ButtonSizes } from "../Button";
import { TextField, TextFieldInputType } from "../TextField";
import { TextArea } from "../TextArea";
type ProjectFormProps = {
  project: Project | null;
};

type LabelInput = {
  inputId: string;
  order: number | null;
  labelId: number | null;
};

export const useLabelsInputs = (project?: Project | null) => {
  const [labelsInputs, setLabelsInputs] = useState<LabelInput[]>(() => {
    if (project) {
      return project.labels.map((label) => {
        return {
          inputId: `input-label-${label.id}`,
          order: label.labelProject.order,
          labelId: label.id,
        };
      });
    } else {
      return [];
    }
  });

  const handleAddLabel = () => {
    setLabelsInputs([
      {
        inputId: `input-label-${labelsInputs.length}`,
        order: null,
        labelId: null,
      },
      ...labelsInputs,
    ]);
  };

  const handleRemoveLabel = (id: string) => {
    setLabelsInputs(
      labelsInputs.filter((labelInput) => labelInput.inputId !== id)
    );
  };

  const handleInputChange: FormEventHandler<HTMLElement> = (event) => {
    event.preventDefault();
    const target = event.target as HTMLInputElement;
    const value = target.value;
    const [property, input, label, id] = target.id.split("-");

    setLabelsInputs((prev) => {
      return prev.map((labelInput) => {
        if (labelInput.inputId == `input-label-${id}`) {
          return {
            ...labelInput,
            [property]: value,
          };
        } else {
          return labelInput;
        }
      });
    });
  };
  return {
    handleAddLabel,
    handleInputChange,
    handleRemoveLabel,
    labelsInputs,
  };
};

export const ProjectForm = ({ project }: ProjectFormProps) => {
  const { token } = useContext(AuthContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { labels, loading, error } = useGetLabels();
  const navigate = useNavigate();
  //input handler

  const title = useInputValue(project?.title ?? "");
  const description = useInputValue(project?.description ?? "");
  const link = useInputValue(project?.link ?? "");
  const repository = useInputValue(project?.repository ?? "");
  const slug = useInputValue(project?.slug ?? "");
  const shortDescription = useInputValue(project?.shortDescription ?? "");
  const publishedInput = useCheckbox(project?.published ?? true);
  const { handleAddLabel, handleInputChange, handleRemoveLabel, labelsInputs } =
    useLabelsInputs(project);
  // end input handler

  const { loadingFiles, errorFiles, files, handleFiles } = useMultiFile(
    "image",
    project?.images
  );

  const handleSubmit: FormEventHandler = async (event) => {
    event.preventDefault();

    try {
      if (!project) {
        dispatch({ type: "CREATE_PROJECT", payload: null });
        const { id } = await projectService.addProject(token as string, {
          title: title.value,
          shortDescription: shortDescription.value,
          link: link.value,
          repository: repository.value,
          description: description.value,
          published: publishedInput.checked,
          slug: slug.value,
        });
        const filesPromises: any = files?.map((file: any) => {
          return imageService.addImage(token as string, {
            url: file.url,
            projectId: id,
          });
        });

        const LabelProjectPromises = labelsInputs.map((labelInput) => {
          return labelProjectService.addLabel(token as string, {
            projectId: id,
            labelId: labelInput.labelId as number,
            order: labelInput.order,
          });
        });
        await Promise.all(filesPromises);
        await Promise.all(LabelProjectPromises);
        dispatch({ type: "CREATE_PROJECT_FINISHED", payload: null });
      } else {
        dispatch({ type: "EDIT_PROJECT", payload: null });
        await projectService.updateProject(token as string, project.id, {
          title: title.value,
          shortDescription: shortDescription.value,
          link: link.value,
          repository: repository.value,
          description: description.value,
          published: publishedInput.checked,
          slug: slug.value,
        });
        await projectService.deleteLabels(token as string, project.id);
        await projectService.deleteImages(token as string, project.id);
        const filesPromises: any = files?.map((image: any) => {
          return imageService.addImage(token as string, {
            url: image.url,
            projectId: project.id,
          });
        });

        const LabelProjectPromises = labelsInputs.map((labelInput) => {
          return labelProjectService.addLabel(token as string, {
            projectId: project.id,
            labelId: labelInput.labelId as number,
            order: labelInput.order,
          });
        });

        await Promise.all(filesPromises);
        await Promise.all(LabelProjectPromises);

        dispatch({ type: "EDIT_PROJECT_FINISHED", payload: null });
      }
      navigate("/projects");
    } catch (error) {
      dispatch({ type: "ERROR", payload: `${error}` });
    }
  };

  return (
    <section className="flex h-full flex-col">
      <div className="flex h-4/5 overflow-y-scroll">
        {state.step == 1 && (
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
        )}
        {state.step == 2 && (
          <form className="w-full flex flex-col">
            <div className="self-end">
              <Button
                type="button"
                label="Agregar"
                size={ButtonSizes.SMALL}
                onClick={handleAddLabel}
              />
            </div>
            <div className="flex flex-col gap-8">
              {labelsInputs.map((labelInput) => {
                return (
                  <div className="flex gap-4 items-center" key={labelInput.inputId}>
                    <div className="input-group">
                      <label htmlFor="">Label</label>
                      <select
                        value={labelInput.labelId ?? ""}
                        name=""
                        id={`labelId-${labelInput.inputId}`}
                        onInput={handleInputChange}
                      >
                        {labels.length == 0 && (
                          <option disabled>Loading...</option>
                        )}
                        {!labelInput.labelId && <option value="">Seleccione una opcion</option> }
                        {labels.map((label) => {
                          return (
                            <option key={label.id} value={label.id}>
                              {label.title}{" "}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="input-group">
                      <label htmlFor="">Order</label>
                      <select
                        value={labelInput.order ?? ""}
                        name=""
                        id={`order-${labelInput.inputId}`}
                        onInput={handleInputChange}
                      >
                        {!labelInput.order && <option>Choose the order</option>}
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => {
                          return (
                            <option key={number} value={number}>
                              {number}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <Button
                      label="Remove"
                      size={ButtonSizes.SMALL}
                      type="button"
                      onClick={(event) => handleRemoveLabel(labelInput.inputId)}
                    />
                  </div>
                );
              })}
            </div>
          </form>
        )}
        {state.step == 3 && (
          <form className="w-full">
            <div className="input-group">
              {loadingFiles && <p>Loading Images</p>}
              {errorFiles && <p>{errorFiles}</p>}
              <div className="flex gap-2 flex-wrap">
                {files?.map((file: any) => {
                  return (
                    <div className="h-48 w-64 overflow-hidden" key={file.url}>
                      <img className="" key={file.public_id} src={file.url} alt="" />
                    </div>
                  );
                })}
              </div>
              <input
                type="file"
                name="files"
                id=""
                multiple
                onInput={handleFiles}
              />
            </div>
            {state.uploadingForm && <p>Loading</p>}
            {state.error && <p>{state.error}</p>}
          </form>
        )}
      </div>

      <div className="h-1/5 flex gap-5 items-center justify-between w-full">
        {state.step == 1 ? (
          <Link to="/projects">
            <Button
              type="button"
              label="Back to projects"
              size={ButtonSizes.SMALL}
            />
          </Link>
        ) : (
          <Button
            type="button"
            label="Previous"
            size={ButtonSizes.SMALL}
            onClick={(event) => {
              dispatch({ type: "CHANGE_STEP", payload: state.step - 1 });
            }}
          />
        )}
        {state.step == 3 ? (
          <Button
            label="Submit"
            size={ButtonSizes.SMALL}
            onClick={handleSubmit}
            type="submit"
          />
        ) : (
          <Button
            label="Next"
            size={ButtonSizes.SMALL}
            type="button"
            onClick={(event) => {
              dispatch({ type: "CHANGE_STEP", payload: state.step + 1 });
            }}
          />
        )}
      </div>
    </section>
  );
};
