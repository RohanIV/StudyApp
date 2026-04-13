/**
 * Prints merged flashcard totals (FC_DECKS + BANK, deduped) per module.
 * Run: node scripts/fc-module-totals.mjs
 * After changing BANK or FC_DECKS, run this and sync index.html mod-count lines.
 */
import fs from 'fs';
import vm from 'vm';

const t = fs.readFileSync(new URL('../app.js', import.meta.url), 'utf8');
const start = t.indexOf('const MODULES = ');
const end = t.indexOf('const NOTES_M1=`');
if (start < 0 || end < 0 || end <= start) throw new Error('slice bounds');
const chunk = t.slice(start, end);

const r = vm.runInNewContext(
  `(function () {\n${chunk}\nreturn { getMergedFlashDeck, MODULES };\n})()`,
  vm.createContext({ console }),
);

function modTotal(mk) {
  let n = 0;
  for (const s of r.MODULES[mk].sections) n += r.getMergedFlashDeck(s.id).length;
  return n;
}

const mods = ['mod1', 'mod2', 'mod3', 'mod4', 'mod5', 'mod6'];
let all = 0;
for (const mk of mods) {
  const n = modTotal(mk);
  all += n;
  const secCount = r.MODULES[mk].sections.length;
  console.log(mk, n, 'sections', secCount);
}
console.log('ALL', all, 'sections', mods.reduce((a, mk) => a + r.MODULES[mk].sections.length, 0));
