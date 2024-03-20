import {  InputHTMLAttributes } from "react";
import "ui-styles/src/input.css"


export interface InputProps {
  label: string;
}

type NativeProps = InputHTMLAttributes<HTMLInputElement>
export const Input = ({label,required,...props}:InputProps & NativeProps) => {
  return (
    <label className="input-container">
      <input
      
      {...props}
        className="input"
        
      />
      <label className="input__label">{label} {required && "*"}</label>
    </label>
  );
};
