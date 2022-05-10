import React from 'react'
import { Story, Meta } from '@storybook/react'

import CheckboxField, { CheckboxFieldProps } from '.'

export default {
  title: 'Dculus/CheckboxField',
  component: CheckboxField,
} as Meta

export const Default: Story<CheckboxFieldProps> = (args) => {
  return <CheckboxField {...args} />
}

Default.args = {
  bordered: true,
  value:"checking"
}


export const Magnet: Story<CheckboxFieldProps> = (args) => {
  return <CheckboxField title='Some title'  value="checking" require={true} hint="Some hint" size='sm' {...args} />
}
export const SizeSm: Story<CheckboxFieldProps> = (args) => {
  return <CheckboxField size="sm" value="text-sm-size" color="magnet" {...args} />
}

export const WithoutBordered: Story<CheckboxFieldProps> = (args) => {
  return <CheckboxField size="sm" color="magnet" />
}
