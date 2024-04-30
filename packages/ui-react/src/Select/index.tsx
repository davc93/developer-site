import { SelectHTMLAttributes } from "react";
import "ui-styles/src/select.css";

type NativeProps = SelectHTMLAttributes<HTMLSelectElement>;

type SelectProps = { placeholder?: string; label?: string };
export const Select = ({
  children,
  className,
  label,
  placeholder,
  ...props
}: NativeProps & SelectProps) => {
  return (
    <label className="select-container">
      <span className="select__label">{label}</span>
      <select className={[className, "select"].join(" ")} {...props}>
        {placeholder && (
          <option value="" disabled selected>
            {placeholder}
          </option>
        )}
        {children}
      </select>
    </label>
  );
};
