import clsx from 'clsx'
import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import {
  ComponentBrandColors,
  ComponentSize, IComponentBaseProps
} from '../types'


export type RadioGroupProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size'
> &
  IComponentBaseProps & {
    color?: ComponentBrandColors
    size?: ComponentSize
    options: string[],
    value?: string
  }

export type item = {
  value: string,
  label: string,
  disabled?: boolean
}

const RadioGroup = forwardRef<HTMLInputElement, RadioGroupProps>(
  ({ color, size, name, dataTheme, className, options, value, ...props }, ref): JSX.Element => {
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

    let items: item[] = [
      { value: "a", label: "Option 1" },
      { value: "b", label: "Option 2" },
      { value: "c", label: "Option 3" },
      { value: "d", label: "Option 4", disabled: true },
      { value: "e", label: "Option 5" }
    ]

    const [$value, $setValue] = React.useState(value)

    function onChange(e: any) {
      // console.log(value);
      let val = e.target.value;
      $setValue(val)
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
          {/* <ToggleGroup items={items} name="opt-group" value="c" className="radio-group" onUpdate={onChange} classes={classes} /> */}


          <div >
            {items.map(item => {
              return (
                <label key={item.value}>
                  <input
                    className={classes}
                    type="radio"
                    checked={$value === item.value}
                    disabled={item.disabled}
                    value={item.value}
                    name={"opt-group"}
                    onChange={onChange}
                  />
                  <span>{item.label}</span>
                </label>
              );
            })}
          </div>

        </div>
      </>
    )
  }
)

RadioGroup.displayName = 'Radio'

export default RadioGroup
