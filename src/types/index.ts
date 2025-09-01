// Theme types
export type Theme = 'light' | 'dark'

// Navigation types
export interface NavItem {
  name: string
  href: string
}

// Experience types
export interface Experience {
  id: string
  title: string
  company: string
  location: string
  period: string
  description: string[]
  technologies: string[]
  link?: string
}

// Project types
export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
}

// Certificate types
export interface Certificate {
  id: string
  name: string
  issuer: string
  issueDate: string
  expiryDate?: string
  category: 'development' | 'cloud' | 'database' | 'other'
  verificationUrl?: string
  image?: string
}

// Contact form types
export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

