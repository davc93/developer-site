import React, { useState, FormEventHandler, useContext } from "react";
import { labelService } from "@/services/label.service";
import { Label } from "@/models/label.model";
import { AuthContext } from "@/context/AuthContext";
import { useInputValue } from "@/hooks/useInputValue";
import { useFileInput } from "@/hooks/useFileInput";
import { Button, Input, Select } from "ui-react";

type LabelFormProps = {
  label: Label | null;
};

export const LabelForm = ({ label }: LabelFormProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const title = useInputValue(label?.title ?? "");
  const type = useInputValue(label?.type ?? "");
  const { loadingFile, fileError, file, handleFile } = useFileInput(
    "image",
    label?.image ?? null
  );
  const { token } = useContext(AuthContext);
  const handleSubmit: FormEventHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      if (label?.id) {
        const changes = {
          title: title.value,
          type: type.value,
          image: file.url,
        };
        await labelService.updateLabel(token as string, changes, label.id);
      } else {
        await labelService.createLabel(token as string, {
          title: title.value,
          type: type.value,
          image: file.url,
        });
      }
    } catch (error) {
      setError(`${error}`);
    }
    setLoading(false);
  };
  return (
    <form className="flex flex-col gap-8 max-w-md" onSubmit={handleSubmit}>
      <Input placeholder="Enter the label name" label="Title" name="title" {...title} />
      <Select placeholder="Select a label type"  {...type}>
        <option value="tech">Tech</option>
        <option value="other">Otro</option>
      </Select>
      <div className="flex justify-between items-center mt-4">
        <Button tag="label" className="">
          Upload image
          <input type="file" name="file" id="" onInput={handleFile} />
        </Button>
        <div className="h-20">

          {file && <img className="h-full" src={file} alt="" />}
        </div>
      </div>
      {fileError && <p>{fileError}</p>}
      {loadingFile && <p>Loading File...</p>}
      <Button className="self-end mt-8" type="submit">Submit</Button>
      {loading && <p>Loading</p>}
      {error && <p>{error}</p>}
    </form>
  );
};
