import { IconError } from "../icons/icon-error";
import {  InputHTMLAttributes } from "react";
import "ui-styles/src/input.css"


export interface InputProps {
  label: string;
  error?:string;
}

type NativeProps = InputHTMLAttributes<HTMLInputElement>
export const Input = ({label,error,...props}:InputProps & NativeProps) => {
  return (
    <label className="input-container">
      <span className="input__label">{label}</span>

      <input
      
      {...props}
        className="input"
        
      />
      {error && (
        <div className="error-message">
        <div className="error-message__icon-container">

          <IconError />
        </div>
        <span className="error-message__text">
          
          {error}
        </span>
      </div>
      )}
      
    </label>
  );
};

