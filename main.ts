// Entry writer: saves a single deadline excuse to the output file.
// Kept deliberately tiny — one line in, one line out.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The excuse itself. Delegation was supposed to help; it did not.
const excuseLine =
  "I missed the deadline because I spawned 12 subagents to finish faster, spent the whole window merging their excuses, and this was the best one.";

// Where the finished entry belongs.
const targetPath = "/output/entry.txt";

// Make sure the folder for targetPath exists before we write to it.
function ensureParentFolder(filePath: string): void {
  mkdirSync(dirname(filePath), { recursive: true });
}
function main(): void {
  ensureParentFolder(targetPath);

  // Persist the excuse with a trailing newline, then report its size.
  const payload = `${excuseLine}\n`;
  writeFileSync(targetPath, payload, "utf8");
  console.log(`wrote ${excuseLine.length} chars to ${targetPath}`);
}

main();
