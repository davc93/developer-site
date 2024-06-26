import { ButtonSizes, ButtonVariant } from '../button'
import React, { InputHTMLAttributes } from 'react'

type FileInputProps = {
    variant?:ButtonVariant,
    inputSize?:ButtonSizes
}

type NativeProps = InputHTMLAttributes<HTMLInputElement>
export const FileInput = ({inputSize = ButtonSizes.LARGE,variant = ButtonVariant.PRIMARY}:NativeProps & FileInputProps) => {
  return (
    <label htmlFor="" className={[inputSize,variant].join(" ")}>
        <input type='file'  />
    </label>
  )
}
