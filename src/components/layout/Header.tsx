import styles from './Header.module.css'

export const Header: React.FC = ({ children }) => (
  <header className={styles.header}>
    <h1>
      <a href={'/'}>Book Pages</a>
    </h1>
    {children}
  </header>
)
