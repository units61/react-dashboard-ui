import { useState } from 'react'

const Sidebar = ({ currentPage, onNavigate }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'analytics', label: 'Analytics', icon: '📈' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ]

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed top-5 left-5 z-50 p-2.5 rounded-xl bg-white shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-200 border border-gray-100"
        aria-label="Toggle menu"
      >
        <svg
          className="w-5 h-5 text-gray-700"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMobileOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-40
          w-72 bg-white shadow-xl border-r border-gray-100
          transform transition-transform duration-300 ease-in-out
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-center h-20 px-6 border-b border-gray-100">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 bg-clip-text text-transparent tracking-tight">
              Dashboard
            </h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-5 py-8 space-y-1.5">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id)
                  setIsMobileOpen(false)
                }}
                className={`
                  w-full flex items-center gap-3.5 px-4 py-3.5 rounded-xl
                  transition-all duration-200 ease-out
                  ${
                    currentPage === item.id
                      ? 'bg-gradient-to-r from-primary-50 to-primary-50/50 text-primary-700 font-semibold shadow-sm border border-primary-100/50'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-primary-600 font-medium'
                  }
                `}
              >
                <span className="text-xl leading-none">{item.icon}</span>
                <span className="text-sm tracking-wide">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Footer */}
          <div className="px-6 py-5 border-t border-gray-100">
            <p className="text-xs text-gray-400 text-center font-medium tracking-wide">
              © 2024 Dashboard
            </p>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  )
}

export default Sidebar
