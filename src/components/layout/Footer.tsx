import styles from './Footer.module.css'

export const Footer: React.FC<{}> = ({ children }) => (
  <footer className={styles.footer}>
        <a href="https://github.com/cslecours/pwa-books">Github</a>
        {children}
  </footer>
)
