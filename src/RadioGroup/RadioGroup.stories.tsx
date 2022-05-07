import React from 'react'
import { Story, Meta } from '@storybook/react'

import RadioGroup, { RadioGroupProps } from '.'
import Form from '../Form'

export default {
  title: 'Data Input/RadioGroup',
  component: RadioGroup,
} as Meta

const Template: Story<RadioGroupProps> = (args) => {
  return (
    <RadioGroup
      options={[
        'Chocolate', 'Strawberry', 'Vanilla'
      ]}
    ></RadioGroup>

  )
}

export const PrimaryColor = Template.bind({})
PrimaryColor.args = { color: 'primary' }
