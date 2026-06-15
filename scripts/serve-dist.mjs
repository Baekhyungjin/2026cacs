import { createReadStream, existsSync } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";

const root = resolve(process.cwd(), "dist");
const base = "/2026-csca-seminar/";
const port = Number(process.env.PORT || 4173);

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".png": "image/png",
  ".pdf": "application/pdf",
  ".svg": "image/svg+xml",
};

function safePath(urlPath) {
  const withoutBase = urlPath.startsWith(base) ? urlPath.slice(base.length) : urlPath.slice(1);
  const clean = withoutBase || "index.html";
  const target = normalize(join(root, clean));
  return target.startsWith(root) ? target : join(root, "index.html");
}

createServer(async (req, res) => {
  const url = new URL(req.url || "/", `http://${req.headers.host}`);
  let target = safePath(decodeURIComponent(url.pathname));

  if (!existsSync(target) || (await stat(target)).isDirectory()) {
    target = join(root, "index.html");
  }

  res.setHeader("Content-Type", types[extname(target)] || "application/octet-stream");
  createReadStream(target)
    .on("error", () => {
      res.statusCode = 404;
      res.end("Not found");
    })
    .pipe(res);
}).listen(port, "127.0.0.1", () => {
  console.log(`Serving ${root} at http://127.0.0.1:${port}${base}`);
});
