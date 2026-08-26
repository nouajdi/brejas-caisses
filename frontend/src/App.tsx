import { useState, useEffect } from 'react'
import axios from 'axios'
import { useAuthStore } from './stores/auth'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'

function App() {
  const { token, login, logout } = useAuthStore()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (token && axios.defaults.headers.common['Authorization'] !== `Bearer ${token}`) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }
  }, [token])

  if (!token) return <LoginPage onLogin={login} />
  return <Dashboard onLogout={logout} />
}

export default App
