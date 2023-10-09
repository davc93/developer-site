import React, { useContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "./reducer";
import { useMultiFile } from "../../hooks/useMultiFile";
import { Project } from "../../models/project.model";
type ImageProps = {
  project: Partial<Project> | null;
};

export const Images = (props: ImageProps) => {

  const { loadingFiles, errorFiles, files, handleFiles } = useMultiFile(
    "image",
    props.project?.images
  );
  return (
    
    <div className="flex h-4/5 overflow-y-scroll">
      <form className="w-full">
        <div className="input-group">
          {loadingFiles && <p>Loading Images</p>}
          {errorFiles && <p>{errorFiles}</p>}
          <div className="flex gap-2 flex-wrap">
            {files?.map((file: any) => {
              return (
                <div className="h-48 w-64 overflow-hidden" key={file.url}>
                  <img
                    className=""
                    key={file.public_id}
                    src={file.url}
                    alt=""
                  />
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
    </div>
  );
};
