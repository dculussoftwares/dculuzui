import React, { forwardRef, ReactNode, useState } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import Select from 'react-select'


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
    return (
      <div
        {...props}
        data-theme={dataTheme}
        className={classes}
        ref={ref}
      >
        <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
      </div>
    )
  }
)

DfDropDown.displayName = "DfDropDown"

export default DfDropDown
