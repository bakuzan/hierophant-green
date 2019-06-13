import { roundToTwo } from './helpers';

/** Why infinity protection ?
 * Math.min() === Infinity
 * Math.max() === -Infinity
 */
function infinityProtection(value) {
  return Math.abs(value) !== Infinity ? value : 0;
}

export function findMode(arr) {
  const map = {};
  const len = arr.length;
  let greatestFreq = 0;
  let mode = null;

  for (let i = 0; i < len; i++) {
    if (map[arr[i]] === undefined) {
      map[arr[i]] = 0;
    }

    map[arr[i]] += 1;

    if (map[arr[i]] > greatestFreq) {
      greatestFreq = map[arr[i]];
      mode = arr[i];
    }
  }

  return mode;
}

export function findAverage(arr) {
  const arrZeroless = arr.filter((x) => !!x);
  const ratingsSum = arrZeroless.reduce((p, c) => p + c, 0);
  return roundToTwo(ratingsSum / arrZeroless.length || 0);
}

export default function getSeriesStats({ episodeRatings }) {
  const ratingsNoZeroes = episodeRatings.filter((x) => !!x);

  return {
    average: findAverage(ratingsNoZeroes),
    highest: infinityProtection(Math.max(...episodeRatings)),
    lowest: infinityProtection(Math.max(...ratingsNoZeroes)),
    mode: findMode(episodeRatings)
  };
}
