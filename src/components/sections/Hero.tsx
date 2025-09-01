'use client'

import { Download, Mail, Github, Linkedin } from 'lucide-react'
import { getHeroContent } from '../../services/contentService'

export default function Hero() {
  const content = getHeroContent()

  return (
    <section id="hero" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                {content.greeting}{' '}
                <span className="text-blue-600 dark:text-blue-400">{content.name}</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-700 dark:text-slate-300">
                {content.title}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                {content.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </a>
              <a
                href={content.resumeUrl}
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-all duration-200"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a
                href={content.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href={content.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-white dark:bg-slate-800 flex items-center justify-center">
                  <div className="w-72 h-72 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                    {content.profileImage ? (
                      <img 
                        src={content.profileImage} 
                        alt={content.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <span className="text-6xl font-bold text-slate-400 dark:text-slate-500">
                        👨‍💻
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
