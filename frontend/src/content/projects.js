const assetRoot = 'https://customer-assets-lqy194kg.emergentagent.net/job_portfolio-landing-96/artifacts/';

export const portfolioLogo = `${assetRoot}s37j9nmc_Logo.png`;

// Labels follow the supplied tile container. Add case-study paths as they are supplied.
export const projects = [
  {
    id: 'vox', title: 'Vox Cinema Booking Experience: Reducing Friction When Switching Cinemas', category: 'Mobile',
    path: '/portfolio/vox',
    description: 'A self-initiated redesign of the VOX Cinemas booking journey, identifying usability gaps and proposing a simpler, more intuitive way to book.',
    image: `${assetRoot}6fd0b8e2473b8656_Vox_CS1.webp`,
    alt: 'VOX Cinemas identity on a deep blue background',
  },
  {
    id: 'oddup', title: 'Oddup Design System to Reduce Design Time by 40% and 2X Faster Product Revamp', category: 'Web', wide: true,
    path: '/portfolio/oddup',
    description: 'A reusable design system built in seven weeks to support Oddup’s product revamps and trading platform launch with a consistent, scalable foundation.',
    image: `${assetRoot}07ce25371f4735b9_Oddup_CS1.webp`,
    alt: 'Oddup startup research and investment dashboard displayed on a monitor',
  },
  {
    id: 'poonch', title: 'Poonch: Driving Mobile Adoption Among Existing Website Users', category: 'Mobile',
    path: '/portfolio/poonch',
    description: 'A personalized pet meal delivery concept, extending the website journey into a seamless mobile app from meal preferences to checkout.',
    image: `${assetRoot}6914fd456ec9d813_Poonch_CS1.webp`,
    alt: 'Poonch food delivery mobile experience on a phone held against a blue shirt',
  },
  {
    id: 'print', title: 'Digital & Branding', category: 'Branding',
    path: '/portfolio/print',
    description: 'Selected work across digital campaigns, print ad, brand identity, and visual mockups.',
    image: `${assetRoot}ba61179eb397420e_Print_CS1.webp`,
    alt: 'Oddup digital campaign designs on a green background',
  },
];