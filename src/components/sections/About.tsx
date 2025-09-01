'use client'

import { getAboutContent } from '../../services/contentService'
import { getIconComponent } from '../../utils/iconMapping'

export default function About() {
  const content = getAboutContent()

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {content.title}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            {content.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-96 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                <div className="w-full h-full rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center">
                  <div className="w-72 h-88 rounded-2xl bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                    {content.image ? (
                      <img 
                        src={content.image} 
                        alt="About Me"
                        className="w-full h-full rounded-2xl object-cover"
                      />
                    ) : (
                      <span className="text-6xl">🎯</span>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Decorative dots */}
              <div className="absolute -top-4 -right-4 w-6 h-6 bg-yellow-400 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-blue-400 rounded-full"></div>
              <div className="absolute top-1/2 -right-8 w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
          </div>

          {/* Right side - Text */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              {content.whyHireMe.title}
            </h3>
            <div className="space-y-4 text-slate-600 dark:text-slate-400">
              {content.whyHireMe.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.skills.map((skill, index) => {
            const IconComponent = getIconComponent(skill.icon)
            return (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-200 dark:border-slate-700"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {skill.name}
                  </h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  {skill.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
