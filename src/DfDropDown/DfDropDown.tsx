import React, { forwardRef, ReactNode, useState } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import Select, { OnChangeValue } from 'react-select'
import "./DfDropDown.css"


import {
  IComponentBaseProps,
} from '../types'

export type DfDropDownProps =
  & React.HTMLAttributes<HTMLDivElement>
  & IComponentBaseProps
  & {
    disabled?: Boolean
    responsive?: Boolean
    defaultValue?: string
    onChange?: (newValue: any) => void;
    option?: string[]
  }

const DfDropDown = forwardRef<HTMLDivElement, DfDropDownProps>(
  (
    {
      disabled = false,
      responsive = false,
      dataTheme,
      className,
      children,
      defaultValue,
      onChange,

      option,
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
    const [selectedOption, setSelectedOption] = useState(defaultValue);

    const options = option?.map((o: string) => {
      return { value: o.toLowerCase(), label: o }
    })

    const defaultValueObject = options?.filter(((o: any) => o.label == defaultValue))
    const _defaultValue = defaultValueObject && defaultValueObject[0] ? defaultValueObject[0] : ""
    const targetHeight = 30;
    const focusColor = 'hsl(var(--pf))';
    const hoverColor = 'hsl(var(--b3))';
    const primaryBorderColor = 'hsl(var(--b3))';
    const customStyles = {
      option: (provided: any, state: any) => ({
        ...provided,
        borderRadius: 2,
        fontSize: 14
      }),
      input: (provided: any, state: any) => ({
        ...provided,
        margin: 0,
      }),

      control: (base: any, state: any) => ({
        ...base,

        fontSize: 14,
        minHeight: 'initial',
        borderRadius: "var(--rounded-btn, 0.5rem)",
        borderWidth: "0.5px",

        boxShadow: state.isFocused ? 0 : 0,
        // borderColor: "hsl(var(--bc) / var(--tw-border-opacity))",
        borderColor: "hsla(var(--bc) / 0.2)",
        '&:hover': {
          // borderColor: "hsl(var(--bc) / var(--tw-border-opacity))",
          borderColor: hoverColor,
          outline: "2px solid hsla(var(--bc) / 0.2)"
        },
        outline: state.isFocused ? "2px solid hsla(var(--bc) / 0.2)" : "0.5px solid hsla(var(--bc) / 0.2)"

      }),

      valueContainer: (base: any) => ({
        ...base,
        height: `${targetHeight - 1 - 1}px`,
        padding: '0 8px',
      }),
      clearIndicator: (base: any) => ({
        ...base,
        padding: `${(targetHeight - 20 - 1 - 1) / 2}px`,
      }),
      dropdownIndicator: (base: any) => ({
        ...base,
        color: "var(--primary-color-icon)",
        padding: `${(targetHeight - 20 - 1 - 1) / 2}px`,
      }),
      menu: (provided: any, state: any) => ({
        ...provided,
        borderRadius: 2
      }),
    };

    return (
      <div className='dum'>
        <div
          {...props}
          data-theme={dataTheme}
          className={classes}
          ref={ref}
        >
          {defaultValueObject && defaultValueObject.length > 0 ? < Select
            // className='react-select-container' classNamePrefix="react-select"
            defaultValue={_defaultValue}
            onChange={onChange}
            // onSelect={(e) => {

            // }}

            options={options}
            styles={customStyles}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: "hsl(var(--b3))",
                primary50: "hsl(var(--b3))",
                primary75: "hsl(var(--b3))",
                primary: "hsl(var(--p))",
                neutral30: "hsl(var(--p))",
                neutral20: "hsl(var(--b3))",
              },
            })}

          /> : <p>No options avialble</p>}

        </div>
      </div>
    )
  }
)

DfDropDown.displayName = "DfDropDown"

export default DfDropDown
