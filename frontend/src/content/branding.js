const assetRoot = 'https://customer-assets-lqy194kg.emergentagent.net/job_portfolio-landing-96/artifacts/';

export const brandingAssets = {
  icon: `${assetRoot}b5ddd9a2634bfafc_ICON.webp`,
  cover: `${assetRoot}91367c71a006e18b_COVER.webp`,
  tile: `${assetRoot}62da5e4c5dca5991_TILE.webp`,
};

// Row-by-row order follows the supplied PDF, not upload or filename order.
const gallery = (id, label, height, entries) => ({
  id, label,
  images: entries.map(([file, alt]) => ({
    id: file.split('_')[1].replace('.webp', '').toLowerCase(),
    src: `${assetRoot}${file}`, alt, width: 891, height,
  })),
});

export const logoGallery = gallery('logos', 'Logo Space', 891, [
  ['8b9ce4353710f753_g1.webp', 'Node brand identity'],
  ['f82f795fb30531da_g2.webp', 'Unfiltered journal brand identity'],
  ['176d79dc5225d3b6_g3.webp', 'Nestle Away brand identity'],
  ['d2a52020d065f34a_g9.webp', 'Draft brand identity'],
  ['f7bd1b63a520c15d_g8.webp', 'Omni brand identity'],
  ['058171100d817980_g4.webp', 'Alluva brand identity'],
  ['6f9a8c75d3e0646a_g6.webp', 'Notify brand identity'],
  ['c032cbbbf4c59e08_g12.webp', 'Recerve brand identity'],
  ['1716e4365f39dd76_g5.webp', 'Safeti brand identity'],
  ['fd1fffa61cc6c433_g10.webp', 'Rana brand identity'],
  ['247113db19db3b86_g7.webp', 'Unfiltered coffee shop brand identity'],
  ['1faf58ad7b9b038d_g11.webp', 'Opell brand identity'],
]);

export const brandGalleries = [
  gallery('nestle-away', 'Nestle Away branding', 882, [
    ['9ac332f738077ac5_N1.webp', 'Nestle Away round storefront sign'],
    ['321a57db7d16320a_N2.webp', 'Nestle Away app icon on a phone'],
    ['73a0522ac085d7d9_N8.webp', 'Nestle Away branded socks'],
    ['dc7fa3ce05d17912_N4.webp', 'Nestle Away reusable bottle'],
    ['db6aad34a59a612f_N5.webp', 'Nestle Away logo on white'],
    ['a3523aae1972e371_N3.webp', 'Nestle Away tote bag'],
    ['c6ece4bf9fa5c1e6_N6.webp', 'Nestle Away packaging box'],
    ['9a91e149f249a66c_N7.webp', 'Nestle Away T-shirt and cap'],
    ['a475a11bcd3bed01_N9.webp', 'Nestle Away hoodie'],
  ]),
  gallery('unfiltered-coffee', 'Unfiltered coffee shop branding', 882, [
    ['8ef73c08f0046f7f_R1.webp', 'Unfiltered coffee shop round sign'],
    ['8eda0fadd01d6179_R2.webp', 'Unfiltered coffee shop wall lettering'],
    ['3b4df48d2055e6ba_R3.webp', 'Unfiltered takeaway food packaging'],
    ['8f841abd4c6ec59f_R4.webp', 'Unfiltered apron worn by a barista'],
    ['a4d1764e01df5f6c_R5.webp', 'Unfiltered coffee shop logo on white'],
    ['c9ba29c2d73aa901_R6.webp', 'Unfiltered coffee shop tote bag'],
    ['f71a2dbbe53f6184_R7.webp', 'Unfiltered iced coffee cup'],
    ['02cfa83f82b82497_R8.webp', 'Unfiltered takeaway cups and paper bag'],
    ['7ee6394cd4160f6c_R9.webp', 'Unfiltered ceramic coffee cup'],
  ]),
  gallery('rana', 'Rana sports branding', 884, [
    ['a8a66f7a8e78319c_S1.webp', 'Rana illuminated wall sign'],
    ['3989d27129236dba_S2.webp', 'Rana Discipline builds champions campaign'],
    ['f63c62747fe35a2b_S3.webp', 'Rana badminton tournament flyer'],
    ['62ed8080e9933b5d_S4.webp', 'Rana branded sports shorts'],
    ['b36522b95493377c_S5.webp', 'Rana logo on white'],
    ['781d7ed174cadce1_S6.webp', 'Rana sports bag'],
    ['13c8da885a5fbcd0_S7.webp', 'Badminton player wearing a Rana T-shirt'],
    ['64f9b79c2638837b_S8.webp', 'Rana badminton racket and shuttlecocks'],
    ['f12994a3c29b54d6_S9.webp', 'Rana reusable sports bottle'],
  ]),
  gallery('unfiltered-journal', 'Unfiltered journal branding', 881, [
    ['22215e522ccdd2bd_L1.webp', 'Unfiltered journal wall sign'],
    ['aaa68152447e4d86_L2.webp', 'Unfiltered pens and notebook'],
    ['935823e420f83117_L3.webp', 'Unfiltered A kinder place for your thoughts poster'],
    ['f12920b7bb3e3625_L4.webp', 'Unfiltered app icon on a phone'],
    ['fe0b1de98ef6d2b3_L5.webp', 'Unfiltered journal logo on white'],
    ['e2b248513b6792c7_L6.webp', 'Unfiltered journal notification on a phone'],
    ['411c3ff77dbec8a2_L7.webp', 'Unfiltered New Journal Note screen'],
    ['c797fc3c6d08c773_L8.webp', 'Unfiltered Product Ideas journal entry'],
    ['275c4ff28d87b0c8_L9.webp', 'Unfiltered My Notes screen'],
  ]),
];

export const printGallery = gallery('print', 'Print Space', 882, [
  ['ce927c531fb47098_F1.webp', 'Poonch Chicken and pulpy pumpkin packaging labels'],
  ['dab5b2efc3385e6a_F2.webp', 'Redrawlife hiking trip flyer'],
  ['4706ccfa521a176c_F3.webp', 'Aniket and Subhashree reception invitation'],
  ['a52f8eb8c5d4c5bb_F4.webp', 'Illustrated engagement and wedding invitation'],
  ['41c308f951afec3e_F5.webp', 'Poonch Ready Set Drool tote bag'],
  ['2eb6b1c522670521_F6.webp', 'Poonch packaging tape and stickers'],
  ['23c4ccba20f95030_F9.webp', 'Oddup Get the right data newspaper advertisement'],
  ['02f9e453a6efd4ce_F8.webp', 'Rana badminton tournament wall poster'],
  ['a179a7b777b66c8a_F7.webp', 'Oddup Drowning in the sea of too much data newspaper advertisement'],
]);

// Original PDF copy, including its wording and singular "touchpoint".
export const brandingCopy = {
  intro: 'Selected work across digital campaigns, print ad, brand identity, and visual mockups',
  logos: 'collection of brand identities created for companies across technology, consumer, finance, lifestyle, and emerging industries. Each identity is designed to establish a distinctive visual language that remains recognizable across digital and physical touchpoint.',
  brands: 'A curated selection of identities, campaigns, advertisements, and digital experiences developed across multiple industries and formats. The work combines compelling visual systems with clear messaging to turn attention into meaningful engagement.',
  print: 'Print campaigns designed to command attention in high-impact environments. From newspaper advertisements and editorial placements to promotional materials, each execution balances strong messaging, visual hierarchy, and brand recognition.',
};