// Hero Section Content
export interface HeroContent {
  greeting: string
  name: string
  title: string
  subtitle: string
  description: string
  profileImage?: string
  resumeUrl: string
  socialLinks: {
    github: string
    linkedin: string
    email: string
  }
}

// About Section Content
export interface AboutContent {
  title: string
  subtitle: string
  description: string
  image: string
  whyHireMe: {
    title: string
    paragraphs: string[]
  }
  skills: Skill[]
}

export interface Skill {
  icon: string // Icon name from lucide-react
  name: string
  description: string
}

// Experience Section Content
export interface ExperienceContent {
  title: string
  subtitle: string
  experiences: Experience[]
}

export interface Experience {
  company: string
  position: string
  duration: string
  location: string
  description: string
  technologies: string[]
  link: string
  isCurrent?: boolean
}

// Certificates Section Content
export interface CertificatesContent {
  title: string
  subtitle: string
  categories: string[]
  certificates: Certificate[]
  viewAllLink: string
}

export interface Certificate {
  title: string
  issuer: string
  date: string
  credentialId: string
  description: string
  image: string
  link: string
  category: string
}

// Projects Section Content
export interface ProjectsContent {
  title: string
  subtitle: string
  projects: Project[]
}

export interface Project {
  title: string
  description: string
  image: string
  liveUrl?: string
  githubUrl?: string
  technologies: string[]
  features: string[]
  category: string
  isFeatured: boolean
  sortOrder: number
}

// Let's Connect Section Content
export interface LetsConnectContent {
  title: string
  subtitle: string
  description: string
  socialPlatforms: SocialPlatform[]
  quickActions: QuickAction[]
  availability: AvailabilityInfo
}

export interface SocialPlatform {
  name: string
  icon: string // Icon name from lucide-react
  url: string
  username: string
  description: string
  isPrimary: boolean
}

export interface QuickAction {
  title: string
  description: string
  icon: string
  action: 'email' | 'call' | 'meeting' | 'message'
  url?: string
}

export interface AvailabilityInfo {
  status: 'available' | 'busy' | 'unavailable'
  message: string
  responseTime: string
  timezone: string
  workingHours: string
}

// Contact Section Content
export interface ContactContent {
  title: string
  subtitle: string
  form: {
    name: string
    email: string
    subject: string
    message: string
    submitButton: string
  }
  contactInfo: {
    email: string
    phone: string
    location: string
  }
}

// Main Content Interface
export interface PortfolioContent {
  hero: HeroContent
  about: AboutContent
  experience: ExperienceContent
  certificates: CertificatesContent
  projects: ProjectsContent
  letsConnect: LetsConnectContent
  contact: ContactContent
}
