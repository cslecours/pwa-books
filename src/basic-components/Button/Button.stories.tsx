import { ComponentProps } from 'react'

import { Story } from '@storybook/react'

import { Button } from './Button'

export default {
  title: 'Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
}

const Template: Story<ComponentProps<typeof Button>> = (args) => (
  <>
  <h3>Normal Button</h3>
  
  <Button {...args} />
  &nbsp;
  <Button {...args} variant="outline" />
  
  <h3>Disabled Button</h3>
  <Button {...args} disabled />
  </>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Click',
}
