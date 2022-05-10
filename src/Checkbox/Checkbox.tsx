import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import {
  IComponentBaseProps,
  ComponentBrandColors,
  ComponentSize,
} from '../types'

export type CheckboxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size'
> &
  IComponentBaseProps & {
    color?: ComponentBrandColors
    size?: ComponentSize
    indeterminate?: boolean
    marginTop?:number
  }

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      checked,
      defaultChecked = false,
      color,
      size,
      indeterminate,
      dataTheme,
      className,
      value,
      marginTop,
      ...props
    },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      'checkbox',
      'shadow-none',
      'outline-none',
      className,
      clsx({
        [`checkbox-${size}`]: size,
        [`checkbox-${color}`]: color,
      })
    )  
    
    const baseClasses = twMerge(
      'flex items-center',
      clsx({
        [`mt-${marginTop}`]: marginTop
      
      })
      
    )

    const checkboxRef = useRef<HTMLInputElement>(null)
    useImperativeHandle(ref, () => checkboxRef.current as HTMLInputElement)

    useEffect(() => {
      if (!checkboxRef.current) {
        return
      }

      if (indeterminate) {
        checkboxRef.current.indeterminate = true
      } else {
        checkboxRef.current.indeterminate = false
      }
    }, [indeterminate])

    return (
      <div className="flex items-center">
        <input
          {...props}
          ref={checkboxRef}
          type="checkbox"
          checked={checked}
          defaultChecked={defaultChecked}
          data-theme={dataTheme}
          className={classes}
        />
        <p className='ml-2'>{value}</p>
      </div>

    )
  }
)

Checkbox.displayName = 'Checkbox'

export default Checkbox
