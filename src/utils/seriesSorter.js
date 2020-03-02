// order by average desc, rating desc, mode desc, none
const seriesSorter = (a, b) =>
  b.average - a.average ||
  b.rating - a.rating ||
  b.mode - a.mode ||
  a.title.localeCompare(b.title) ||
  0;

export default seriesSorter;
