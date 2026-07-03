#!/usr/bin/env node
/**
 * Kişisel / yerel dosyalar hariç paylaşım zip'i oluşturur.
 * Alıcı: npm install && npm run dev
 */

import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const PROJECT_NAME = path.basename(ROOT);
const OUTPUT = path.join(ROOT, "..", `${PROJECT_NAME}-share.zip`);

const EXCLUDES = [
  "node_modules/*",
  ".git/*",
  ".next/*",
  "out/*",
  ".cache/*",
  ".claude/*",
  ".cursor/*",
  ".vercel/*",
  ".DS_Store",
  "*/.DS_Store",
  "*.tsbuildinfo",
];

if (fs.existsSync(OUTPUT)) {
  fs.rmSync(OUTPUT);
}

const args = [
  "-r",
  OUTPUT,
  PROJECT_NAME,
  ...EXCLUDES.flatMap((pattern) => ["-x", `${PROJECT_NAME}/${pattern}`, "-x", pattern]),
];

const result = spawnSync("zip", args, {
  cwd: path.dirname(ROOT),
  stdio: "inherit",
});

if (result.status !== 0) {
  console.error("Zip oluşturulamadı.");
  process.exit(result.status ?? 1);
}

const sizeMb = (fs.statSync(OUTPUT).size / (1024 * 1024)).toFixed(1);
console.log(`\nHazır: ${OUTPUT} (${sizeMb} MB)`);
console.log("\nAlıcı için:");
console.log(`  unzip ${path.basename(OUTPUT)}`);
console.log(`  cd ${PROJECT_NAME}`);
console.log("  npm install");
console.log("  npm run dev");
