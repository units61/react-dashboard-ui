const StatCard = ({ title, value, change, icon, trend }) => {
  const isPositive = trend === 'up'
  const changeColor = isPositive ? 'text-emerald-600' : 'text-red-600'
  const changeBg = isPositive ? 'bg-emerald-50' : 'bg-red-50'
  const changeBorder = isPositive ? 'border-emerald-100' : 'border-red-100'

  return (
    <div className="group bg-white rounded-2xl shadow-sm border border-gray-100 p-7 hover:shadow-xl hover:border-gray-200 transition-all duration-300 hover:-translate-y-0.5">
      <div className="flex items-start justify-between mb-6">
        <div className="p-3.5 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100/50 group-hover:from-primary-100 group-hover:to-primary-50 transition-all duration-300">
          <span className="text-2xl leading-none block">{icon}</span>
        </div>
        <div className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold ${changeBg} ${changeColor} border ${changeBorder} tracking-wide`}>
          <span className="flex items-center gap-1">
            {isPositive ? (
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
            {change}
          </span>
        </div>
      </div>
      
      <div>
        <p className="text-sm font-medium text-gray-500 mb-2 tracking-wide uppercase text-xs">{title}</p>
        <p className="text-3xl font-bold text-gray-900 tracking-tight leading-none">{value}</p>
      </div>
    </div>
  )
}

export default StatCard
