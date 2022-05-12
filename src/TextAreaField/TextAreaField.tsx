import React, { forwardRef } from 'react'
import Form from '../Form'
import Textarea from '../Textarea'
import { ComponentColor, ComponentSize, IComponentBaseProps } from '../types'


// export type TextAreaFieldProps = Omit<
//   React.InputHTMLAttributes<HTMLInputElement>,
//   'size' | 'color'
// > &
//   IComponentBaseProps & {
//     bordered?: boolean
//     borderOffset?: boolean
//     size?: ComponentSize
//     color?: ComponentColor,
//     title?: string,
//     require?: boolean,
//     hint?: string
//   }

export type TextAreaFieldProps = Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  'color'
> &
  IComponentBaseProps & {
    color?: ComponentColor
    bordered?: boolean
    borderOffset?: boolean
    size?: ComponentSize

    title?: string,
    require?: boolean,
    hint?: string
  }

const TextAreaField = forwardRef<HTMLInputElement, TextAreaFieldProps>(
  (
    {
      value,
      placeholder,
      bordered = true,
      borderOffset,
      size,
      color,
      dataTheme,
      className,
      title,
      require,
      hint,
      ...props
    },
    ref
  ): JSX.Element => {
    return (
      <Form.Label
        title={title}
        require={require}
        hint={hint}
        className="flex flex-col items-start"
      >
        <Textarea
          {...props}
          value={value}
          placeholder={placeholder}
          data-theme={dataTheme}
          color={color}
          borderOffset={borderOffset}
          bordered={borderOffset}
        />
      </Form.Label>
    )
  }
)

TextAreaField.displayName = 'TextAreaField'

export default TextAreaField
