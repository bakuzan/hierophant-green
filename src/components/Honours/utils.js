import includeUserSettingFilters from '@/utils/includeUserSettingFilters';

export function selectTop(items, opts) {
  const n = opts.top ?? 3;
  const hide = opts.hideCarryOvers ?? false;
  const filtered = includeUserSettingFilters(
    items,
    (x, hasMinEpisodes) => !x.isCarryOver || (!hide && hasMinEpisodes)
  );

  return filtered.slice(0, n);
}

export function orderStandoutEpisodes(a, b) {
  const av = a.episode.rating;
  const bv = b.episode.rating;

  if (av < bv) {
    return 1;
  }

  if (av > bv) {
    return -1;
  }

  const ad = av - a.rating;
  const bd = bv - b.rating;

  if (ad < bd) {
    return 1;
  }

  if (ad > bd) {
    return -1;
  }

  return a.title.localeCompare(b.title);
}

export function generateSeriesForEpisode(yearOrSeasonName, series, episodes) {
  const isYear = yearOrSeasonName.length === 4;

  return episodes.map((x) => {
    const data = series.find((s) => s.id === x.animeId);
    const itemSeason = isYear
      ? `${data.season.year}`
      : `${data.season.season} ${data.season.year}`;

    return {
      ...data,
      episodeId: x.id,
      episode: x,
      isCarryOver: itemSeason !== yearOrSeasonName
    };
  });
}
