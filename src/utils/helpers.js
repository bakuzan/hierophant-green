import { seasonNames } from '../consts';

export function roundToTwo(num) {
  const n = +(Math.round(num + 'e+2') + 'e-2');
  return Number(n).toFixed(2);
}

export function getCurrentSeason() {
  const today = new Date();
  const month = `${today.getMonth() + 1}`.padStart(2, '0');
  const monthKey = Object.keys(seasonNames)
    .reverse()
    .find((num) => num <= month);

  return `${today.getFullYear()}-${monthKey}`;
}
