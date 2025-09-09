# Sunday Cents - Landing Page

A modern, high-converting landing page for the Sunday Cents newsletter built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎯 **High-Converting Design**: Inspired by successful newsletters like Morning Brew and TLDR
- 📱 **Fully Responsive**: Optimized for all devices
- 🔒 **Secure**: API keys stored safely in environment variables
- ⚡ **Fast**: Built with Next.js for optimal performance
- 🎨 **Modern UI**: Clean design with smooth animations
- 📧 **Email Integration**: Direct integration with Email Octopus

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Copy the example environment file:

```bash
cp env.example .env.local
```

Edit `.env.local` with your Email Octopus credentials:

```env
EMAILOCTOPUS_API_KEY=your_api_key_here
EMAILOCTOPUS_LIST_ID=your_list_id_here
```

### 3. Get Your Email Octopus Credentials

1. Sign up for [Email Octopus](https://emailoctopus.com)
2. Create a new list for your newsletter
3. Get your API key from Settings > API
4. Get your List ID from your list settings

### 4. Run the Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your landing page.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add your environment variables in the Vercel dashboard
4. Deploy!

### Environment Variables for Production

Make sure to set these in your deployment platform:

- `EMAILOCTOPUS_API_KEY`
- `EMAILOCTOPUS_LIST_ID`
- `NEXT_PUBLIC_GA_ID` (optional, for Google Analytics)

## Customization

### Updating Content

- **Hero Section**: Edit `src/components/Hero.tsx`
- **Benefits**: Modify the `benefits` array in `src/components/ValueProposition.tsx`
- **Testimonials**: Update the `testimonials` array in `src/components/SocialProof.tsx`
- **Stats**: Change the `stats` array in `src/components/SocialProof.tsx`

### Styling

- **Colors**: Update the theme in `tailwind.config.ts`
- **Fonts**: Modify font imports in `src/app/layout.tsx`
- **Animations**: Add custom animations in `src/app/globals.css`

### Analytics

To add Google Analytics:

1. Add your GA ID to `.env.local`:
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

2. Add the GA script to `src/app/layout.tsx`

## File Structure

```
src/
├── app/
│   ├── api/subscribe/route.ts    # Email subscription API
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
└── components/
    ├── Header.tsx                # Navigation header
    ├── Hero.tsx                  # Hero section
    ├── EmailSignup.tsx           # Email signup form
    ├── ValueProposition.tsx      # Benefits section
    ├── SocialProof.tsx           # Stats and testimonials
    ├── CTA.tsx                   # Call-to-action section
    └── Footer.tsx                # Footer
```

## Performance

This landing page is optimized for:

- ⚡ Fast loading times
- 📱 Mobile-first responsive design
- 🔍 SEO optimization
- 🎯 High conversion rates

## Support

For issues or questions, please check:

1. Environment variables are set correctly
2. Email Octopus API credentials are valid
3. Next.js and dependencies are up to date

## License

MIT License - feel free to use this for your own newsletter!
