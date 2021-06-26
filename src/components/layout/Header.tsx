import { TopBar } from '../../basic-components/TopBar/TopBar'
import { Typography } from '../../basic-components/Typography/Typography'
import { ReactComponent as CrewMate } from '../../icons/crewmate.svg'

export const Header: React.FC = ({ children }) => (
  <TopBar
    logo={
      <Typography variant="h1">
        <a href={'/'}>Book Pages</a>
      </Typography>
    }
    userContext={<CrewMate fill="#ffffff" />}
  >
    {children}
  </TopBar>
)
