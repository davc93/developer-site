import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Checkbox, TextArea } from "ui-react";
import { Input } from "ui-react";
import { useCheckbox } from "@/hooks/useCheckbox";
import { useInputValue } from "@/hooks/useInputValue";
import type { Project } from "@/models/project.model";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Button, ButtonSizes } from "ui-react";
import { ProjectFormContext } from "./Context";
import { ActionTypes, Step } from "./reducer";
type GeneralProps = {
  project: Partial<Project> | null;
  show: boolean;
};

export const General = ({ show, project }: GeneralProps) => {
  const { dispatch, state } = useContext(ProjectFormContext);
  const description = useInputValue(project?.description ?? "");
  const link = useInputValue(project?.link ?? "");
  const repository = useInputValue(project?.repository ?? "");
  const slug = useInputValue(project?.slug ?? "");
  const shortDescription = useInputValue(project?.shortDescription ?? "");
  const publishedInput = useCheckbox(project?.published ?? true);
  const title = useInputValue(project?.title ?? "");
  useEffect(() => {
    dispatch({
      type: ActionTypes.SET_PROJECT,
      payload: {
        title: title.value,
        description: description.value,
        link: link.value,
        repository: repository.value,
        slug: slug.value,
        shortDescription: shortDescription.value,
        published: publishedInput.checked,
      },
    });
  }, [show]);

  return (
    <form className={`flex gap-16 justify-between ${show ? "" : "hidden"}`}>
      <div className="">
        <Input name="title" label="Title" {...title} />
        <Input
          name="shortDescription"
          label="ShortDescription"
          {...shortDescription}
        />
        <Input name="link" label="Link" {...link} />
        <Input name="repository" label="Repository" {...repository} />

        <Checkbox name="published" {...publishedInput}>
          Published
        </Checkbox>

        <Input name="slug" label="Slug" {...slug} />
      </div>
      <div className="w-full">
        <TextArea
          className="h-full"
          name="description"
          label="description"
          {...description}
        />
      </div>
    </form>
  );
};
