import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type LayoutProps = {
  title: string
  description: string
  children: ReactNode
}

export function Layout({ title, description, children }: LayoutProps) {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">Lista de Contatos</div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
      </header>

      <main className="page-content">
        <section className="page-header">
          <h1>{title}</h1>
          <p>{description}</p>
        </section>
        {children}
      </main>
    </div>
  )
}
