export interface Project {
  slug: string;
  title: string;
  category: string;
  images: string[];
}

export const projects: Project[] = [
  {
    slug: 'gen',
    title: 'GEN',
    category: 'Branding, brand guide',
    images: ['Gen-01-scaled.jpg', 'Gen-21-1.png', 'Gen-32-1.png'],
  },
  {
    slug: 'berrics',
    title: 'Berrics',
    category: 'Strategy & Design, Identity, Interface',
    images: ['Berrics-1-scaled.jpg', 'Berrics-22.jpg', 'Berrics-23.jpg'],
  },
  {
    slug: 'cariuma',
    title: 'Cariuma',
    category: 'Branding, Interactive Content',
    images: ['Cariuma-1-1-scaled.jpg', 'Cariuma-11.jpg', 'Cariuma-12.jpg'],
  },
  {
    slug: 'zuso',
    title: 'Zuso',
    category: 'Branding, UX/UI, Illustration, Animation',
    images: ['Zuso-1-scaled.jpg', 'Zuso-11.jpg'],
  },
  {
    slug: 'superela',
    title: 'Superela',
    category: 'App Design, Branding, Illustration, Motion, UX/UI',
    images: ['Superela-1-scaled.jpg', 'Superela-8.jpg', 'Superela-23.jpg'],
  },
];
