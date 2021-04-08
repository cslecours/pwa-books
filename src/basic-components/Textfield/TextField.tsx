import React from 'react'
import styles from './TextField.module.css'

interface ExtendedTextFieldProps {
  start?: React.ReactNode
  end?: React.ReactNode
}

export const TextField: React.FC<
  ExtendedTextFieldProps &
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >
> = ({ start, end, onChange }) => {
  return (
    <label className={styles.textfield}>
      {start && <span>{start}</span>}
      <input type="text" onChange={onChange}/>
      {end && <span>{end}</span>}
    </label>
  )
}
