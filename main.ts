import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Monday morning is the only time my bed files a restraining order against my alarm clock — and the judge always rules in the bed's favor.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
