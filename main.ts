// Angry Judge: The Short Rant Contest — entry program.
//
// Writes one short, funny rant about an everyday annoyance to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
// Node 22+, stdlib only, deterministic, no network: the rant is a
// single fixed string, so every run produces byte-identical output.
//
// The rant itself: one concrete routine (the 7:42 bus, always 16
// minutes late), one counted habit (214 returned waves), and the
// twist saved for the last words — the narrator is not the driver's
// friend, he is a hostage who has learned to smile at his captor.
// No throat-clearing, no explanation of the joke, no judge address.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const RANT =
  "The 7:42 bus arrives at 7:58 every single day, and the driver still waves at me like we're old friends. " +
  "I have waved back 214 times. " +
  "I am not his friend. " +
  "I am a hostage who has learned to smile at his captor.";

function writeEntry(outDir: string, text: string): string {
  mkdirSync(outDir, { recursive: true });
  const entryPath = join(outDir, "entry.txt");
  writeFileSync(entryPath, text, "utf8");
  return entryPath;
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
writeEntry(outDir, RANT);
