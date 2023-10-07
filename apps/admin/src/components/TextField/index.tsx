import { HTMLAttributes } from "react";

export enum TextFieldInputType {
  TEXT = "text",
  PASSWORD = "password",

}


export interface TextFieldProps {
  hidden?: boolean;
  label: string;
  required?: boolean;
  inputType?: TextFieldInputType;
  name?:string
}

type NativeProps = HTMLAttributes<HTMLInputElement>
export const TextField = ({label,required,inputType,name,...props}:TextFieldProps & NativeProps) => {
  return (
    <div className="input">
      <input
      {...props}
        name={name}
        type={inputType}
        className="input-field"
        required={required}
        
      />
      <label className="input-label">{label} {required && "*"}</label>
    </div>
  );
};
