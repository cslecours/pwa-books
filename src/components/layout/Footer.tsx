import classNames from 'classnames'
import styles from './Footer.module.css'

export const Footer: React.FC<ClassNameProp> = ({ className, children }) => (
  <footer className={classNames(styles.footer, className)}>
    <p>
      <a href="https://github.com/cslecours/pwa-books">Github</a>
    </p>
    {children}
  </footer>
)
