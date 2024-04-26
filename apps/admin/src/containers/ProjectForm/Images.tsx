import {
  ChangeEvent,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { IconCross } from "ui-react/src/icons/icon-cross";
import { Button } from "ui-react";
import { AuthContext } from "@/context/AuthContext";
import { fileService } from "@/services/file.service";

import type { Project } from "@/models/project.model";
import type { ProjectDto } from "./reducer";
import { ActionTypes, reducer } from "./reducer";
import { ProjectFormContext } from "./Context";
type ImageProps = {
  project: Partial<Project> | null;
  show: boolean;
};

export const Images = ({ show, project }: ImageProps) => {
  const { token } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [images, setImages] = useState<ProjectDto["images"]>(() => {
    if (project) {
      return project.images?.map((image) => ({ url: image.url }));
    } else {
      return [];
    }
  });
  const { state, dispatch } = useContext(ProjectFormContext);
  const handleDeleteImage = (url: string) => () => {
    setImages(images?.filter((file) => file.url !== url));
  };
  const handleFiles = async (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setLoading(true);
    const files = event.target.files;
    if (files) {
      try {
        const filesUploading: Promise<any>[] = [];
        for (let i = 0; i < files.length; i++) {
          const formData = new FormData();
          formData.append("image", files[i]);
          filesUploading.push(
            fileService.uploadFile(token as string, formData)
          );
        }
        const result = await Promise.all(filesUploading);
        if (images) {
          setImages([...images, ...result]);
        } else {
          setImages(result);
        }
      } catch (error) {
        setError("Something went wrong");
      }
    }
    setLoading(false);
  };
  useEffect(() => {
    dispatch({
      type: ActionTypes.SET_PROJECT,
      payload: {
        images: images?.map((image) => ({ url: image.url })),
      },
    });
  }, [show, images]);
  return (
    <div className={`flex ${show ? "" : "hidden"}`}>
      {loading && <p className="text-white">Loading Images</p>}
      {error && <p>{error}</p>}

      <form className="">
        <Button tag="label" className="mt-4">
          Upload File
          <input name="files" type="file" onChange={handleFiles} multiple />
        </Button>
      </form>
      <div className="flex gap-2 flex-wrap">
        {images?.map((image, i) => {
          return (
            <div className="relative   overflow-hidden" key={image.url}>
              <div
                onClick={handleDeleteImage(image.url)}
                className="w-8 absolute bg-black top-0 right-0 z-10 cursor-pointer"
              >
                <IconCross />
              </div>
              <img className="h-48 w-64" key={i} src={image.url} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
