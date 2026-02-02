const Header = ({ title }) => {
  return (
    <header className="bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100 sticky top-0 z-20 h-[73px] flex items-center flex-shrink-0">
      <div className="flex items-center justify-between px-6 lg:px-8 w-full">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">{title}</h2>
          <p className="text-sm text-gray-500 mt-0.5 font-medium">Welcome back</p>
        </div>
        
        <div className="flex items-center gap-3">
          {/* Notifications icon */}
          <button className="relative p-2.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-all duration-200 group">
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
          </button>

          {/* User avatar */}
          <div className="flex items-center gap-3 pl-3 border-l border-gray-200">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary-500 via-primary-500 to-primary-600 flex items-center justify-center text-white font-bold text-sm shadow-lg ring-2 ring-primary-100">
              JD
            </div>
            <div className="hidden md:block text-left">
              <p className="text-sm font-semibold text-gray-900 leading-tight">John Doe</p>
              <p className="text-xs text-gray-500 font-medium">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
