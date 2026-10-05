import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';

const out = process.argv[2] ?? 'dist/stats.svg';
const login = process.env.GITHUB_LOGIN;
const token = process.env.GITHUB_TOKEN;

const query = `query($login: String!) {
  user(login: $login) {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks { contributionDays { date contributionCount } }
      }
    }
  }
}`;

const res = await fetch('https://api.github.com/graphql', {
  method: 'POST',
  headers: { Authorization: `bearer ${token}`, 'Content-Type': 'application/json' },
  body: JSON.stringify({ query, variables: { login } }),
});
const json = await res.json();
if (!res.ok || json.errors) {
  console.error(JSON.stringify(json));
  process.exit(1);
}

const calendar = json.data.user.contributionsCollection.contributionCalendar;
const days = calendar.weeks.flatMap((w) => w.contributionDays);
const total = calendar.totalContributions;

let longest = 0;
let run = 0;
for (const d of days) {
  run = d.contributionCount > 0 ? run + 1 : 0;
  longest = Math.max(longest, run);
}

let current = 0;
let i = days.length - 1;
if (i >= 0 && days[i].contributionCount === 0) i--;
while (i >= 0 && days[i].contributionCount > 0) {
  current++;
  i--;
}

const last = days.slice(-30);
const max = Math.max(1, ...last.map((d) => d.contributionCount));
const months = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
const label = (iso) => {
  const [, m, d] = iso.split('-').map(Number);
  return `${d} ${months[m - 1]}`;
};

const chartX = 640;
const chartW = 520;
const baseY = 186;
const maxH = 118;
const step = chartW / last.length;
const barW = Math.max(4, step - 6);

const bars = last
  .map((d, idx) => {
    const x = (chartX + idx * step + (step - barW) / 2).toFixed(1);
    if (d.contributionCount === 0) {
      return `<rect x="${x}" y="${baseY - 2}" width="${barW.toFixed(1)}" height="2" rx="1" fill="#30363D"/>`;
    }
    const h = Math.max(6, (d.contributionCount / max) * maxH);
    const y = (baseY - h).toFixed(1);
    const begin = (0.3 + idx * 0.04).toFixed(2);
    return `<rect x="${x}" y="${baseY}" width="${barW.toFixed(1)}" height="0" rx="3" fill="url(#bar)"><title>${label(d.date)}: ${d.contributionCount}</title><animate attributeName="height" from="0" to="${h.toFixed(1)}" begin="${begin}s" dur="0.6s" fill="freeze"/><animate attributeName="y" from="${baseY}" to="${y}" begin="${begin}s" dur="0.6s" fill="freeze"/></rect>`;
  })
  .join('\n    ');

const metric = (x, value, color, title, sub, delay) => `
  <g opacity="0">
    <animate attributeName="opacity" from="0" to="1" begin="${delay}s" dur="0.6s" fill="freeze"/>
    <text x="${x}" y="122" font-family="'Segoe UI', Helvetica, Arial, sans-serif" font-size="46" font-weight="800" fill="${color}">${value}</text>
    <text x="${x}" y="156" font-family="'Segoe UI', Helvetica, Arial, sans-serif" font-size="16" font-weight="600" fill="#E6EDF3">${title}</text>
    <text x="${x}" y="180" font-family="Consolas, Menlo, monospace" font-size="13" fill="#6E7681">${sub}</text>
  </g>`;

const streakSub = current > 0 ? `desde ${label(days[i + 1].date)}` : 'sin racha activa';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="230" viewBox="0 0 1200 230">
  <defs>
    <linearGradient id="bar" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0" stop-color="#22C55E"/>
      <stop offset="1" stop-color="#A855F7"/>
    </linearGradient>
  </defs>
  <rect x="0.5" y="0.5" width="1199" height="229" rx="18" fill="#0D1117" stroke="#30363D"/>
  <text x="40" y="48" font-family="Consolas, Menlo, monospace" font-size="14" fill="#6E7681">actividad</text>
  ${metric(40, total, '#E6EDF3', 'contribuciones', 'último año', 0)}
  ${metric(240, current, '#A855F7', 'racha actual', streakSub, 0.2)}
  ${metric(440, longest, '#22C55E', 'racha más larga', 'días seguidos', 0.4)}
  <text x="${chartX}" y="48" font-family="Consolas, Menlo, monospace" font-size="14" fill="#6E7681">últimos 30 días</text>
  <line x1="${chartX}" y1="${baseY + 0.5}" x2="${chartX + chartW}" y2="${baseY + 0.5}" stroke="#30363D"/>
  <text x="${chartX}" y="210" font-family="Consolas, Menlo, monospace" font-size="12" fill="#6E7681">${label(last[0].date)}</text>
  <text x="${chartX + chartW}" y="210" text-anchor="end" font-family="Consolas, Menlo, monospace" font-size="12" fill="#6E7681">${label(last[last.length - 1].date)}</text>
    ${bars}
</svg>
`;

mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, svg);
console.log(`total=${total} actual=${current} max=${longest}`);
