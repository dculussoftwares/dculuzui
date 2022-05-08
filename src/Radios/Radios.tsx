import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import {
  IComponentBaseProps,
  ComponentBrandColors,
  ComponentSize,
} from '../types'

export type RadiosProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size'
> &
  IComponentBaseProps & {
    color?: ComponentBrandColors
    size?: ComponentSize
    options: string[]
    value?: string
  }

export type item = {
  value: string,
  label: string,
  disabled?: boolean
}

const Radios = forwardRef<HTMLInputElement, RadiosProps>(
  ({ color, size, name, dataTheme, className, options, value, ...props }, ref): JSX.Element => {
    const classes = twMerge(
      'radio',
      className,
      clsx({
        [`radio-${size}`]: size,
        [`radio-${color}`]: color,
      })
    )
    const [$value, $setValue] = React.useState(value)
    let items: item[] = [
      { value: "a", label: "Option 1" },
      { value: "b", label: "Option 2" },
      { value: "c", label: "Option 3" },
      { value: "d", label: "Option 4", disabled: true },
      { value: "e", label: "Option 5" }
    ]

    function onChange(e: any) {
      // console.log(value);
      let val = e.target.value;
      $setValue(val)
    }

    return (
      <div >
        {items.map(item => {
          return (
            <label key={item.value}>
              <input
                ref={ref}
                className={classes}
                type="radio"
                checked={$value === item.value}
                disabled={item.disabled}
                value={item.value}
                name={"opt-group"}
                onChange={onChange}
                data-theme={dataTheme}
              />
              <span>{item.label}</span>
            </label>
          );
        })}
      </div>
    )
  }
)

Radios.displayName = 'Radios'

export default Radios
