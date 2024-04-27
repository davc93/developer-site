import { SelectHTMLAttributes } from "react"
import "ui-styles/src/select.css"


type NativeProps = SelectHTMLAttributes<HTMLSelectElement>

export const Select = ({children,className,placeholder,...props}:NativeProps & {placeholder?:string}) => {
  return (

    <select className={[className,"select"].join(" ")} {...props}>
        {placeholder && (<option value="" disabled selected>{placeholder}</option>)}
        {children}
    </select>
  )
}
