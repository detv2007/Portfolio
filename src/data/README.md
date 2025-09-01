# Portfolio Content Management

## Overview
This directory contains all the content data for the portfolio website. Content is separated from components to make it easy to update without touching the code.

## File Structure

### `portfolio-content.json`
Main content file containing all portfolio data:
- **Hero Section**: Greeting, name, title, description, social links
- **About Section**: Bio, skills, why hire me
- **Experience Section**: Work history, companies, positions
- **Certificates Section**: Professional certifications (Azure, Oracle, AWS, GCP, Scrum)
- **Projects Section**: Portfolio projects showcase
- **Let's Connect Section**: Social platforms, quick actions, availability
- **Contact Section**: Contact form and information

### `content.ts`
TypeScript type definitions for all content structures.

## How to Update Content

### 1. **Quick Updates**
Simply edit the `portfolio-content.json` file:
```json
{
  "hero": {
    "greeting": "Hi, I'm",
    "name": "Your New Name",
    "title": "Your New Title",
    "description": "Your new description..."
  }
}
```

### 2. **Adding New Skills**
```json
{
  "skills": [
    {
      "icon": "Database",
      "name": "New Skill",
      "description": "Skill description..."
    }
  ]
}
```

### 3. **Adding New Experience**
```json
{
  "experiences": [
    {
      "company": "New Company",
      "position": "New Position",
      "duration": "2024 - Present",
      "location": "City, Country",
      "description": "Job description...",
      "technologies": ["React", "Node.js"],
      "link": "https://company.com"
    }
  ]
}
```

### 4. **Adding New Certificates**
```json
{
  "certificates": [
    {
      "title": "New Certification",
      "issuer": "Issuing Organization",
      "date": "Month Year",
      "credentialId": "CERT-ID-12345",
      "description": "Certification description...",
      "image": "/images/cert.jpg",
      "link": "https://verify.com/cert",
      "category": "Category Name"
    }
  ]
}
```

### 5. **Adding New Social Platforms**
```json
{
  "socialPlatforms": [
    {
      "name": "New Platform",
      "icon": "Globe",
      "url": "https://platform.com/username",
      "username": "@username",
      "description": "Platform description",
      "isPrimary": false
    }
  ]
}
```

### 6. **Adding New Quick Actions**
```json
{
  "quickActions": [
    {
      "title": "New Action",
      "description": "Action description",
      "icon": "Plus",
      "action": "message",
      "url": "https://action-url.com"
    }
  ]
}
```

## Icon Names
Use these icon names from lucide-react:
- **Development**: `Code`, `Palette`, `Smartphone`, `Database`, `Cloud`, `Shield`
- **Business**: `Calendar`, `MapPin`, `Building`, `ExternalLink`
- **Social**: `Award`, `Download`, `Mail`, `Github`, `Linkedin`, `Twitter`, `Instagram`, `Youtube`
- **Communication**: `Phone`, `MessageCircle`, `BookOpen`
- **Actions**: `Plus`, `Globe`, `Star`

## Certificate Categories

### Current Categories:
- **Cloud & DevOps**: Azure (AZ-900, DP-900, AZ-204, AZ-104), AWS, Google Cloud
- **Oracle Cloud**: OCI AI, Data Management, Infrastructure Foundations
- **Agile & Project Management**: Professional Scrum Master (PSM I)
- **Backend Development**: .NET Developer
- **Frontend Development**: React Developer

### Popular Certification Paths:
1. **Microsoft Azure Path**: AZ-900 → DP-900 → AZ-104 → AZ-204
2. **Oracle Cloud Path**: OCI Foundations → OCI AI → OCI Data Management
3. **Cloud Multi-Platform**: Azure + AWS + Google Cloud + Oracle Cloud
4. **Agile Development**: Scrum Master + Technical Skills

## Let's Connect Section Features

### Social Platforms
- **Primary Platforms**: LinkedIn, GitHub (marked as `isPrimary: true`)
- **Secondary Platforms**: Twitter, Instagram, YouTube, Medium
- Each platform includes: name, icon, URL, username, description

### Quick Actions
- **Email**: Direct email link
- **Schedule Call**: Calendly integration
- **Book Meeting**: Meeting scheduling
- **WhatsApp**: Quick messaging

### Availability Status
- **Status**: available/busy/unavailable
- **Response Time**: Expected response timeframe
- **Timezone**: Your working timezone
- **Working Hours**: Regular working schedule

## Future Admin Panel Integration

When you build the admin panel, you can:

1. **Load content from API**: Replace `getPortfolioContent()` with API calls
2. **Real-time updates**: Use WebSocket or polling for live updates
3. **Image management**: Upload and manage profile/project images
4. **Content validation**: Ensure data integrity before saving
5. **Version control**: Track content changes over time
6. **Social media integration**: Auto-sync with actual social profiles
7. **Calendar integration**: Sync with Google Calendar/Outlook
8. **Availability management**: Real-time status updates
9. **Certificate tracking**: Monitor certification expiry dates
10. **Learning path management**: Suggest next certifications

## Content Validation

The TypeScript types ensure:
- Required fields are present
- Data structure is correct
- Type safety across the application
- Icon names are valid
- URLs are properly formatted
- Certificate dates are consistent

## Best Practices

1. **Keep content separate** from component logic
2. **Use consistent naming** for icons and categories
3. **Validate data** before updating
4. **Backup content** before major changes
5. **Test changes** in development first
6. **Keep social links updated** with current profiles
7. **Update availability status** regularly
8. **Use appropriate icons** for each action/platform
9. **Maintain certification dates** in chronological order
10. **Group related certifications** by vendor or technology

## Migration Path

Current setup → Admin Panel:
1. JSON file → Database/CMS
2. Static content → Dynamic content
3. Manual editing → Web interface
4. File-based → API-based
5. Single user → Multi-user with roles
6. Manual updates → Automated syncs
7. Static availability → Real-time status
8. Manual certificate tracking → Automated expiry alerts
9. Static learning paths → AI-powered recommendations
