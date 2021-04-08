import React, { ComponentProps } from 'react'

import { Story } from '@storybook/react'

import { Card } from './Card'

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Card',
  component: Card,
}

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Card>> = (args) => (
  <Card {...args} />
)

export const FirstStory = Template.bind({})
FirstStory.args = {
  title: 'Title',
  subtitle: 'Subtitle',
  img: 'https://via.placeholder.com/200x100',
}
