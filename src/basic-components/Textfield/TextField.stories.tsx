import React, { ComponentProps } from 'react'

import { Story } from '@storybook/react'

import { TextField } from './TextField'

//π This default export determines where your story goes in the story list
export default {
  title: 'TextField',
  component: TextField,
}

//π We create a βtemplateβ of how args map to rendering
const Template: Story<ComponentProps<typeof TextField>> = (args) => (
  <>
  <TextField {...args} />
  <br/>
  <br/>
  <TextField start={'π±βπ€'} {...args} />
  <br/>
  <br/>
  <TextField end={'π±βπ€'} {...args} />
  <br/>
  <br/>
  <TextField start={'π±βπ€'} end={'π±βπ€'} {...args} />
  </>
)

export const Default = Template.bind({})
Default.args = {
}
