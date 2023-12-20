import { HTMLAttributes } from "react";



export interface TextAreaProps {
  hidden?: boolean;
  label: string;
  required?: boolean;
  name?:string
}

type NativeProps = HTMLAttributes<HTMLElement>
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
