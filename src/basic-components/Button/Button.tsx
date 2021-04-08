import styles from './Button.module.css';


export const Button: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >> = ({children, ...rest}) => {
    return <button className={styles.button} {...rest}>
    {children}
  </button>
}