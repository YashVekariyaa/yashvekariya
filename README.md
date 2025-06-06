# Next.js 14 Developer Portfolio Template

A modern, responsive, and SEO-optimized **Next.js 14 portfolio template** designed for developers, designers, and professionals. This open-source project helps you showcase your skills, experience, and projects with an elegant interface that stands out. Built with server-side rendering, TypeScript, and the latest web standards for optimal performance.

## ✨ Key Features

- **Interactive Career Timeline**: Showcase your professional journey with a visually appealing timeline
- **Dark/Light Mode**: Professional appearance with theme support
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **100% Performance Score**: Fully optimized for speed and Core Web Vitals
- **SEO-Ready**: Structured data, meta tags, and optimized content
- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui
- **Easy Customization**: Well-organized code structure with minimal effort required
- **Animations**: Subtle animations for engaging user experience
- **Analytics Integration**: Ready for Google Analytics tracking
- **Contact Form**: Functional contact form with validation
- **Open Source**: Free to use and modify for your personal portfolio

## 🚀 Demo

View the live demo at [https://nbarkiya.xyz/](nbarkiya.xyz)

https://github.com/namanbarkiya/minimal-next-portfolio/assets/82203888/f93bf5ca-c2bd-4fe5-a413-1050ebf6cf78

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Form Handling**: Server actions with validation
- **Analytics**: Google Analytics + Vercel Analytics
- **Deployment**: [Vercel](https://vercel.com)

## 🔧 Getting Started

To get started with your own portfolio website:

1. Clone this repository:

   ```bash
   git clone https://github.com/namanbarkiya/minimal-next-portfolio.git my-portfolio
   cd my-portfolio
   ```

2. Copy the contents of `.env.copy` to a new `.env` file and fill in the required information.

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your web browser to see the website.

## 🎨 Customization

The portfolio is designed to be easily customizable:

1. **Personal Information**: Update your personal info in `config/site.ts`
2. **Skills**: Add your skills in `config/skills.ts`
3. **Experiences**: Add your work experiences in `config/portfolio.ts`
4. **Career Timeline**: Customize your career journey in `config/career.ts`
5. **Contributions**: Showcase your contributions in `config/contributions.ts`
6. **Colors & Theme**: Modify the theme in `tailwind.config.js`

## 🌟 Features In Detail

### Career Timeline

An interactive, animated timeline that showcases your professional journey with expandable sections for details about each position.

### Skills Showcase

Visually represent your technical and soft skills with customizable ratings and categories.

### Project Gallery

Display your projects with detailed information, technologies used, and live demo links.

### Contact Form Integration

A ready-to-use contact form that can connect to various backend services.

### SEO Optimization

Built-in SEO features with proper meta tags, structured data, and semantic HTML.

## 📱 Performance and Responsiveness

![best-portfolio-website-score](https://github.com/namanbarkiya/minimal-next-portfolio/assets/82203888/3fb9c94d-9d99-4e98-92ea-14aadc91b568)
![100-score-vercel](https://github.com/namanbarkiya/minimal-next-portfolio/assets/82203888/7cfe28cc-b619-4199-9dab-1cf16723b86d)

This template is optimized for:

- 100% Lighthouse score
- Excellent Core Web Vitals metrics
- Responsive design across all device sizes
- Fast loading times with proper image optimization

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgements

- Design inspired by modern portfolio best practices
- Built by [Yash Vekariya](https://github.com/namanbarkiya)
- Icons from [Lucide](https://lucide.dev/)

## 💻 Deploy on Vercel

The easiest way to deploy your portfolio is using [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), the platform from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contact Form Setup with Google Forms

You can use Google Forms as a backend for your contact form. Follow these steps to set it up:

### 1. Create a Google Form

1. Go to [Google Forms](https://forms.google.com/) and create a new form.
2. Add the following fields:
   - Name (Short answer)
   - Email (Short answer)
   - Message (Paragraph)
   - Social (Short answer) - Optional

### 2. Get Pre-filled Link and Field IDs

1. Once your form is created, click the three dots (⋮) in the top-right corner
2. Select "Get pre-filled link"
3. Fill in some sample data in each field
4. Click "Get Link" at the bottom
5. Copy the generated URL, which should look like:
   ```
   https://docs.google.com/forms/d/e/1FAIpQLSf9O_7Lxxx/viewform?usp=pp_url&entry.123456789=SampleName&entry.987654321=sample@email.com&entry.234567891=SampleMessage
   ```

6. Extract the Form ID and Field IDs:
   - Form ID: The part between `/e/` and `/viewform` (e.g., `1FAIpQLSf9O_7Lxxx`)
   - Field IDs: The numbers after `entry.` (e.g., `123456789` for Name)

### 3. Create Environment Variables

Create a `.env.local` file at the root of your project with the following variables:

```
NEXT_PUBLIC_GOOGLE_FORM_LINK=https://docs.google.com/forms/d/e/YOUR_FORM_ID_HERE/formResponse
NEXT_PUBLIC_GOOGLE_FORM_FIELD_ID_NAME=entry.123456789
NEXT_PUBLIC_GOOGLE_FORM_FIELD_ID_EMAIL=entry.987654321
NEXT_PUBLIC_GOOGLE_FORM_FIELD_ID_MESSAGE=entry.234567891
NEXT_PUBLIC_GOOGLE_FORM_FIELD_ID_SOCIAL=entry.345678912
```

Replace the placeholder values with your actual form ID and field IDs.

### 4. Restart Your Development Server

After creating the `.env.local` file, restart your Next.js development server for the changes to take effect:

```bash
npm run dev
```

The contact form will now submit to your Google Form, and the responses will be collected in your Google Form's responses tab.
#   y a s h v e k a r i y a  
 