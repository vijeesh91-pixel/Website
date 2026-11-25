const fs = require('fs');
const path = require('path');

const routes = [
  '/portfolio',
  '/portfolio/writing',
  '/portfolio/patent',
  '/portfolio/profile',
  '/portfolio/contact',
  '/portfolio/poonch',
  '/portfolio/vox',
  '/portfolio/oddup',
  '/portfolio/print',
];

const buildDir = path.join(__dirname, 'build');
const mainHtml = path.join(buildDir, 'index.html');

if (!fs.existsSync(mainHtml)) {
  console.error('Build index.html not found.');
  process.exit(1);
}

const html = fs.readFileSync(mainHtml, 'utf8');

routes.forEach((route) => {
  const routeDir = path.join(buildDir, route.replace(/^\//, ''));
  fs.mkdirSync(routeDir, { recursive: true });

  fs.writeFileSync(
    path.join(routeDir, 'index.html'),
    html
  );
});

console.log(`Generated ${routes.length} static route pages.`);
