import React, { ComponentProps } from 'react'

import { Story } from '@storybook/react'

import { Card } from './Card'
import { Button } from '../Button/Button'

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Card',
  component: Card,
}

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Card>> = (args) => (
  <>
    <Card {...args} />
    <br />
    <Card
      {...args}
      thumbnail={<img src={'https://via.placeholder.com/44x44'} />}
    />
    <br />
    <Card
      {...args}
      thumbnail={<img src={'https://via.placeholder.com/44x44'} />}
      mediaContent={<img src={'https://via.placeholder.com/150x100'} />}
    />
    <br/>
    <Card
      {...args}
      mediaContent={<img src={'https://via.placeholder.com/150x100'} />}
    />
    <br/>
    <Card
      {...args}
      mediaContent={<img src={'https://via.placeholder.com/150x100'} />}
      actions={<><Button>Action 1</Button> <Button variant="outline">Action 2</Button></>}
    />
  </>
)

export const Default = Template.bind({})
Default.args = {
  title: 'Card title',
  secondary: 'Secondary text',
}
