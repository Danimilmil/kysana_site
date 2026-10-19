import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT || 3000);
const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8', '.png': 'image/png', '.svg': 'image/svg+xml' };

const server = http.createServer(async (req, res) => {
  const requestPath = decodeURIComponent((req.url || '/').split('?')[0]);
  const relativePath = requestPath === '/' ? 'index.html' : requestPath.replace(/^\//, '');
  const publicPath = requestPath === '/manus-routes.json' || requestPath.startsWith('/assets/')
    ? path.join(root, 'public', relativePath.replace(/^assets\//, 'assets/'))
    : path.join(root, relativePath);
  const filePath = path.resolve(publicPath);
  const safePath = filePath.startsWith(root) ? filePath : path.join(root, 'index.html');
  try {
    const target = existsSync(safePath) ? safePath : path.join(root, 'index.html');
    const data = await readFile(target);
    res.writeHead(200, { 'Content-Type': mime[path.extname(target)] || 'text/plain; charset=utf-8', 'Cache-Control': 'no-cache' });
    res.end(data);
  } catch {
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Kysana preview error');
  }
});
server.listen(port, '0.0.0.0', () => console.log(`Kysana listening on ${port}`));
