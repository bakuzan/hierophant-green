export default function reduceNestedList(seasons, key) {
  return seasons
    .reduce((p, c) => [...p, ...c[key]], [])
    .filter((x, i, a) => a.findIndex((s) => s.id === x.id) === i);
}
