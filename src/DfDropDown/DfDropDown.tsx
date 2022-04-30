import React, { forwardRef, ReactNode } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import {
  IComponentBaseProps,
} from '../types'

export type DfDropDownProps = 
  & React.HTMLAttributes<HTMLDivElement>
  & IComponentBaseProps 
  & {
    disabled?: Boolean
    responsive?: Boolean
}

const DfDropDown = forwardRef<HTMLDivElement, DfDropDownProps>(
  (
    {
      disabled = false,
      responsive = false,
      dataTheme,
      className,
      children,
      ...props
      },
      ref
  ): JSX.Element => {
    const classes = twMerge(
      clsx({
        responsive,
        }),
        className,
    )

    return (
      <div
        {...props}
        data-theme={dataTheme}
        className={classes}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

DfDropDown.displayName = "DfDropDown"

export default DfDropDown
