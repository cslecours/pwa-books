import classNames from 'classnames'
import React from 'react'
import styles from './IconButton.module.css'

interface ExtendedIconButtonProps {
  variant?: 'borderless'
  size: 'small' | 'medium' | 'large'
}

export const IconButton: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > &
    ExtendedIconButtonProps
> = ({ children, variant, size }) => {
  return (
    <button
      className={classNames(styles.root, {
        [styles.borderless]: variant === 'borderless',
        [styles.small]: size === 'small',
        [styles.medium]: size === 'medium',
        [styles.large]: size === 'large',
      })}
    >
      {children}
    </button>
  )
}
