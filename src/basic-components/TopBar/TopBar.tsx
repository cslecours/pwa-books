import styles from './TopBar.module.css'

export interface TopBarProps {
  logo: React.ReactNode
  userContext?: React.ReactNode
}

export const TopBar: React.FC<TopBarProps> = ({
  logo,
  userContext,
  children,
}) => (
  <header className={styles.root}>
    <div className={styles.logo}>{logo}</div>
    <div className={styles.menu}>{children}</div>
    <div className={styles.spacer}></div>
    <div className={styles.userContext}>{userContext}</div>
  </header>
)
