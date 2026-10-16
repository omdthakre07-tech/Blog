import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();
const distDir = path.join(rootDir, 'dist');
const vercelOutputDir = path.join(rootDir, '.vercel', 'output');
const vercelStaticDir = path.join(vercelOutputDir, 'static');
const topLevelStaticDir = path.join(rootDir, 'static');

function copyRecursiveSync(src, dest) {
  if (!fs.existsSync(src)) return;
  const exists = fs.existsSync(dest);
  const stats = fs.statSync(src);
  const isDirectory = stats.isDirectory();
  if (isDirectory) {
    if (!exists) fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

try {
  if (fs.existsSync(distDir)) {
    // 1. Populate .vercel/output/static for Vercel Build Output API v3
    fs.mkdirSync(vercelStaticDir, { recursive: true });
    copyRecursiveSync(distDir, vercelStaticDir);

    const vercelConfig = {
      version: 3,
      routes: [
        { handle: 'filesystem' },
        { src: '/(.*)', dest: '/index.html' }
      ]
    };
    fs.writeFileSync(path.join(vercelOutputDir, 'config.json'), JSON.stringify(vercelConfig, null, 2));

    // 2. Populate top-level /static for platforms checking root output
    fs.mkdirSync(topLevelStaticDir, { recursive: true });
    copyRecursiveSync(distDir, topLevelStaticDir);

    console.log('✓ Deployment outputs generated: dist/, .vercel/output/static/, and static/');
  }
} catch (err) {
  console.error('Failed to prepare deployment outputs:', err);
}
