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

export const Default = Template.bind({})
Default.args = {}

export const PrimaryColor = Template.bind({})
PrimaryColor.args = { color: 'primary' }

export const SecondaryColor = Template.bind({})
SecondaryColor.args = { color: 'secondary' }

export const AccentColor = Template.bind({})
AccentColor.args = { color: 'accent' }

export const Disabled = Template.bind({})
Disabled.args = { disabled: true }
