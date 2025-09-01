import portfolioContent from '../data/portfolio-content.json'
import { PortfolioContent } from '../types/content'

// Load content from JSON file
export const getPortfolioContent = (): PortfolioContent => {
  return portfolioContent as PortfolioContent
}

// Get specific section content
export const getHeroContent = () => getPortfolioContent().hero
export const getAboutContent = () => getPortfolioContent().about
export const getExperienceContent = () => getPortfolioContent().experience
export const getCertificatesContent = () => getPortfolioContent().certificates
export const getProjectsContent = () => getPortfolioContent().projects
export const getLetsConnectContent = () => getPortfolioContent().letsConnect
export const getContactContent = () => getPortfolioContent().contact

// Helper function to get icon component by name
export const getIconComponent = (iconName: string) => {
  // This will be used to dynamically import icons from lucide-react
  // You can implement this based on your icon library
  return iconName
}

// For future admin panel integration
export const updatePortfolioContent = async (newContent: Partial<PortfolioContent>) => {
  // This will be implemented when you build the admin panel
  // It can save to a database, CMS, or file system
  console.log('Updating content:', newContent)
  
  // For now, just return success
  return { success: true, message: 'Content updated successfully' }
}

// Export the content for direct use if needed
export { portfolioContent }
