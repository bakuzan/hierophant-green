/** Why infinity protection ?
 * Math.min() === Infinity
 * Math.max() === -Infinity
 */

function infinityProtection(value) {
  return Math.abs(value) !== Infinity ? value : 0;
}

export function getMaximum(arr) {
  return infinityProtection(Math.max(...arr));
}

export function getMinimum(arr) {
  const values = arr.filter((x) => !!x); // remove zeroes
  return infinityProtection(Math.min(...values));
}
