import "ui-styles/src/error.css"
import { ErrorIcon } from "@/Icons/ErrorIcon";
type ErrorProps = {
  text: string;
};

export const Error = ({ text }: ErrorProps) => {
  return (
    <div className="error">
      <span className="error__text">{text}</span>
      <div className="error__icon">
        <ErrorIcon />        
      </div>
    </div>
  );
};
