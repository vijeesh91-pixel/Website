const assetRoot = 'https://customer-assets-lqy194kg.emergentagent.net/job_portfolio-landing-96/artifacts/';

export const portfolioLogo = `${assetRoot}s37j9nmc_Logo.png`;

// Labels follow the supplied tile container. Add case-study paths as they are supplied.
export const projects = [
  {
    id: 'vox', title: 'Vox Booking Experience', category: 'Mobile',
    path: '/portfolio/vox',
    description: 'Redesigned the cinema booking journey to simplify venue switching, movie selection, showtimes, and seat booking for a more seamless ticket-purchasing experience…',
    image: `${assetRoot}ba7bdc924ed75bea_Vox_CS1.webp`,
    alt: 'VOX Cinemas identity on a deep blue background',
  },
  {
    id: 'poonch', title: 'Poonch Food Delivery', category: 'Mobile',
    path: '/portfolio/poonch',
    description: 'The goal was to extend the existing web experience into a seamless mobile journey for existing users. From discovering the app and setting meal preferences to exploring meals…',
    image: `${assetRoot}6914fd456ec9d813_Poonch_CS1.webp`,
    alt: 'Poonch food delivery mobile experience on a phone held against a blue shirt',
  },
  {
    id: 'oddup', title: 'Oddup', subtitle: '-Startup, ICO, and cryptocurrency', category: 'Web', wide: true,
    path: '/portfolio/oddup',
    description: 'From its early-stage concept and initial product design to ongoing iterations and current updates. Shaped and evolved data-rich web experiences, dashboards, and research tools, transforming complex startup, ICO, and cryptocurrency data into intuitive, scalable user experiences.',
    image: `${assetRoot}6250829de4d0533c_Oddup_CS1.webp`,
    alt: 'Oddup startup research and investment dashboard displayed on a monitor',
  },
  {
    id: 'print', title: 'Print and Digital', category: 'Branding',
    path: '/portfolio/print',
    description: 'A collection of brand assets, creative concepts, and design explorations spanning print, digital media, marketing collateral, and visual communication across the brand.',
    image: `${assetRoot}fwtzlhze_Print_CS1.webp`,
    alt: 'Print and Digital lettering in yellow and white on a green background',
  },
];