import React from 'react'

type Props = { label: string }
export const TextInput: React.FC<React.InputHTMLAttributes<HTMLInputElement> &
  Props> = ({ value, onChange, type = 'text', label }) => {
  return (
    <label>
      {label}
      <input value={value} onChange={onChange} />
    </label>
  )
}
