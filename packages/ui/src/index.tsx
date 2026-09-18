import type { ReactNode } from 'react'

export interface ButtonLinkProps {
  children: ReactNode
  href: string
  variant?: 'primary' | 'secondary'
}

export function ButtonLink({
  children,
  href,
  variant = 'primary',
}: ButtonLinkProps) {
  const className = variant === 'secondary' ? 'button secondary' : 'button'

  return (
    <a className={className} href={href}>
      {children}
    </a>
  )
}
