import classNames from 'classnames'
import styles from './TopBar.module.css'

export interface TopBarProps {
  className?: string
  logo: React.ReactNode
  userContext?: React.ReactNode
}

export const TopBar: React.FC<TopBarProps> = ({
  logo,
  userContext,
  children,
  className,
}) => (
  <header className={classNames(styles.root, className)}>
    <div className={styles.logo}>{logo}</div>
    <div className={styles.menu}>{children}</div>
    <div className={styles.spacer}></div>
    <div className={styles.userContext}>{userContext}</div>
  </header>
)
