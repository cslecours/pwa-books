import { ComponentProps } from 'react'

import { Story } from '@storybook/react'

import { IconButton } from './IconButton'
import { ReactComponent as CrewMate } from '../../icons/crewmate.svg'
export default {
  title: 'IconButton',
  component: IconButton,
  argTypes: { onClick: { action: 'clicked' } },
}

const Template: Story<ComponentProps<typeof IconButton>> = (args) => (
  <>
    <h3>Normal Button</h3>
    <IconButton {...args} size="small" />
    <IconButton {...args} size="medium" />
    <IconButton {...args} size="large" />
    &nbsp;
    <IconButton {...args} size="small" variant="borderless" />
    <IconButton {...args} size="medium" variant="borderless" />
    <IconButton {...args} size="large" variant="borderless" />
    <h3>Disabled Button</h3>
    <IconButton {...args} disabled />
  </>
)

export const Default = Template.bind({})
Default.args = {
  children: <CrewMate />,
}
