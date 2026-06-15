import { cp, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";
import { build } from "vite";
import react from "@vitejs/plugin-react";

const root = process.cwd();
const outDir = resolve(root, "dist");

await rm(outDir, { recursive: true, force: true });

await build({
  root,
  base: "./",
  plugins: [react()],
  publicDir: resolve(root, "public"),
  build: {
    copyPublicDir: false,
    outDir,
    emptyOutDir: true,
  },
});

await mkdir(outDir, { recursive: true });
await cp(resolve(root, "public"), outDir, { recursive: true });
