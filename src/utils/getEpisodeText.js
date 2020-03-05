export default function getEpisodeText(episodes) {
  const nums = episodes.map((x) => x.episode);
  const minNum = Math.min(...nums);
  const maxNum = Math.max(...nums);

  if (minNum === maxNum) {
    return `Episode ${minNum}`;
  } else if (minNum + 1 === maxNum) {
    return `Episodes ${minNum} and ${maxNum}`;
  }

  return `Episodes ${minNum}-${maxNum}`;
}
