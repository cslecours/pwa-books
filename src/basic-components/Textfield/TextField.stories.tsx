import React, { ComponentProps } from 'react'

import { Story } from '@storybook/react'

import { TextField } from './TextField'

//👇 This default export determines where your story goes in the story list
export default {
  title: 'TextField',
  component: TextField,
}

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof TextField>> = (args) => (
  <>
  <TextField {...args} />
  <br/>
  <br/>
  <TextField start={'🐱‍👤'} {...args} />
  <br/>
  <br/>
  <TextField end={'🐱‍👤'} {...args} />
  <br/>
  <br/>
  <TextField start={'🐱‍👤'} end={'🐱‍👤'} {...args} />
  </>
)

export const Default = Template.bind({})
Default.args = {
}
