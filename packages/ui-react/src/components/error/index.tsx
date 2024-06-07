import "ui-styles/src/error.css";
import { IconError } from "../../icons/icon-error";
import { HTMLAttributes } from "react";
type ErrorProps = HTMLAttributes<HTMLSpanElement>;

export const Error = ({ children }: ErrorProps) => {
  return (
    <div className="error-container">
      {children ? (
        <div className="error">
          <span className="error__text">{children}</span>
          <div className="error__icon">
            <IconError />
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
