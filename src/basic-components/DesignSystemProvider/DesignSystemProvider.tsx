import styles from './DesignSystemProvider.module.css'

export const DesignSystemProvider: React.FC<{}> = ({children}) => {
    return <div className={styles.root}>{children}</div>
}