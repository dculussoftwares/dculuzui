import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps, ComponentColor, ComponentSize, ComponentBrandColors } from '../types'
import Form from '../Form'
import Input from '../Input'
import Checkbox from '../Checkbox'

export type CheckboxFieldProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size' | 'color'
> &
  IComponentBaseProps & {

    size?: ComponentSize
    color?: ComponentBrandColors,
    title?: string,
    require?: boolean,
    hint?: string,
    indeterminate?: boolean,
    value?: string
  }

const CheckboxField = forwardRef<HTMLInputElement, CheckboxFieldProps>(
  (
    {
      value,
      indeterminate,
      size,
      color,
      dataTheme,
      className,
      type,
      title,
      require,
      hint,
      defaultChecked = false,
      ...props
    },
    ref
  ): JSX.Element => {
    // const classes = twMerge(
    //   'input',
    //   className,
    //   clsx("mt-2", {
    //     [`input-${size}`]: size,
    //     [`input-${color}`]: color,
    //     [`focus:outline-offset-0`]: !borderOffset,
    //     'input-bordered': bordered
    //   })
    // )

    // const classes = twMerge(
    //   'checkbox',
    //   className,
    //   clsx("mt-2", {
    //     [`checkbox-${size}`]: size,
    //     [`checkbox-${color}`]: color,
    //   })
    // )

    return (
      <Form.Label
        title={title}
        require={require}
        hint={hint}
        className="flex flex-col items-start"
      >
        <Checkbox
          {...props}
          value={value}
          ref={ref}
          type={type}
          data-theme={dataTheme}
          marginTop={2}
          // className={classes}
          size={size}
          color={color}
          defaultChecked={defaultChecked}
          indeterminate={indeterminate}
        />
      </Form.Label>
    )
  }
)

CheckboxField.displayName = 'CheckboxField'

export default CheckboxField
