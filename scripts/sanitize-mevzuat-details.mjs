#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { sanitizeMevzuatBodyHtml } from "./lib/sanitize-mevzuat-html.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DETAILS_DIR = path.join(__dirname, "../public/data/mevzuat-guncellemeleri/details");

let updated = 0;

for (const file of fs.readdirSync(DETAILS_DIR)) {
  if (!file.endsWith(".json")) continue;
  const filePath = path.join(DETAILS_DIR, file);
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const cleaned = sanitizeMevzuatBodyHtml(data.bodyHtml ?? "");
  if (cleaned !== data.bodyHtml) {
    data.bodyHtml = cleaned;
    fs.writeFileSync(filePath, `${JSON.stringify(data)}\n`);
    updated += 1;
  }
}

console.log(`Temizlenen kayıt: ${updated}`);
