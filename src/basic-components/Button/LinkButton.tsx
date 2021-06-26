import styles from './Button.module.css'
import classNames from 'classnames'

export interface ExtendedButtonProps {
  variant?: 'outline'
}

export const LinkButton: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > &
    ExtendedButtonProps
> = ({ children, variant, disabled, ...rest }) => {
  return (
    <a
      className={classNames(styles.button, {
        [styles.disabled]: disabled,
      })}
      {...rest}
    >
      {children}
    </a>
  )
}
