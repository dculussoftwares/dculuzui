import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps, ComponentColor, ComponentSize } from '../types'
import Form from '../Form'
import Input from '../Input'

export type InputFieldProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size' | 'color'
> &
  IComponentBaseProps & {
    bordered?: boolean
    borderOffset?: boolean
    size?: ComponentSize
    color?: ComponentColor,
    title?: string,
    require?: boolean,
    hint?: string
  }

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      value,
      placeholder,
      bordered = true,
      borderOffset,
      size,
      color,
      dataTheme,
      className,
      type,
      title,
      require,
      hint,
      ...props
    },
    ref
  ): JSX.Element => {
    return (
      <Form.Label
        title={title}
        require={require}
        hint={hint}
        className="flex flex-col items-start"
      >
        <Input
          {...props}
          value={value}
          ref={ref}
          type={type}
          placeholder={placeholder}
          data-theme={dataTheme}
          size={size}
          color={color}
          borderOffset={borderOffset}
          bordered={borderOffset}

        />
      </Form.Label>
    )
  }
)

InputField.displayName = 'InputField'

export default InputField
