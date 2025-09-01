import * as LucideIcons from 'lucide-react'

// Icon mapping for dynamic imports
export const getIconComponent = (iconName: string) => {
  // Convert icon name to PascalCase (e.g., "code" -> "Code")
  const pascalCaseName = iconName.charAt(0).toUpperCase() + iconName.slice(1)
  
  // Check if icon exists in lucide-react
  if (pascalCaseName in LucideIcons) {
    return LucideIcons[pascalCaseName as keyof typeof LucideIcons]
  }
  
  // Return default icon if not found
  console.warn(`Icon "${iconName}" not found, using default icon`)
  return LucideIcons.Code
}

// Export all available icons for type safety
export { LucideIcons }

