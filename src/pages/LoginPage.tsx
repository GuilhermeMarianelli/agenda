import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { authStorage } from '../services/contactStorage'

export function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!email || !password) {
      return
    }
    authStorage.login()
    navigate('/dashboard')
  }

  return (
    <Layout
      title="Login"
      description="Autenticacao front-end temporaria para acessar o dashboard."
    >
      <section className="login-wrapper">
        <form className="login-form" onSubmit={handleSubmit}>
          <label>
            E-mail
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="voce@email.com"
              required
            />
          </label>
          <label>
            Senha
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Digite sua senha"
              required
            />
          </label>
          <button type="submit">Entrar</button>
        </form>
      </section>
    </Layout>
  )
}
