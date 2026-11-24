import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
const line = "I missed the deadline because I spawned 12 subagents to finish faster, spent the whole window merging their excuses, and this was the best one.";
const out = "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, line + "\n", "utf8");
console.log(`wrote ${line.length} chars to ${out}`);
