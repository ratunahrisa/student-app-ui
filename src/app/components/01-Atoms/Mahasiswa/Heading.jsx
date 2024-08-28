import React from 'react'

export default function Heading({level, children, className}) {
    const Tag = `h${level}`
  return (
    <Tag className={className}>{children}</Tag>
  )
}
