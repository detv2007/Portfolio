// Navigation items
export const NAV_ITEMS = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
] as const

// Social links
export const SOCIAL_LINKS = {
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  twitter: 'https://twitter.com/yourusername',
} as const

// Contact information
export const CONTACT_INFO = {
  email: 'your.email@example.com',
  phone: '+1 (555) 123-4567',
  location: 'Your City, Country',
} as const

// Skills categories
export const SKILL_CATEGORIES = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  backend: ['.NET', 'C#', 'SQL Server', 'Azure'],
  tools: ['Git', 'Docker', 'VS Code', 'Postman'],
  methodologies: ['Clean Architecture', 'CQRS', 'TDD', 'Agile'],
} as const

