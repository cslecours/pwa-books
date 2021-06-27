import classNames from 'classnames'
import styles from './Content.module.css'

export const Content: React.FC<ClassNameProp> = ({ className, children }) => (
  <main className={classNames(styles.content, className)}>{children}</main>
)
