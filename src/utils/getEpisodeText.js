export default function getEpisodeText(episodes, lastEpisode) {
  const nums = episodes.map((x) => x.episode);
  const minNum = Math.min(...nums);
  const maxNum = Math.max(...nums);

  if (minNum === maxNum) {
    const suff = lastEpisode && minNum === lastEpisode ? ' (END)' : '';
    return `Episode ${minNum}${suff}`;
  } else if (minNum + 1 === maxNum) {
    const suff = lastEpisode && maxNum === lastEpisode ? ' (END)' : '';
    return `Episodes ${minNum} and ${maxNum}${suff}`;
  }

  const suff = lastEpisode && maxNum === lastEpisode ? ' (END)' : '';
  return `Episodes ${minNum}-${maxNum}${suff}`;
}
