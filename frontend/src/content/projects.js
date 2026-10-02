const assetRoot = 'https://customer-assets-lqy194kg.emergentagent.net/job_portfolio-landing-96/artifacts/';

export const portfolioLogo = `${assetRoot}s37j9nmc_Logo.png`;

// Labels follow the supplied tile container. Detailed case studies come later.
export const projects = [
  {
    id: 'vox', title: 'Vox Booking Experience', category: 'Mobile',
    description: 'Descriptions and details goes here',
    image: `${assetRoot}yrsahgjm_Vox_CS1.webp`,
    alt: 'VOX Cinemas identity on a deep blue background',
  },
  {
    id: 'poonch', title: 'Poonch food delivery', category: 'Mobile',
    description: 'Descriptions and details goes here',
    image: `${assetRoot}221c5nfo_Poonch_CS1.webp`,
    alt: 'Poonch food delivery mobile experience on a phone held against a blue shirt',
  },
  {
    id: 'oddup', title: 'Oddup', subtitle: '-Startup, ICO, and cryptocurrency', category: 'Web', wide: true,
    description: 'Descriptions and details goes here',
    image: `${assetRoot}t0pahupl_Oddup_CS1.webp`,
    alt: 'Oddup startup research and investment dashboard displayed on a monitor',
  },
  {
    id: 'print', title: 'Print and Digital', category: 'Branding',
    description: 'Descriptions and details goes here',
    image: `${assetRoot}fwtzlhze_Print_CS1.webp`,
    alt: 'Print and Digital lettering in yellow and white on a green background',
  },
];