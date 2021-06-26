import { ComponentProps } from 'react'

import { Story } from '@storybook/react'

import { LinkButton } from './LinkButton'

export default {
  title: 'LinkButton',
  component: LinkButton,
  argTypes: { onClick: { action: 'clicked' } },
}

const Template: Story<ComponentProps<typeof LinkButton>> = (args) => (
  <>
    <h3>Normal Button</h3>
    <LinkButton {...args} />
    &nbsp;
    <LinkButton {...args} variant="outline" />
    <h3>Disabled Button</h3>
    <LinkButton {...args} disabled />
  </>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Click',
}
