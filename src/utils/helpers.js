export const capitalise = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export function roundToTwo(num) {
  return +(Math.round(num + 'e+2') + 'e-2');
}
