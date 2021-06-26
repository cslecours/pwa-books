import { ComponentProps } from 'react'

import { Story } from '@storybook/react'

import { TopBar } from './TopBar'
import { Typography } from '../Typography/Typography'

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
  logo: (
    <Typography variant="h1">
      <a href="">Click</a>
    </Typography>
  ),
  userContext: 'ALLO',
  children: (
    <ul>
      <li>
        <a href="#">Menu</a>
      </li>
      <li>
        <a href="#" className="active">
          Active
        </a>
      </li>
    </ul>
  ),
}
