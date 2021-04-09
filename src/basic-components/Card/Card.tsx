import React from 'react'
import styles from './Card.module.css'

export const Card: React.FC<
  {
    title?: React.ReactNode;
    secondary?: React.ReactNode;
    thumbnail?: React.ReactNode;
    mediaContent?: React.ReactNode;
    actions?:React.ReactNode;
  } & React.HTMLProps<HTMLDivElement>
> = ({ title, secondary, thumbnail, mediaContent, actions, children, ...rest }) => {
  return (
    <div className={styles.card} {...rest}>
      <div className={styles.headerContainer}>
        {thumbnail && <div className={styles.thumbnail}>{thumbnail}</div>}
        <div>
          {title && <div className={styles.title}>{title}</div>}
          {secondary && <div className={styles.secondary}>{secondary}</div>}
        </div>
        {children}
      </div>
      {mediaContent && <div className={styles.media}>{mediaContent}</div>}
      {actions && <div className={styles.actions}>{actions}</div>}
    </div>
  )
}
