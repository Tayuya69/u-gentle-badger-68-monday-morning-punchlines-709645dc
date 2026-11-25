import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Monday morning is the only time my bed files a restraining order against my alarm clock — and the judge always rules in the bed's favor.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Second writing message: read-back validation of the emitted line.
// Re-reads /output/entry.txt and asserts its exact shape.
;void (async () => {
  const fs = await import("node:fs");
  const text = fs.readFileSync("/output/entry.txt", "utf8");
  if (/\s$/.test(text)) {
    throw new Error("validation failed: entry.txt has trailing whitespace");
  }
  const codePoints = [...text].length;
  if (codePoints !== 136) {
    throw new Error(`validation failed: entry.txt has ${codePoints} Unicode code points, expected 136`);
  }
  const bytes = Buffer.byteLength(text, "utf8");
  if (bytes !== 138) {
    throw new Error(`validation failed: entry.txt is ${bytes} bytes, expected 138`);
  }
  if (!text.endsWith("favor.")) {
    throw new Error('validation failed: entry.txt does not end with "favor."');
  }
})();
