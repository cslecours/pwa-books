import { Typography } from '../../basic-components/Typography/Typography'
import styles from './Header.module.css'

export const Header: React.FC = ({ children }) => (
  <header className={styles.header}>
    <Typography variant="h1">
      <a href={'/'}>Book Pages</a>
    </Typography>
    {children}
  </header>
)
