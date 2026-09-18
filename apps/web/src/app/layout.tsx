import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import './styles.css'

export const metadata: Metadata = {
  title: {
    default: 'CERA Medical',
    template: '%s | CERA Medical',
  },
  description: 'Trusted service information and secure enquiry support.',
}

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <header className="site-header">
          <div className="container header-inner">
            <a className="brand" href="/">
              CERA Medical
            </a>
            <nav aria-label="Primary navigation">
              <a href="/services">Services</a>
              <a href="/insights">Insights</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>
        </header>
        <main id="main-content">{children}</main>
        <footer className="site-footer">
          <div className="container">
            CERA Medical · Service information and enquiry support
          </div>
        </footer>
      </body>
    </html>
  )
}
