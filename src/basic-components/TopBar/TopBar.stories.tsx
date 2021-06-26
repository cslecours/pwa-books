import { ComponentProps } from 'react'

import { Story } from '@storybook/react'

import { TopBar } from './TopBar'

export default {
  title: 'TopBar',
  component: TopBar,
  argTypes: { onClick: { action: 'clicked' } },
}

const Template: Story<ComponentProps<typeof TopBar>> = (args) => (
  <>
    <h3>TopBar</h3>

    <TopBar {...args} />
  </>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Click',
}
