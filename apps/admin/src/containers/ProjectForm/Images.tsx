import React, { useContext, useEffect, useReducer } from "react";
import { ActionTypes, initialState, reducer } from "./reducer";
import { useMultiFile } from "../../hooks/useMultiFile";
import { Project } from "../../models/project.model";
import { ProjectFormContext } from "./Context";
type ImageProps = {
  project: Partial<Project> | null;
};

export const Images = (props: ImageProps) => {
  const {state,dispatch} = useContext(ProjectFormContext)
  const { loadingFiles, errorFiles, files, handleFiles } = useMultiFile(
    "image",
    props.project?.images
  );
  useEffect(() => {
    dispatch({type:ActionTypes.SET_PROJECT,payload:{
      ...state.projectDTO,
      images:files?.map((file:any)=>file.url)
    }})
    
  
  }, [files])
  
  return (
    
    <div className="flex h-4/5 overflow-y-scroll">
      <form className="w-full">
        <div className="input-group">
          {loadingFiles && <p className="text-white">Loading Images</p>}
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
      </form>
    </div>
  );
};
