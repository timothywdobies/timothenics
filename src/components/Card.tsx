import React from 'react'

interface CardProps {
  children: React.ReactNode
  title?: string
  className?: string
  hover?: boolean
}

export default function Card({ children, title, className = '', hover = false }: CardProps) {
  return (
    <div className={`
      bg-white rounded-xl p-6 md:p-8 shadow-md
      ${hover ? 'hover:shadow-xl transition-shadow duration-300' : ''}
      ${className}
    `}>
      {title && <h3 className="mb-4">{title}</h3>}
      {children}
    </div>
  )
}
