import {  TextareaHTMLAttributes } from "react";
import "ui-styles/src/text-area.css"


export interface TextAreaProps {
  label: string;
}

type NativeProps = TextareaHTMLAttributes<HTMLTextAreaElement>
export const TextArea = ({label,required,name,...props}:TextAreaProps & NativeProps) => {
  return (
    <div className="text-area">
      <textarea
      {...props}
        name={name}
        className="text-area-field"
        required={required}
        
      />
      <label className="text-area-label">{label} {required && "*"}</label>
    </div>
  );
};
