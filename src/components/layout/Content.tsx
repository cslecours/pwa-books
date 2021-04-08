import styles from './Content.module.css'

export const Content: React.FC<{}> = ({ children }) => (
  <main className={styles.content}>{children}</main>
)
