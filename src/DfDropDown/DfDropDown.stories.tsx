import React from 'react'
import { Story, Meta } from '@storybook/react'

import DfDropDown, { DfDropDownProps } from '.'

const meta: Meta = {
  title: `Dculus/DfDropDown`,
  component: DfDropDown,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta

const Template: Story = ({ children, ...rest}) => <DfDropDown {...rest}>{children}</DfDropDown>;

export const Default = Template.bind({})
Default.args = {}

export const Disabled: Story<DfDropDownProps> = (args) => {
  return (

      
      <DfDropDown {...args} disabled={true}>Disabled</DfDropDown>
  )
}
export const Responsive: Story<DfDropDownProps> = (args) => {
  return (

      
      <DfDropDown {...args} responsive={true}>Responsive</DfDropDown>
  )
}
