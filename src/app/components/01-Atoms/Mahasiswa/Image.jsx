import React from 'react'

export default function Image({src, alt, width, className}) {
  return (
    <img
        src={src}
        alt={alt}
        width={width}
        className={className}
    />
  )
}
