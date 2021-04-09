import React, { ComponentProps } from 'react'

import { Story } from '@storybook/react'

import { Typography } from './Typography'

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Typography',
  component: Typography,
}

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Typography>> = (args) => (
  <>
  <h3>Headings</h3>
  <Typography {...args} variant="h1" />
  <Typography {...args} variant="h2" />
  <Typography {...args} variant="h3" />
  <Typography {...args} variant="h4" />
  <Typography {...args} variant="h5" />
  <Typography {...args} variant="h6" />
  <hr/>
  <h3>Paragraph:</h3>
  <Typography {...args} variant="span" />
  </>
)

export const Default = Template.bind({})
Default.args = {
  children: "The quick brown fox jumps over the lazy dog."
}
