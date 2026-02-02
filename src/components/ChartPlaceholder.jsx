const ChartPlaceholder = () => {
  // Generate sample data points for visual representation
  const dataPoints = [65, 45, 80, 60, 75, 90, 70, 85, 95, 80, 70, 88]
  const maxValue = Math.max(...dataPoints)
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-1">Performance Overview</h3>
          <p className="text-sm text-gray-500 font-medium">Last 12 months</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 text-xs font-semibold text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200 border border-gray-200">
            Monthly
          </button>
          <button className="px-4 py-2 text-xs font-semibold text-primary-700 bg-primary-50 rounded-lg hover:bg-primary-100 transition-all duration-200 border border-primary-200">
            Yearly
          </button>
        </div>
      </div>

      {/* Chart visualization */}
      <div className="h-72 flex items-end justify-between gap-2.5 mb-6">
        {dataPoints.map((value, index) => {
          const height = (value / maxValue) * 100
          return (
            <div
              key={index}
              className="flex-1 flex flex-col items-center group"
            >
              <div
                className="w-full bg-gradient-to-t from-primary-600 via-primary-500 to-primary-400 rounded-t-xl transition-all duration-300 hover:from-primary-700 hover:via-primary-600 hover:to-primary-500 cursor-pointer shadow-sm hover:shadow-md"
                style={{ height: `${height}%`, minHeight: '8px' }}
                title={`${months[index]}: ${value}`}
              />
              <span className="text-xs text-gray-400 mt-3 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {value}
              </span>
              <span className="text-xs text-gray-500 mt-1.5 font-medium">{months[index]}</span>
            </div>
          )
        })}
      </div>

      {/* Legend */}
      <div className="pt-6 border-t border-gray-100 flex items-center justify-center gap-8">
        <div className="flex items-center gap-2.5">
          <div className="w-3 h-3 rounded-full bg-primary-500 ring-2 ring-primary-100"></div>
          <span className="text-sm text-gray-600 font-medium">Revenue</span>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="w-3 h-3 rounded-full bg-primary-300 ring-2 ring-primary-50"></div>
          <span className="text-sm text-gray-600 font-medium">Growth</span>
        </div>
      </div>
    </div>
  )
}

export default ChartPlaceholder
