import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import {
  IComponentBaseProps,
  ComponentBrandColors,
  ComponentSize,
} from '../types'

export type RadioGroupProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size'
> &
  IComponentBaseProps & {
    color?: ComponentBrandColors
    size?: ComponentSize
    options: string[]
    value?: string
    onChange?: any
  }

export type item = {
  value: string,
  label: string,
  disabled?: boolean
}

const RadioGroup = forwardRef<HTMLInputElement, RadioGroupProps>(
  ({ color, size, name, dataTheme, className, options, onChange, value, ...props }, ref): JSX.Element => {
    const classes = twMerge(
      'radio',
      className,
      clsx({
        [`radio-${size}`]: size,
        [`radio-${color}`]: color,
      })
    )
    const [$value, $setValue] = React.useState(value)
    let items: string[] = [
      "a", "b", "c", "d", "e"

    ]

    function onUpdate(e: any) {
      let val = e.target.value;
      $setValue(val)
      onChange(val)
      console.log("first", val)
    }

    return (
      <div className='flex flex-col'>
        {options.map((item, index) => {
          return (
            <label key={index} className='flex items-center mt-5'>
              <input
                ref={ref}
                className={classes}
                type="radio"
                checked={$value === item}
                // disabled={item.disabled}
                value={item}
                name={"opt-group"}
                onChange={onUpdate}
                data-theme={dataTheme}
              />
              <span className='pl-2.5'>{item}</span>
            </label>
          );
        })}
      </div>
    )
  }
)

RadioGroup.displayName = 'RadioGroup'

export default RadioGroup
