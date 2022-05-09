import React from 'react'
import { Story, Meta } from '@storybook/react'

import InputField, { InputFieldProps } from '.'

export default {
  title: 'Dculus/InputField',
  component: InputField,
} as Meta

export const Default: Story<InputFieldProps> = (args) => {
  return <InputField {...args} />
}

Default.args = {
  bordered: true,
}


export const Magnet: Story<InputFieldProps> = (args) => {
  return <InputField color="magnet" {...args} />
}
export const SizeSm: Story<InputFieldProps> = (args) => {
  return <InputField size="sm" value="text-sm-size" color="magnet" {...args} />
}

export const WithoutBordered: Story<InputFieldProps> = (args) => {
  return <InputField size="sm" color="magnet" />
}
