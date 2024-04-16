import { useContext, useState,useEffect } from "react";
import type { FormEventHandler } from "react";
import type { Label } from "@/models/project.model";
import { Button, ButtonSizes } from "ui-react";
import { Project } from "@/models/project.model";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { labelService } from "@/services/label.service";
import { ProjectFormContext } from "./Context";
import { ActionTypes, Step } from "./reducer";


type TechnologiesProps = {
  project: Partial<Project> | null;
};

type LabelInput = {
  inputId: string;
  order: number | null;
  labelId: number | null;
};
const useGetLabels = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [labels, setLabels] = useState<Label[]>([]);

  const getLabels = async () => {
    setLoading(true);
    try {
      const data = await labelService.getLabels();
      setLabels(data);
    } catch (error) {
      setError(`${error}`);
    }
    setLoading(false);
  };
  useEffect(() => {
    getLabels();
  }, []);
  return {
    loading,
    error,
    labels,
    getLabels,
  };
};

export const useLabelsInputs = (project: any) => {
  const [labelsInputs, setLabelsInputs] = useState<LabelInput[]>(() => {
    if (project) {
      return project.labels.map((label: any) => {
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

export const Technologies = (props: TechnologiesProps) => {
  const { state, dispatch } = useContext(ProjectFormContext);
  const [storedValue, setStoredValue] = useLocalStorage("projectForm", {});
  const { labels } = useGetLabels();
  const { handleAddLabel, handleInputChange, handleRemoveLabel, labelsInputs } =
    useLabelsInputs(props.project);

  return (
    <>
      <div className="flex h-4/5 overflow-y-scroll">
        <form className="w-full flex flex-col">
          <div className="self-end">
            <Button
              type="button"
              size={ButtonSizes.SMALL}
              onClick={handleAddLabel}
            >
              Add
            </Button>
          </div>
          <div className="flex flex-col gap-8">
            {labelsInputs.map((labelInput) => {
              return (
                <div
                  className="flex gap-4 items-center"
                  key={labelInput.inputId}
                >
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
                      {!labelInput.labelId && (
                        <option value="">Seleccione una opcion</option>
                      )}
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
                    size={ButtonSizes.SMALL}
                    type="button"
                    onClick={(event) => handleRemoveLabel(labelInput.inputId)}
                  >
                    Remove
                  </Button>
                </div>
              );
            })}
          </div>
        </form>
      </div>
      <div className="h-1/5 flex gap-5 items-center justify-between w-full">
        <Button
          type="button"
          size={ButtonSizes.SMALL}
          onClick={(event) => {
            dispatch({ type: ActionTypes.CHANGE_STEP, payload: Step.GENERAL });
          }}
        >
          Previous
        </Button>

        <Button
          size={ButtonSizes.SMALL}
          type="button"
          onClick={(event) => {
            setStoredValue({
              ...storedValue,
              labels: labelsInputs.map((label) => ({
                ...label,
                id: label.labelId as number,
              })),
            });
            dispatch({
              type: ActionTypes.SET_PROJECT,
              payload: {
                ...state.projectDTO,
                labels: labelsInputs.map((label) => ({
                  ...label,
                  id: label.labelId as number,
                })),
              },
            });
            dispatch({ type: ActionTypes.CHANGE_STEP, payload: Step.IMAGES });
          }}
        >
          Next
        </Button>
      </div>
    </>
  );
};
