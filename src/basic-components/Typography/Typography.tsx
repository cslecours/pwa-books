
import classNames from 'classnames'
import styles from './Typography.module.scss'

export interface TypographyProps {
    variant?: "h1" | "h2"| "h3" | "h4" | "h5" | "h6" | "span"
    className?: string
}

export const Typography: React.FC<TypographyProps> = ({variant, className, children}) => {    
    const VariantTagName = variant ?? 'span'
    return <VariantTagName className={classNames(className, styles[VariantTagName])}>{children}</VariantTagName>
}