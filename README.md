# Nitesh Jaiswal - Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- Modern and clean design
- Fully responsive layout
- Smooth animations and transitions
- Dark theme with custom color scheme
- Interactive components
- Contact form with EmailJS integration
- Optimized performance
- SEO friendly

## 🛠️ Technologies Used

- React.js
- Tailwind CSS
- Framer Motion
- EmailJS
- React Intersection Observer
- React Icons

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/nitesh18400/portfolio.git
```

2. Navigate to the project directory:
```bash
cd portfolio
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Configuration

### EmailJS Setup
To make the contact form functional:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Get your public key, service ID, and template ID
5. Replace the placeholders in `src/components/Contact.js`:
   - `YOUR_SERVICE_ID`
   - `YOUR_TEMPLATE_ID`
   - `YOUR_PUBLIC_KEY`

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)
Vercel is the best option for this portfolio because:
- Zero configuration needed
- Automatic deployments from GitHub
- Global CDN
- Built-in analytics
- Automatic HTTPS
- Preview deployments for pull requests
- Great performance optimization

Deployment steps:
1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically detect the React project and configure build settings
4. Click Deploy

### Option 2: GitHub Pages
GitHub Pages is a good alternative if you want to keep everything within GitHub:
- Free hosting
- Direct integration with GitHub
- Custom domain support
- SSL certificate

Deployment steps:
1. Add `homepage` field to `package.json`:
```json
{
  "homepage": "https://nitesh18400.github.io/portfolio"
}
```
2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```
3. Add deployment scripts to `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```
4. Deploy:
```bash
npm run deploy
```

## 📱 Responsive Design
The website is fully responsive and optimized for:
- Desktop
- Tablet
- Mobile devices

## 🔍 SEO
The website is optimized for search engines with:
- Semantic HTML
- Meta tags
- Open Graph tags
- Sitemap

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contact
Feel free to reach out:
- Email: niteshjaiswal2000@gmail.com
- LinkedIn: [Nitesh Jaiswal](https://linkedin.com/in/yourusername)
- GitHub: [nitesh18400](https://github.com/nitesh18400)
- LeetCode: [nitesh18400](https://leetcode.com/yourusername) 