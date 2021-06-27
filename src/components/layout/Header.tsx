import React from 'react'
import { IconButton } from '../../basic-components/IconButton/IconButton'
import { TopBar } from '../../basic-components/TopBar/TopBar'
import { Typography } from '../../basic-components/Typography/Typography'
import { ReactComponent as CrewMate } from '../../icons/crewmate.svg'

export const Header: React.FC<ClassNameProp> = ({ className, children }) => (
  <TopBar
    className={className}
    logo={
      <Typography variant="h1">
        <a href={'/'}>Book Pages</a>
      </Typography>
    }
    userContext={
      <IconButton size="medium" variant="borderless">
        <CrewMate />
      </IconButton>
    }
  >
    {children}
  </TopBar>
)
