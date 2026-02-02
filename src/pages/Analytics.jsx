const Analytics = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center hover:shadow-lg transition-shadow duration-300">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 mb-6">
          <span className="text-4xl leading-none">📈</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-3">Analytics Page</h2>
        <p className="text-gray-500 font-medium max-w-md mx-auto">Detailed analytics and insights will be displayed here.</p>
      </div>
    </div>
  )
}

export default Analytics
