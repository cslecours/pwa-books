import React from 'react'
import { Content } from './Content'
import { Header } from './Header'

import styles from './AppLayout.module.css'

export interface AppLayoutProps {
  header: React.ReactElement
  footer: React.ReactElement
  aside: React.ReactElement
}
export const AppLayout: React.FC<AppLayoutProps> = (props) => {
  return (
    <div className={styles.layout}>
      <Header className={styles.header}>{props.header}</Header>
      <Content className={styles.content}>{props.children}</Content>
      {/* <aside className={styles.aside}>{props.aside}<Footer/></aside> */}
    </div>
  )
}
