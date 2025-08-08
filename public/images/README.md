# Image Organization Guide

## Folder Structure

### `/public/images/`

This is where all your images should go. The `public` folder is served statically by Next.js.

### Recommended Organization:

#### `/public/images/profile/`

- `profile-photo.jpg` - Your main profile photo (like the one you shared!)
- `profile-casual.jpg` - Casual photos
- `profile-professional.jpg` - Professional headshots
- `about-me.jpg` - Photos for about section

#### `/public/images/projects/`

- `project-1/` - Screenshots and images for each project
  - `hero.jpg` - Main project image
  - `screenshot-1.jpg`
  - `screenshot-2.jpg`
- `project-2/`
- etc.

#### `/public/images/icons/`

- Technology stack icons (React, Node.js, etc.)
- Social media icons
- Skill icons

#### `/public/images/backgrounds/`

- Background images
- Hero section backgrounds
- Pattern images

## How to Use Images in Your Code:

### Using Next.js Image Component (Recommended):

```tsx
import Image from 'next/image';

// Profile photo
<Image
  src="/images/profile/profile-photo.jpg"
  alt="Gayan Dissanayake"
  width={400}
  height={400}
  className="rounded-full"
/>

// Project image
<Image
  src="/images/projects/project-1/hero.jpg"
  alt="Project Name"
  width={600}
  height={400}
  className="rounded-lg"
/>
```

### Benefits of Next.js Image Component:

- Automatic optimization
- Lazy loading
- Responsive images
- WebP conversion when supported
- Improved performance

### Image Formats Recommended:

- **JPEG**: Photos, profile pictures
- **PNG**: Images with transparency, logos
- **WebP**: Modern format for better compression
- **SVG**: Icons, simple graphics

### Image Size Guidelines:

- **Profile photos**: 400x400px to 800x800px
- **Project hero images**: 1200x800px or 16:9 ratio
- **Screenshots**: Original size, but optimize for web
- **Icons**: 24x24px, 32x32px, 48x48px, 64x64px

## Example Usage in Your Portfolio:

```tsx
// In your IntroSection.tsx
import Image from "next/image";

export function IntroSection() {
  return (
    <section className="flex items-center gap-8">
      <div>
        <h1>Hi, I'm Gayan</h1>
        <p>Full Stack Developer</p>
      </div>
      <Image
        src="/images/profile/profile-photo.jpg"
        alt="Gayan Dissanayake"
        width={300}
        height={300}
        className="rounded-full shadow-lg"
        priority // Loads immediately for above-the-fold content
      />
    </section>
  );
}
```

## Tips:

1. Always use descriptive alt text for accessibility
2. Compress images before adding them (use tools like TinyPNG)
3. Use appropriate image formats
4. Consider creating multiple sizes for responsive design
5. Use the `priority` prop for above-the-fold images
