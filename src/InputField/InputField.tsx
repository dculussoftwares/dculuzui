import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps, ComponentColor, ComponentSize } from '../types'

export type InputFieldProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size' | 'color'
> &
  IComponentBaseProps & {
    bordered?: boolean
    borderOffset?: boolean
    size?: ComponentSize
    color?: ComponentColor
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
      ...props
    },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      'input',
      className,
      clsx({
        [`input-${size}`]: size,
        [`input-${color}`]: color,
        [`focus:outline-offset-0`]: !borderOffset,
        'input-bordered': bordered,
      })
    )

    return (
      <input
        {...props}
        ref={ref}
        type={type}
        value={value}
        placeholder={placeholder}
        data-theme={dataTheme}
        className={classes}
      />
    )
  }
)

InputField.displayName = 'InputField'

export default InputField
