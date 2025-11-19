# Java Full Stack Developer Portfolio

A modern, responsive portfolio website built with React, Tailwind CSS, and Vite. Features a dark theme with blue-cyan gradients, smooth animations, and Netlify Forms integration.

## 🚀 Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern UI**: Dark theme with gradient accents and smooth animations
- **Netlify Forms**: Contact form with spam protection and validation
- **Performance Optimized**: Fast loading with Vite build optimization
- **SEO Friendly**: Proper meta tags and semantic HTML

## 📋 Sections

- **Hero**: Introduction with name, title, and professional summary
- **About**: Brief professional overview
- **Skills**: 8 categorized skill sections with technology badges
- **Experience**: Professional work history with achievements
- **Projects**: Portfolio of 3 major projects
- **Education**: Academic background
- **Certifications**: Professional certifications
- **Achievements**: Awards and recognitions
- **Contact**: Form with Netlify Forms integration

## 🛠️ Tech Stack

- **Frontend**: React 18+
- **Styling**: Tailwind CSS 3+
- **Build Tool**: Vite
- **Icons**: React Icons
- **Deployment**: Netlify
- **Forms**: Netlify Forms

## 📦 Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## 🏃 Development

Run the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173` (or another port if 5173 is in use).

## 🏗️ Build

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 🚀 Deployment to Netlify

### Option 1: Deploy via Netlify CLI

1. Install Netlify CLI:

   ```bash
   npm install -g netlify-cli
   ```

2. Login to Netlify:

   ```bash
   netlify login
   ```

3. Initialize and deploy:
   ```bash
   netlify init
   netlify deploy --prod
   ```

### Option 2: Deploy via Netlify Dashboard

1. Push your code to GitHub
2. Go to [Netlify](https://app.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"

### Option 3: Drag and Drop

1. Build the project:
   ```bash
   npm run build
   ```
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag and drop the `dist` folder

## ⚙️ Configuration

### Update Personal Information

Edit the data files in `src/data/`:

- `profile.js` - Name, title, summary, contact info
- `skills.js` - Technical skills and categories
- `experience.js` - Work experience and achievements
- `projects.js` - Portfolio projects
- `education.js` - Academic background
- `certifications.js` - Professional certifications
- `achievements.js` - Awards and recognitions

### Netlify Forms Setup

The contact form is already configured for Netlify Forms. After deployment:

1. Go to your Netlify site dashboard
2. Navigate to "Forms" section
3. You'll see the "contact" form listed
4. Configure email notifications if desired

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme.

### Fonts

The site uses Inter font from Google Fonts. Change it in `index.html` if needed.

### Components

All components are in `src/components/`. Modify them to customize the layout and styling.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contact

For any questions or feedback, please use the contact form on the website or reach out via:

- Email: your.email@example.com
- LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)
- GitHub: [Your Profile](https://github.com/yourusername)

---

Built with ❤️ using React and Tailwind CSS
