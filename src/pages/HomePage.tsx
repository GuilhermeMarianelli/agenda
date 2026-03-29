import { Link } from 'react-router-dom'
import { Layout } from '../components/Layout'

export function HomePage() {
  return (
    <Layout
      title="Gerencie seus contatos com agilidade"
      description="Aplicacao front-end moderna e responsiva para cadastro, edicao e remocao de contatos."
    >
      <section className="hero-home">
        <div className="hero-card">
          <h2>Fluxo simples e eficiente</h2>
          <p>
            Entre no dashboard e mantenha sua lista de contatos sempre organizada,
            com uma interface limpa e pronta para integracao futura com Supabase.
          </p>
          <div className="hero-actions">
            <Link to="/login" className="btn-link">
              Entrar
            </Link>
            <Link to="/dashboard" className="btn-link secondary">
              Ir ao dashboard
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
