import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Analytics from './pages/Analytics'
import Settings from './pages/Settings'

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')

  const pageTitles = {
    dashboard: 'Dashboard',
    analytics: 'Analytics',
    settings: 'Settings',
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />
      case 'analytics':
        return <Analytics />
      case 'settings':
        return <Settings />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <div className="lg:pl-72">
        <Header title={pageTitles[currentPage] || 'Dashboard'} />
        
        <main className="p-8 lg:p-10">
          {renderPage()}
        </main>
      </div>
    </div>
  )
}

export default App
