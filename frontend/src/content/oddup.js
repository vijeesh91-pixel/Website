const a = 'https://customer-assets-lqy194kg.emergentagent.net/job_portfolio-landing-96/artifacts/';
const img = (file, width, height, alt) => ({ src: `${a}${file}`, width, height, alt });

export const oddupIcon = `${a}0nfpjp6t_Oddup%20Logo.webp`;

export const oddupMedia = {
  hero: img('f1a64cc21850a545_Img1.webp', 2000, 997, 'Oddup logotype construction with colour palette, type scale and the web app on a monitor'),
  brand: img('2b60ec936d203f72_Img2.webp', 2000, 1282, 'Oddup logo on a construction grid over a blue gradient'),
  process: img('75d100d4875d0d0a_img3.webp', 2000, 1579, 'Phase 1 process flow from product audit and UI discovery to token architecture'),
  palette: img('8e2c11a12d434194_img4.webp', 2000, 1000, 'Oddup colour palette: Blue, Azure, Cyan, White and Graphite'),
  colorToken: img('c74b9e0c77f2628a_img5.webp', 2000, 863, 'Colour token chain applied to a primary button'),
  typeFamily: img('659b9d4542ef6ece_img6.webp', 1152, 1152, 'SF Pro type family and weights'),
  typeGlyphs: img('bfcb9ac8b3f58c9a_img7.webp', 1152, 1152, 'SF Pro character set'),
  typeHeading: img('05d606df80820203_img8.webp', 2000, 980, 'Heading font tokens applied to a dashboard'),
  typeBody: img('5b396da208eff77d_img9.webp', 2000, 881, 'Body and data font tokens applied to a table and export dialog'),
  spaceScale: img('9017bf09129357e8_img10.webp', 1152, 1174, 'Spacing scale from 2 px to 80 px'),
  spaceUsage: img('d1a4144fe55dc459_img11.webp', 1152, 1174, 'Spacing values applied to a subscription chart card'),
  radiusScale: img('6a02553f800f5c3a_img12.webp', 1152, 708, 'Corner radius tokens from xs to 2xl'),
  radiusVideo: { src: `${a}74ebbf7359e52055_video13.mp4`, label: 'Corner radius applied to a sectors card' },
  radiusCard: img('0c2c4dc5071ec81a_img14.webp', 1152, 414, 'Card radius tokens on a profit and loss card'),
  iconGrid: img('c47be1fc4866c4e7_img15.webp', 1152, 1152, 'Icon built on a 24 px grid with 2 px stroke'),
  iconSet: img('7fb6477dceef2b7b_img16.webp', 1152, 1152, 'Oddup stroked icon set'),
  tokenModes: img('59d294fc0abb3d9f_img17.webp', 1724, 716, 'Sidebar text token resolving in light and dark modes'),
  tokenTiers: img('2d83b5625e5d4b39_img18.webp', 2000, 1412, 'Global, semantic and component token tiers'),
  modesVideo: { src: `${a}aeb7044571d7a1ec_video19.mp4`, label: 'Users list switching between light and dark modes' },
  tabs: img('a7d48c0591f48b48_img19.webp', 1588, 720, 'Tab navigation component'),
  sidebar: img('a049bb86b52d3b1f_img20.webp', 720, 720, 'Sidebar navigation component'),
  dropdown: img('5da46e7dff1ed003_img21.webp', 724, 724, 'Dark dropdown component'),
  notifications: img('e0bd6847aabbddbf_img22.webp', 1588, 1500, 'Notification card components'),
  avatars: img('2d3ec0a26a4de0d3_img23.webp', 724, 724, 'Avatar group component'),
  charts: img('fe432e7f1d7f3e17_img24.webp', 2000, 1547, 'Social follower and global rank chart components'),
  metricTime: img('c6a612bc66dcdaa2_img27.webp', 1152, 1152, '50% project time reduction'),
  metricExecution: img('85a8b0d0e887f940_img25.webp', 1152, 1152, '1.5X faster execution time'),
  metricWeeks: img('2c16a27d04dfc688_img28.webp', 1152, 1708, 'Shipped entire design system in 6 weeks'),
  metricChanges: img('aacf6fdc0f7180ed_img29.webp', 1152, 596, '3X faster design changes'),
};

export const oddupFoundations = [['01', 'COLORS'], ['02', 'TYPOGRAPHY'], ['03', 'SPACING'], ['04', 'CORNER RADIUS'], ['05', 'ICONS']];

export const oddupFacts = [
  ['Team', ['Vijeesh Thattante Valappil (PD)', 'Adam Alsén (PM)', 'Aniket Mazumdar (Data)']],
  ['Role', ['Product Design']],
  ['Timeline', ['7 Weeks']],
];

export const oddupCopy = {
  glance: [
    'The project focused on building a reusable design system to support product revamps and the launch of Oddup’s trading interface platform. Over seven weeks, my role was to establish a consistent design foundation that would help the team redesign products faster, reduce repetitive work, and maintain a cohesive user experience as the platform evolved.',
    'The goal was to shorten design and product development cycles, making the process more efficient, consistent, and scalable across all of Oddup’s product suites.',
  ],
  challenges: [
    'When I moved into the tech team at Oddup in 2022, the design ecosystem lacked a structured foundation. We had basic brand guidelines for the logo and colors, but no defined color system, reusable components, or shared design resources to guide product development.',
    'As a result, the marketing and trading platforms felt disconnected. Design patterns varied across screens, work was often repeated, and designers and developers lacked a common reference. This gap led to duplicated design efforts, inconsistent UI patterns, repeated work across projects and made collaboration harder and slowed down the process of designing, building, and updating the product.',
    'The challenge intensified when Oddup planned a major trading platform revamp alongside the introduction of new features. It became clear that a unified design foundation was needed to improve consistency, streamline workflows, and support faster product development.',
  ],
  approach: [
    'After evaluating the existing workflow, it became clear that continuing without a shared design foundation would make the revamp harder to manage and maintain. The team needed a more consistent way to design, build, and scale Oddup’s products.',
    'We decided to develop a unified design system that would streamline product development, reduce repetitive work, and establish a scalable foundation for future revamps and new features.',
  ],
  process: [
    'I developed a structured design process for Oddup that addressed the existing workflow challenges while supporting the scale of the upcoming product revamp. It started with auditing the existing interfaces to identify inconsistencies, repeated patterns, and opportunities to standardize the experience.',
    'From there, I focused on establishing a unified visual direction that connected the marketing and product experiences, while ensuring the design approach could support the complexity of the trading platform. I approached the system in stages, moving from foundational styles to reusable components, while accounting for both light and dark modes. I worked closely with developers throughout the process to validate design decisions, resolve implementation challenges, and keep the system practical for everyday use.',
    { strong: 'The approach was built around one goal: create a consistent design foundation that could accelerate the revamp without compromising usability or long-term scalability.' },
  ],
  foundation: [
    'A scalable design system needed more than a collection of reusable components. It needed a consistent foundation that could support every part of Oddup’s product ecosystem.',
    'I focused on establishing the core design foundations first, creating a shared visual language that could be applied consistently across interfaces.',
  ],
  components: [
    'With the foundations in place, I moved towards building reusable components that reflected actual product use cases rather than generic UI patterns. Each component was designed to accommodate different states, variations, and edge cases across the trading platform.',
    { strong: 'The goal was to create a system that designers could confidently reuse and developers could implement consistently, reducing duplicated effort while making future product updates easier to manage.' },
    'Throughout the process, I continuously validated the system against real product screens and worked closely with developers to resolve gaps between design and implementation. This ensured the design system was not just visually consistent, but practical, adaptable, and ready to support Oddup’s growing product ecosystem.',
  ],
  colors: [
    'The inconsistent use of colors created visual clutter and made it difficult to maintain a cohesive experience across the platform. As Oddup grew, its visual language began to evolve across different products, screens, and user experiences. The expanding use of colors made it increasingly difficult to maintain a consistent identity, often resulting in visual clutter and an inconsistent experience.',
    { strong: 'I streamlined the palette into a structured color system aligned with Oddup’s brand, defining clear roles for each color across key interface elements.', rest: ' This created a stronger visual hierarchy, made the interface easier to navigate, and brought greater consistency across the platform. The system also became easier to maintain and scale across both light and dark modes.' },
  ],
  typography: [
    'Inconsistent font sizes, weights, and spacing often disrupted visual hierarchy, making information harder to scan and the overall experience feel less cohesive. Typography varied between screens, affecting readability and making the overall experience feel less structured.',
    { strong: 'I revisited the typography to establish a clear, scalable type system, defining consistent styles and roles for headings, body text, labels, and supporting information.', rest: ' This created a stronger hierarchy, improved readability, and brought a more unified visual language across the product, while allowing the system to scale seamlessly as Oddup continued to evolve.' },
  ],
  spacing: [
    'Oddup’s data-heavy interface required a careful balance between spaciousness and compactness. Inconsistent spacing across screens made it harder to maintain alignment, scan information, and create a cohesive layout.',
    { strong: 'I established a consistent spacing system with defined values for layouts, components, and content sections.', rest: ' This helped organize dense information without making the interface feel cluttered or too sparse, improving readability while keeping important data easy to scan.' },
  ],
  radius: [
    'Corner radius plays an important role in creating a consistent visual language across Oddup’s data-heavy interface. With charts, data cards, tables, and complex UI components, inconsistent corner treatments can make the platform feel visually disconnected.',
    'I defined a structured set of corner radius values to create a balance between a modern, approachable look and a clean, information-focused interface. This helped establish consistency across components while ensuring data visualizations and key information remained clear, structured, and easy to scan.',
  ],
  icons: [
    'Finding the right icons for a data-heavy trading platform can be challenging. Icons need to communicate their purpose clearly while fitting naturally into a dense interface without adding visual noise.',
    'I established a consistent icon style across Oddup, focusing on simple, lightweight, and easily recognizable forms. Using clean stroked icons helped maintain a subtle visual presence, ensuring they complemented charts, data, and interface elements without competing for attention.',
  ],
  tokens: [
    'Design decisions needed a more structured foundation. Without a shared system of values, maintaining consistency across colors, spacing, typography, and components became increasingly difficult.',
    'To address this, We introduced a three-tier design token architecture, separating foundational values from their semantic meaning and component-specific usage. This created a clear relationship between global design foundations, context-aware decisions, and individual UI components.',
    'This created a more flexible way to manage design decisions, making updates easier to maintain while ensuring consistency across Oddup’s products and both light and dark themes.',
  ],
  tiers: [
    'Global tokens define the core design values, including brand colors, spacing scales, typography, and corner radius. They act as the single source of truth for the system.',
    'Semantic tokens assign meaning to those values based on their purpose in the interface. For example, colors for primary actions, text, backgrounds, borders, and status indicators. This makes it easier to adapt the system across light and dark modes without changing the underlying foundations.',
    'Component-specific tokens control how design values are applied to individual components, such as buttons, cards, tables, and data visualizations. They allow components to have their own contextual adjustments while remaining connected to the wider system.',
  ],
  componentLibrary: ['Reusable component library based on Oddup’s product requirements, with consistent styles, variants, and interaction states. This reduced repetitive design work, simplified development handoffs, and made it easier to scale the platform.'],
  metrics: [
    'The design system transformed how we designed and delivered products at Oddup. It helped us complete a full product redesign in just 7 Weeks.',
    'It helped accelerate product revamps by 2× and reduce design time by 50%. Beyond improving efficiency, it established a consistent foundation that made collaboration smoother, reduced repetitive work, and allowed the platform to scale more effectively.',
  ],
};
