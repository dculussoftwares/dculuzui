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
    <Form>
      <RadioGroup {...args} name="radio1" />
    </Form>
  )
}

export const Default = Template.bind({})
Default.args = {
  options: [
    "a", "b", "c", "d", "e"
  ]
}

export const WithOptions = Template.bind({})
WithOptions.args = {
  options: [
    "a", "b", "c", "d", "e"
  ],
  value: "a"

}

export const NoOptions = Template.bind({})
NoOptions.args = {

}

export const PrimaryColor = Template.bind({})
PrimaryColor.args = {
  color: 'primary', options: [
    "a", "b", "c", "d", "e"

  ]
}

export const SecondaryColor = Template.bind({})
SecondaryColor.args = {
  color: 'secondary', options: [
    "a", "b", "c", "d", "e"

  ]
}

export const AccentColor = Template.bind({})
AccentColor.args = {
  color: 'accent', options: [
    "a", "b", "c", "d", "e"

  ]
}

// export const Disabled = Template.bind({})
// Disabled.args = { disabled: true }

// export const WithLabelsAndForm: Story<RadioGroupProps> = (args) => {
//   return (
//     <div className="bg-base-200 w-1/4 p-4 rounded-lg shadow">
//       <Form>
//         <Form.Label title="Red Pill">
//           <RadioGroup
//             {...args}
//             name="radio1"
//             className="checked:bg-red-500"
//             defaultChecked
//           />
//         </Form.Label>
//       </Form>
//       <Form>
//         <Form.Label title="Blue Pill">
//           <RadioGroup
//             {...args}
//             name="radio1"
//             className="checked:bg-blue-500"
//             defaultChecked
//           />
//         </Form.Label>
//       </Form>
//     </div>
//   )
// }
