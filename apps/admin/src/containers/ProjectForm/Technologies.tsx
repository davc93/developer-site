import { useState, useEffect, useContext } from "react";
import { Button, ButtonSizes, Select } from "ui-react";
import { Project } from "@/models/project.model";
import { labelService } from "@/services/label.service";
import type { Label } from "@/models/project.model";
import type { FormEventHandler } from "react";
import { ProjectFormContext } from "./Context";
import { ActionTypes, Step } from "./reducer";

type TechnologiesProps = {
  project: Partial<Project> | null;
  show: boolean;
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

export const Technologies = ({ project, show }: TechnologiesProps) => {
  const { labels } = useGetLabels();
  const { dispatch, state } = useContext(ProjectFormContext);

  const { handleAddLabel, handleInputChange, handleRemoveLabel, labelsInputs } =
    useLabelsInputs(project);

  useEffect(() => {
    dispatch({
      type: ActionTypes.SET_PROJECT,
      payload: {
        labels: labelsInputs.map(({inputId,labelId,order }) => ({
          order:order as number ,
          labelId:labelId as number
        })),
      },
    });

  }, [show]);
  return (
    <form className={`flex flex-col w-fit mb-4 ${show ? "" : "hidden"}`}>
      <div className="self-end mb-4">
        <Button type="button" size={ButtonSizes.SMALL} onClick={handleAddLabel}>
          Add
        </Button>
      </div>
      <div className="flex w-fit flex-col gap-8">
        {labelsInputs.map((labelInput) => {
          return (
            <div className="flex  gap-4 items-center" key={labelInput.inputId}>
              <div className="input-group">
                <Select
                  value={labelInput.labelId ?? ""}
                  name=""
                  id={`labelId-${labelInput.inputId}`}
                  onInput={handleInputChange}
                  placeholder={"Select a label"}
                  disabled={labels.length == 0}
                >
                  {labels.map((label) => {
                    return (
                      <option key={label.id} value={label.id}>
                        {label.title}{" "}
                      </option>
                    );
                  })}
                </Select>
              </div>
              <div className="input-group">
                <Select
                  value={labelInput.order ?? ""}
                  name=""
                  id={`order-${labelInput.inputId}`}
                  onInput={handleInputChange}
                  placeholder="Choose the order"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => {
                    return (
                      <option key={number} value={number}>
                        {number}
                      </option>
                    );
                  })}
                </Select>
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
  );
};
