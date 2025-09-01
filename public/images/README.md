# Images Directory

This directory contains all static images used in the portfolio website.

## Directory Structure

```
public/images/
├── avatar.jpg          # Profile image for Hero section
├── about.jpg           # About section image
├── projects/           # Project showcase images
│   ├── ecommerce.jpg   # E-commerce project image
│   └── taskapp.jpg     # Task management app image
└── certificates/       # Certificate images (if needed)
```

## Image Requirements

### Profile Image (avatar.jpg)
- **Size**: 500x500px or larger (square aspect ratio)
- **Format**: JPG, PNG, or WebP
- **Purpose**: Hero section profile picture

### About Image (about.jpg)
- **Size**: 400x600px or similar portrait aspect ratio
- **Format**: JPG, PNG, or WebP
- **Purpose**: About section illustration

### Project Images
- **Size**: 800x600px or similar landscape aspect ratio
- **Format**: JPG, PNG, or WebP
- **Purpose**: Project showcase thumbnails

## Usage in Code

In Next.js, images in the `public` folder are served from the root URL:

```jsx
// ✅ Correct - No "public" prefix needed
<img src="/images/avatar.jpg" alt="Profile" />

// ❌ Wrong - Don't include "public"
<img src="public/images/avatar.jpg" alt="Profile" />
```

## Adding New Images

1. Place your image file in the appropriate subdirectory
2. Update the corresponding path in `src/data/portfolio-content.json`
3. Use the path without the "public" prefix (e.g., `/images/new-image.jpg`)

## Image Optimization

For better performance, consider:
- Using WebP format for smaller file sizes
- Optimizing images before adding them
- Using Next.js Image component for automatic optimization
- Implementing lazy loading for project images


