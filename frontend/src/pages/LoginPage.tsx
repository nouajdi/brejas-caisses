import { useState } from 'react'
import '../styles/LoginPage.css'

export default function LoginPage({ onLogin }: any) {
  const [username, setUsername] = useState('admin')
  const [password, setPassword] = useState('admin123')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    try {
      await onLogin(username, password)
    } catch (err: any) {
      setError(err.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h1>🏪 Breja's Caisses</h1>
        <p className="subtitle">Système de Gestion des Caisses</p>
        
        {error && <div className="error">{error}</div>}
        
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={loading}
        />
        
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
        />
        
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>

        <div className="test-credentials">
          <p><strong>Test Credentials:</strong></p>
          <p>👤 Admin: admin / admin123</p>
          <p>📋 Gérant: ahmed / gerant123</p>
          <p>👥 Membre: yassine / membre123</p>
        </div>
      </form>
    </div>
  )
}
