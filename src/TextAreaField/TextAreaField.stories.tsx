import React from 'react'
import { Story, Meta } from '@storybook/react'

import TextAreaField, { TextAreaFieldProps } from '.'

export default {
  title: 'Dculus/TextAreaField',
  component: TextAreaField,
} as Meta

export const Default: Story<TextAreaFieldProps> = (args) => {
  return <TextAreaField {...args} />
}

Default.args = {
  bordered: true,
}


export const Magnet: Story<TextAreaFieldProps> = (args) => {
  return <TextAreaField title='Some title' require={true} hint="Some hint" size='sm' color="magnet" {...args} />
}
export const SizeSm: Story<TextAreaFieldProps> = (args) => {
  return <TextAreaField size="sm" value="text-sm-size" color="magnet" {...args} />
}

export const WithoutBordered: Story<TextAreaFieldProps> = (args) => {
  return <TextAreaField size="sm" color="magnet" />
}
