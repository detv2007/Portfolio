# Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design inspired by Brittany Chiang's portfolio
- **Dark Mode**: Toggle between light and dark themes
- **Responsive**: Mobile-first responsive design
- **Smooth Scrolling**: Smooth navigation between sections
- **TypeScript**: Full type safety
- **Performance**: Optimized with Next.js 14 App Router

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # React components
│   ├── context/           # Context providers
│   ├── layout/            # Layout components
│   ├── sections/          # Page sections
│   └── ui/                # Reusable UI components
├── hooks/                  # Custom React hooks
├── lib/                    # Library configurations
├── types/                  # TypeScript type definitions
├── utils/                  # Utility functions
└── styles/                 # Additional styles
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Context API
- **Package Manager**: npm

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.js` to match your brand.

### Content
Modify the content in each section component:
- `src/components/sections/Hero.tsx` - Hero section
- `src/components/sections/About.tsx` - About section
- `src/components/sections/Experience.tsx` - Work experience
- `src/components/sections/Projects.tsx` - Portfolio projects
- `src/components/sections/Certificates.tsx` - Certifications
- `src/components/sections/Contact.tsx` - Contact information

### Constants
Update site-wide constants in `src/lib/constants.ts`:
- Navigation items
- Social links
- Contact information
- Skills categories

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
Build the project and deploy the `out` folder:
```bash
npm run build
npm run export
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 Development

### Adding New Sections
1. Create a new component in `src/components/sections/`
2. Add the section to `src/app/page.tsx`
3. Update navigation in `src/lib/constants.ts`

### Styling
- Use Tailwind CSS classes for styling
- Custom CSS in `src/app/globals.css`
- Component-specific styles in individual component files

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.
