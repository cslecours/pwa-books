import React from 'react'
import reactifyWc from 'reactify-wc'
import styles from './Card.module.css'

const FastCard = reactifyWc('fast-card') as any


export const Card: React.FC<{
  title: string
  subtitle: string
  img?: string
} & React.HTMLProps<HTMLDivElement>> = ({ title, subtitle, img, children, ...rest }) => {
  return (
    <FastCard className={styles.card} {...rest}>
      {img && <img src={img} alt="book" />}
      <div className={styles.cardContainer}>
      <h3>
        {title} - {subtitle}
      </h3>
      {children}
      </div>
      
    </FastCard>
  )
}
