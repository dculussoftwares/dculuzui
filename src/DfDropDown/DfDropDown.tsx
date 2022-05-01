import React, { forwardRef, ReactNode, useState } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import Select from 'react-select'
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
    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ];

    const targetHeight = 30;
    const focusColor = 'hsl(var(--pf))';
    const hoverColor = 'hsl(var(--b3))';
    const primaryBorderColor = 'hsl(var(--b3))';
    const customStyles = {
      option: (provided, state) => ({
        ...provided,
        borderRadius: 2,
        fontSize: 14
      }),
      input: (provided, state) => ({
        ...provided,
        margin: 0,
      }),

      control: (base, state) => ({
        ...base,

        fontSize: 14,
        minHeight: 'initial',
        borderRadius: 2,

        boxShadow: state.isFocused ? 0 : 0,
        borderColor: state.isFocused
          ? focusColor
          : primaryBorderColor,
        '&:hover': {
          borderColor: hoverColor,
        }
      }),

      valueContainer: base => ({
        ...base,
        height: `${targetHeight - 1 - 1}px`,
        padding: '0 8px',
      }),
      clearIndicator: base => ({
        ...base,
        padding: `${(targetHeight - 20 - 1 - 1) / 2}px`,
      }),
      dropdownIndicator: base => ({
        ...base,
        color: "var(--primary-color-icon)",
        padding: `${(targetHeight - 20 - 1 - 1) / 2}px`,
      }),
      menu: (provided, state) => ({
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

          <Select
            // className='react-select-container' classNamePrefix="react-select"
            defaultValue={selectedOption}
            // onChange={setSelectedOption}
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

          />
        </div>
      </div>
    )
  }
)

DfDropDown.displayName = "DfDropDown"

export default DfDropDown
