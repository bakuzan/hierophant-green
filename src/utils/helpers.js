export const capitalise = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export function roundToTwo(num) {
  const n = +(Math.round(num + 'e+2') + 'e-2');
  return Number(n).toFixed(2);
}
