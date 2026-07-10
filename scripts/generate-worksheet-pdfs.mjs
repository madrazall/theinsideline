import puppeteer from "puppeteer";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dir = path.join(root, "public", "downloads");
const files = [
  ["preparation-checklist.html", "preparation-checklist.pdf"],
  ["timeline-template.html", "timeline-template.pdf"],
  ["document-checklist.html", "document-checklist.pdf"],
  ["reentry-planning-worksheet.html", "reentry-planning-worksheet.pdf"],
];

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();

for (const [html, pdf] of files) {
  const filePath = path.join(dir, html);
  const outPath = path.join(dir, pdf);
  const url = "file:///" + filePath.replace(/\\/g, "/");

  await page.goto(url, { waitUntil: "networkidle0", timeout: 60000 });
  await page.pdf({
    path: outPath,
    format: "letter",
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    preferCSSPageSize: true,
  });

  console.log(`${pdf}: ${Math.round(fs.statSync(outPath).size / 1024)} KB`);
}

await browser.close();