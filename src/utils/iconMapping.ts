import * as LucideIcons from 'lucide-react'
import { LucideProps } from 'lucide-react'

// Type for Lucide icon components
type LucideIcon = React.ForwardRefExoticComponent<LucideProps & React.RefAttributes<SVGSVGElement>>

// Icon mapping for dynamic imports
export const getIconComponent = (iconName: string): LucideIcon => {
  // Convert icon name to PascalCase (e.g., "code" -> "Code")
  const pascalCaseName = iconName.charAt(0).toUpperCase() + iconName.slice(1)
  
  // Check if icon exists in lucide-react
  if (pascalCaseName in LucideIcons) {
    return LucideIcons[pascalCaseName as keyof typeof LucideIcons] as LucideIcon
  }
  
  // Return default icon if not found
  console.warn(`Icon "${iconName}" not found, using default icon`)
  return LucideIcons.Code as LucideIcon
}

// Export all available icons for type safety
export { LucideIcons }


