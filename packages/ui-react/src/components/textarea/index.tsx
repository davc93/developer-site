import { TextareaHTMLAttributes } from "react";
import "ui-styles/src/text-area.css";

export interface TextAreaProps {
  label: string;
}

type NativeProps = TextareaHTMLAttributes<HTMLTextAreaElement>;
export const TextArea = ({ label,className, ...props }: TextAreaProps & NativeProps) => {
  return (
    <div className="text-area-container">
      <label className="text-area__label">{label} </label>
      <textarea {...props} className={[className,"text-area"].join(" ")} />
    </div>
  );
};
