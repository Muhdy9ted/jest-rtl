import React from 'react'

export default function Search({ value, onChange, children }) {
  return (
    <div>
    <label htmlFor="search">{children}</label>
    <input
      id="search"
      type="text"
      value={value}
      onChange={onChange}
    />
  </div>
  )
}
