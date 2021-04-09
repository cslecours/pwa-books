import styles from './Button.module.css'
import classNames from 'classnames'

export interface ExtendedButtonProps {
  variant?: 'outline'
}

export const Button: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > &
    ExtendedButtonProps
> = ({ children, variant, ...rest }) => {
  return (
    <button
      className={classNames(styles.button, {
        [styles.outline]: variant === 'outline',
      })}
      {...rest}
    >
      {children}
    </button>
  )
}
