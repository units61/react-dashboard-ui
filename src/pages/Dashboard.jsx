import StatCard from '../components/StatCard'
import ChartPlaceholder from '../components/ChartPlaceholder'

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Users',
      value: '12,345',
      change: '12.5%',
      icon: '👥',
      trend: 'up',
    },
    {
      title: 'Revenue',
      value: '$45,231',
      change: '8.2%',
      icon: '💰',
      trend: 'up',
    },
    {
      title: 'Performance',
      value: '98.5%',
      change: '2.1%',
      icon: '⚡',
      trend: 'up',
    },
    {
      title: 'Growth',
      value: '+24.3%',
      change: '4.7%',
      icon: '📈',
      trend: 'up',
    },
  ]

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Chart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartPlaceholder />
        
        {/* Additional content card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-1">Recent Activity</h3>
              <p className="text-sm text-gray-500 font-medium">Latest updates</p>
            </div>
          </div>
          <div className="space-y-3">
            {[
              { action: 'New user registered', time: '2 minutes ago', icon: '👤', color: 'bg-blue-50 text-blue-600' },
              { action: 'Payment received', time: '15 minutes ago', icon: '💳', color: 'bg-emerald-50 text-emerald-600' },
              { action: 'Report generated', time: '1 hour ago', icon: '📄', color: 'bg-purple-50 text-purple-600' },
              { action: 'System update', time: '2 hours ago', icon: '🔄', color: 'bg-amber-50 text-amber-600' },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 group border border-transparent hover:border-gray-100"
              >
                <div className={`p-2.5 rounded-lg ${activity.color} group-hover:scale-110 transition-transform duration-200`}>
                  <span className="text-lg leading-none block">{activity.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 mb-0.5">{activity.action}</p>
                  <p className="text-xs text-gray-500 font-medium">{activity.time}</p>
                </div>
                <svg className="w-5 h-5 text-gray-300 group-hover:text-gray-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
