import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import {
  IComponentBaseProps,
  ComponentBrandColors,
  ComponentSize,
} from '../types'
import { ToggleGroup } from './ToggleGroup'

export type RadioGroupProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size'
> &
  IComponentBaseProps & {
    color?: ComponentBrandColors
    size?: ComponentSize
    options: string[],
  }

const RadioGroup = forwardRef<HTMLInputElement, RadioGroupProps>(
  ({ color, size, name, dataTheme, className, options, ...props }, ref): JSX.Element => {
    const classes = twMerge(
      'radio',
      className,
      clsx({
        [`radio-${size}`]: size,
        [`radio-${color}`]: color,
      })
    )

    const onChangeValue = (event: any) => {
      console.log(event.target.value);
    };

    let items = [
      { value: "a", label: "Option 1" },
      { value: "b", label: "Option 2" },
      { value: "c", label: "Option 3" },
      { value: "d", label: "Option 4", disabled: true },
      { value: "e", label: "Option 5" }
  ]
  
  function onChange(value) {
     console.log(value); 
  }

    return (
      <>
        <div onChange={onChangeValue}>
          {options && options.map((option, index) => {
            return <label key={index} className="radio-child">
              <input
                value={option}
                {...props}
                ref={ref}
                type="radio"
                name={name}
                data-theme={dataTheme}
                className={classes}
              />
              {option}
            </label>
          })}
          <ToggleGroup items={items} name="opt-group" value="c" className="radio-group" onUpdate={onChange}  classes={classes}/>
        </div>
      </>
    )
  }
)

RadioGroup.displayName = 'Radio'

export default RadioGroup
