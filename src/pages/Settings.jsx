const Settings = () => {
  const settingsSections = [
    {
      title: 'Profile Settings',
      icon: '👤',
      items: ['Name', 'Email', 'Password', 'Avatar'],
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
    {
      title: 'Notifications',
      icon: '🔔',
      items: ['Email Notifications', 'Push Notifications', 'SMS Alerts'],
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600',
    },
    {
      title: 'Preferences',
      icon: '⚙️',
      items: ['Theme', 'Language', 'Timezone', 'Date Format'],
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
  ]

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-shadow duration-300">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-2">Settings</h2>
          <p className="text-sm text-gray-500 font-medium">Manage your account preferences and settings</p>
        </div>
        
        <div className="space-y-8">
          {settingsSections.map((section, index) => (
            <div key={index} className="border-b border-gray-100 last:border-0 pb-8 last:pb-0">
              <div className="flex items-center gap-3.5 mb-6">
                <div className={`p-2.5 rounded-xl ${section.iconBg}`}>
                  <span className="text-xl leading-none block">{section.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 tracking-tight">{section.title}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ml-14">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 cursor-pointer group border border-transparent hover:border-gray-100"
                  >
                    <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900">{item}</span>
                    <svg
                      className="w-5 h-5 text-gray-300 group-hover:text-gray-400 transition-colors"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Settings
