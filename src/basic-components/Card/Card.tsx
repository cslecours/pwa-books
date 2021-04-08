import React from 'react'
import styles from './Card.module.css'

export const Card: React.FC<
  {
    title: string
    subtitle: string
    img?: string
  } & React.HTMLProps<HTMLDivElement>
> = ({ title, subtitle, img, children, href, ...rest }) => {
  return (
    <div className={styles.card} {...rest}>
      {img && <img src={img} alt="book" height={100} width={75} />}
      <div className={styles.cardContainer}>
        <h3>
          <a href={href}>
            {title} - {subtitle}
          </a>
        </h3>
        {children}
      </div>
    </div>
  )
}
