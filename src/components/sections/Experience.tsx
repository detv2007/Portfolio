'use client'

import { Calendar, MapPin, Building, ExternalLink } from 'lucide-react'
import { getExperienceContent } from '../../services/contentService'

export default function Experience() {
  const content = getExperienceContent()

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {content.title}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        <div className="space-y-12">
          {content.experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index < content.experiences.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-12 bg-slate-200 dark:bg-slate-700"></div>
              )}
              
              <div className="flex items-start space-x-6">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <Building className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {exp.position}
                    </h3>
                    <a
                      href={exp.link}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View Company
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-3 text-sm text-slate-600 dark:text-slate-400">
                    <div className="flex items-center space-x-1">
                      <Building className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
