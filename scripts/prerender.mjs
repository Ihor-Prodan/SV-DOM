import { chromium } from 'playwright';
import { createServer } from 'http';
import { createReadStream, existsSync, statSync, writeFileSync } from 'fs';
import { extname, join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');
const PORT = 4571;

const MIME = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.json': 'application/json',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
};

function serveStatic(req, res) {
  const urlPath = req.url.split('?')[0];
  let filePath = join(distDir, urlPath === '/' ? 'index.html' : urlPath);
  if (!existsSync(filePath) || statSync(filePath).isDirectory()) {
    filePath = join(distDir, 'index.html');
  }
  res.setHeader('Content-Type', MIME[extname(filePath)] || 'application/octet-stream');
  createReadStream(filePath).pipe(res);
}

const server = createServer(serveStatic);
await new Promise(resolve => server.listen(PORT, resolve));

const browser = await chromium.launch();
const page = await browser.newPage();

try {
  await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle' });

  // Let the header typing animation finish so the snapshot has the full company name.
  await page
    .waitForFunction(
      () =>
        document.querySelector('.company-name')?.textContent ===
        'Stavebná Spoločnosť',
      { timeout: 5000 },
    )
    .catch(() => {});

  // Scroll through the page so IntersectionObserver-based reveal sections render visible.
  await page.evaluate(async () => {
    const step = 400;
    const delay = 120;
    while (window.scrollY + window.innerHeight < document.body.scrollHeight) {
      window.scrollBy(0, step);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
    window.scrollTo(0, 0);
  });

  await page.waitForTimeout(300);

  const html = await page.content();
  writeFileSync(join(distDir, 'index.html'), html);
  console.log('Prerendered dist/index.html');
} finally {
  await browser.close();
  server.close();
}
