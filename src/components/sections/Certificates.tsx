'use client'

import { Award, ExternalLink, Calendar, Building } from 'lucide-react'
import { getCertificatesContent } from '../../services/contentService'

export default function Certificates() {
  const content = getCertificatesContent()

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {content.title}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {content.categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Certificate Image */}
              <div className="relative h-48 bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Award className="w-16 h-16 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div className="absolute top-4 right-4 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  {cert.category}
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-2">
                  {cert.title}
                </h3>
                
                <div className="flex items-center space-x-4 mb-3 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-center space-x-1">
                    <Building className="w-4 h-4" />
                    <span>{cert.issuer}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm line-clamp-3">
                  {cert.description}
                </p>

                <div className="text-xs text-slate-500 dark:text-slate-500 mb-4">
                  Credential ID: {cert.credentialId}
                </div>

                {/* Verify Button */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Verify Certificate
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href={content.viewAllLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 font-semibold rounded-lg transition-colors duration-200"
          >
            <Award className="w-5 h-5 mr-2" />
            View All on Credly
          </a>
        </div>
      </div>
    </section>
  )
}
