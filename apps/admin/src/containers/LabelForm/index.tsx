import { useState, FormEventHandler, useContext, ChangeEvent } from "react";
import { labelService } from "@/services/label.service";
import { Label } from "@/models/label.model";
import { AuthContext } from "@/context/AuthContext";
import { useInputValue } from "@/hooks/useInputValue";
import { Button, Input, Select } from "ui-react";
import { fileService } from "@/services/file.service";
import { useNavigate } from "react-router-dom";

type LabelFormProps = {
  label: Label | null;
};

export const LabelForm = ({ label }: LabelFormProps) => {
  const [image, setImage] = useState(label?.image ?? undefined);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const title = useInputValue(label?.title ?? "");
  const type = useInputValue(label?.type ?? "");
  const navigate = useNavigate();

  const { token } = useContext(AuthContext);
  const handleSubmit: FormEventHandler = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    if (label?.id) {
      try {
        const changes = {
          title: title.value,
          type: type.value,
          image,
        };
        await labelService.updateLabel(token as string, changes, label.id);
        navigate("/labels");
      } catch (error) {}
    } else {
      try {
        await labelService.createLabel(token as string, {
          title: title.value,
          type: type.value,
          image: image as string,
        });
        navigate("/labels");
      } catch (error) {}
    }
    setSubmitting(false);
  };
  const handleFile = async (event: ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    const target = event.target;
    const file = target.files?.item(0) as File;
    try {
      const formData = new FormData();
      formData.append("image", file);

      const image = await fileService.uploadFile(token as string, formData);
      setImage(image.url);
    } catch (error) {}
    setLoading(false);
  };
  return (
    <form className="flex flex-col gap-8 max-w-md" onSubmit={handleSubmit}>
      <Input
        placeholder="Enter the label name"
        label="Title"
        name="title"
        {...title}
      />
      <Select label="Label" placeholder="Select a label type" {...type}>
        <option value="tech">Tech</option>
        <option value="other">Otro</option>
      </Select>
      <div className="flex justify-between items-center mt-4">
        <Button tag="label" className="">
          Upload image
          <input type="file" name="file" id="" onInput={handleFile} />
        </Button>
        <div className="h-20">
          {image && <img className="h-full" src={image} alt="" />}
        </div>
      </div>
      {loading && <p>Loading File...</p>}
      <Button className="self-end mt-8" type="submit">
        Submit
      </Button>

      {submitting && <p>Loading</p>}
      {error && <p>{error}</p>}
    </form>
  );
};
