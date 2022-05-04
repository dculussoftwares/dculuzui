import React from 'react'
import { Story, Meta } from '@storybook/react'

import Input, { InputProps } from '.'

export default {
  title: 'Data Input/Input',
  component: Input,
} as Meta

export const Default: Story<InputProps> = (args) => {
  return <Input {...args} />
}

Default.args = {
  bordered: true,
}


export const Magnet: Story<InputProps> = (args) => {
  return <Input color="magnet" {...args} />
}
export const SizeSm: Story<InputProps> = (args) => {
  return <Input size="sm" value="text-sm-size" color="magnet" {...args} />
}
