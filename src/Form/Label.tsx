import React from 'react'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> &
  IComponentBaseProps & {
    title?: string,
    require?: boolean
  }

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, title, require, dataTheme, className, ...props }, ref): JSX.Element => {
    const classes = twMerge('label', className)

    return (
      <label {...props} className={classes}>
        <span className="label-text cursor-pointer flex" ref={ref}>
          {title}{require && <div className="ml-1">*</div>}
        </span>
        {children}
      </label>
    )
  }
)

export default Label
