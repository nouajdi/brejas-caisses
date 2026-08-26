import { useAuthStore } from '../stores/auth'
import '../styles/Dashboard.css'

export default function Dashboard() {
  const { user, logout } = useAuthStore()

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <h1>🏪 Breja's Caisses</h1>
        <button onClick={logout} className="logout-btn">
          Logout
        </button>
      </nav>

      <div className="dashboard-content">
        <div className="welcome-card">
          <h2>Bienvenue {user?.username} 👋</h2>
          <p>Role: <strong>{user?.role.toUpperCase()}</strong></p>
        </div>

        {user?.role === 'admin' && (
          <div className="admin-panel">
            <h3>📊 Admin Panel</h3>
            <p>Manage users, caisses, and system settings</p>
          </div>
        )}

        {user?.role === 'gerant' && (
          <div className="gerant-panel">
            <h3>💼 Gérant Dashboard</h3>
            <p>Manage your cash registers and members</p>
          </div>
        )}

        {user?.role === 'membre' && (
          <div className="membre-panel">
            <h3>👥 Member Dashboard</h3>
            <p>View your accounts and transactions</p>
          </div>
        )}
      </div>
    </div>
  )
}
