import { existsSync, readFileSync } from "node:fs";
import { spawnSync } from "node:child_process";

const git = spawnSync(
  "git",
  ["ls-files", "-co", "--exclude-standard", "-z"],
  { encoding: "utf8" },
);

if (git.status !== 0) {
  process.stderr.write(git.stderr || "Could not list repository files.\n");
  process.exit(1);
}

const join = (...parts) => parts.join("");
const priorTerms = [join("data", "dog"), join("sea", "gate")];
const retiredColors = [
  join("#632", "ca6"),
  join("#4c1", "d82"),
  join("#c6a", "7ea"),
  join("#d9b", "8ff"),
];
const retiredAssetNames = [
  join("/dd", "_"),
  join("data", "dog", "-wordmark.svg"),
  "/watercolor-pad.png",
  "/watercolor-deal.png",
  "/watercolor-room.png",
  "/watercolor-orbit.png",
  "/watercolor-ramp.png",
  "/watercolor-sko.png",
  "/watercolor-attach.png",
  "/where-cursor-fits.jpg",
  join("/krista", "-clips/"),
];
const longDash = String.fromCodePoint(0x2014);
const oldRgb = new RegExp(["99", "44", "166"].join("\\s*,\\s*"));
const ignored = /^(?:node_modules|\.next|\.git)(?:\/|$)/;
const failures = [];

for (const file of git.stdout.split("\0").filter(Boolean)) {
  if (ignored.test(file) || !existsSync(file)) continue;

  const path = file.toLowerCase();
  for (const term of priorTerms) {
    if (path.includes(term)) {
      failures.push(`${file}: prior-customer term in file name`);
    }
  }
  for (const name of retiredAssetNames) {
    if (path.includes(name)) {
      failures.push(`${file}: retired brand asset name`);
    }
  }

  const buffer = readFileSync(file);
  if (buffer.includes(0)) continue;

  const text = buffer.toString("utf8");
  const lower = text.toLowerCase();

  for (const term of priorTerms) {
    if (lower.includes(term)) {
      failures.push(`${file}: prior-customer term`);
    }
  }
  if (text.includes(longDash)) {
    failures.push(`${file}: long dash character`);
  }
  for (const color of retiredColors) {
    if (lower.includes(color)) {
      failures.push(`${file}: retired purple brand color`);
    }
  }
  if (oldRgb.test(lower)) {
    failures.push(`${file}: retired purple RGB value`);
  }
}

if (failures.length > 0) {
  process.stderr.write(`${[...new Set(failures)].join("\n")}\n`);
  process.exit(1);
}

process.stdout.write("Repository content check passed.\n");
