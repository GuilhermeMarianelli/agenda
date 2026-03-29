import type { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { authStorage } from '../services/contactStorage'

type ProtectedRouteProps = {
  children: ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  if (!authStorage.isAuthenticated()) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}
