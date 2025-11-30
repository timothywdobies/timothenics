# Timothenics Website

A clean, minimal marketing website for Timothenics - a personal calisthenics brand focused on efficient 30-minute training sessions.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Ready for Netlify

## Project Structure

```
timothenics-website/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── gear/
│   │   │   └── page.tsx
│   │   ├── method/
│   │   │   └── page.tsx
│   │   ├── programs/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx (Home)
│   └── components/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Container.tsx
│       ├── Footer.tsx
│       ├── Layout.tsx
│       ├── Navbar.tsx
│       └── Section.tsx
├── public/
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Pages

1. **Home (/)** - Hero, value propositions, 5-20-5 framework, program highlight, gear preview, email capture
2. **Programs (/programs)** - Timothenics 30 details and upcoming programs
3. **Gear (/gear)** - Minimal equipment recommendations and product cards
4. **Method (/method)** - Training philosophy and methodology
5. **About (/about)** - Brand story and mission
6. **Contact (/contact)** - Contact form with validation

## Reusable Components

- **Layout**: Wraps pages with Navbar and Footer
- **Container**: Consistent max-width container with responsive padding
- **Section**: Structured page sections with optional title/subtitle
- **Button**: Primary, secondary, and outline variants with link/click handlers
- **Card**: Clean card component with optional hover effects
- **Navbar**: Responsive navigation with mobile menu
- **Footer**: Site-wide footer with navigation and social links

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone or download this repository

2. Install dependencies:
```bash
cd timothenics-website
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Deployment to Netlify

### Method 1: Drag and Drop

1. Build the project locally:
```bash
npm run build
```

2. The build output will be in the `.next` folder

3. Go to [Netlify](https://www.netlify.com/) and drag the `.next` folder to deploy

### Method 2: Connect Git Repository

1. Push this code to a GitHub/GitLab/Bitbucket repository

2. Log in to Netlify and click "Add new site"

3. Connect your repository

4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Framework preset**: Next.js

5. Deploy

### Method 3: Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build the project:
```bash
npm run build
```

3. Deploy:
```bash
netlify deploy --prod
```

## Design System

### Colors

- **Background**: `#FAFAF8` (off-white)
- **Foreground**: `#2C2C2C` (charcoal)
- **Accent**: `#0066FF` (bright blue for CTAs)
- **Accent Hover**: `#0052CC` (darker blue)

### Typography

- **Font**: Inter (loaded from Google Fonts)
- **Responsive**: Mobile-first with breakpoints at sm (640px), md (768px), lg (1024px)

### Components

All components are built with Tailwind utility classes and support responsive design out of the box.

## Form Handlers

Both the email capture (home page) and contact form currently use placeholder handlers that log to console and show alerts. To implement real functionality:

### Email Capture

Update the `handleEmailSubmit` function in `src/app/page.tsx` to connect to your email service (e.g., Mailchimp, ConvertKit, custom API).

### Contact Form

Update the `handleSubmit` function in `src/app/contact/page.tsx` to connect to your backend or email service.

## Customization

### Update Colors

Edit `tailwind.config.js` to change the color scheme:

```js
theme: {
  extend: {
    colors: {
      background: '#FAFAF8',  // Change this
      foreground: '#2C2C2C',  // Change this
      accent: '#0066FF',       // Change this
      'accent-hover': '#0052CC', // Change this
    },
  },
}
```

### Update Content

All content is in the respective page files. Simply edit the text in:
- `src/app/page.tsx` - Home page
- `src/app/programs/page.tsx` - Programs
- `src/app/gear/page.tsx` - Gear
- `src/app/method/page.tsx` - Method
- `src/app/about/page.tsx` - About
- `src/app/contact/page.tsx` - Contact

### Add Images

Place images in the `public/` folder and reference them like:

```tsx
<img src="/your-image.jpg" alt="Description" />
```

Or use Next.js Image component:

```tsx
import Image from 'next/image'

<Image src="/your-image.jpg" alt="Description" width={500} height={300} />
```

## License

This project is built for Timothenics brand. All rights reserved.
