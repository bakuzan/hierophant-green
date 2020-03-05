// order by average desc, rating desc, mode desc, none
export default function seriesSorter(a, b) {
  const as = a.statistics;
  const bs = b.statistics;

  return (
    bs.average - as.average ||
    b.rating - a.rating ||
    bs.mode - as.mode ||
    a.title.localeCompare(b.title) ||
    0
  );
}
