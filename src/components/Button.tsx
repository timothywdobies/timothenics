import React from 'react'
import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button'
}: ButtonProps) {
  const baseStyles = 'inline-block px-8 py-3 md:px-10 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-all duration-200'

  const variantStyles = {
    primary: 'bg-accent text-white hover:bg-accent-hover shadow-lg hover:shadow-xl',
    secondary: 'bg-foreground text-background hover:bg-opacity-90 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-foreground text-foreground hover:bg-foreground hover:text-background'
  }

  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
