'use client'

import { getLetsConnectContent } from '../../services/contentService'
import { getIconComponent } from '../../utils/iconMapping'

export default function LetsConnect() {
  const content = getLetsConnectContent()

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
      case 'busy':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
      case 'unavailable':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
      default:
        return 'bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-400'
    }
  }

  return (
    <section id="lets-connect" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {content.title}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            {content.description}
          </p>
        </div>

        {/* Availability Status */}
        <div className="text-center mb-12">
          <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(content.availability.status)}`}>
            <div className={`w-2 h-2 rounded-full mr-2 ${
              content.availability.status === 'available' ? 'bg-green-500' :
              content.availability.status === 'busy' ? 'bg-yellow-500' : 'bg-red-500'
            }`}></div>
            {content.availability.message}
          </div>
          <div className="mt-4 text-sm text-slate-600 dark:text-slate-400">
            <p>Response time: {content.availability.responseTime}</p>
            <p>Timezone: {content.availability.timezone}</p>
            <p>Working hours: {content.availability.workingHours}</p>
          </div>
        </div>

        {/* Social Platforms Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-8">
            Connect on Social Media
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.socialPlatforms.map((platform, index) => {
              const IconComponent = getIconComponent(platform.icon)
              return (
                <a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 ${
                    platform.isPrimary 
                      ? 'border-blue-500 dark:border-blue-400' 
                      : 'border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      platform.isPrimary 
                        ? 'bg-blue-100 dark:bg-blue-900/30' 
                        : 'bg-slate-100 dark:bg-slate-700'
                    }`}>
                      <IconComponent className={`w-6 h-6 ${
                        platform.isPrimary 
                          ? 'text-blue-600 dark:text-blue-400' 
                          : 'text-slate-600 dark:text-slate-400'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h4 className={`text-lg font-semibold ${
                        platform.isPrimary 
                          ? 'text-blue-600 dark:text-blue-400' 
                          : 'text-slate-900 dark:text-white'
                      }`}>
                        {platform.name}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {platform.username}
                      </p>
                    </div>
                    {platform.isPrimary && (
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-full">
                        Primary
                      </span>
                    )}
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {platform.description}
                  </p>
                </a>
              )
            })}
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-8">
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.quickActions.map((action, index) => {
              const IconComponent = getIconComponent(action.icon)
              return (
                <a
                  key={index}
                  href={action.url}
                  target={action.action === 'email' ? undefined : '_blank'}
                  rel={action.action === 'email' ? undefined : 'noopener noreferrer'}
                  className="group bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-200 dark:border-slate-700 text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors duration-200">
                    <IconComponent className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {action.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {action.description}
                  </p>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}


