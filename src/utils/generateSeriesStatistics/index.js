import getAverage from './average';
import { getMaximum, getMinimum } from './minMax';
import getMode from './mode';

export function getEpisodeStatistics(entries) {
  const values = entries.map((x) => x.rating);

  return {
    average: getAverage(values),
    highest: getMaximum(values),
    lowest: getMinimum(values),
    mode: getMode(values)
  };
}

export default function generateSeriesStatistics(
  yearOrSeasonName,
  series,
  allEpisodes
) {
  const isYear = yearOrSeasonName.length === 4;

  return series.map((x) => {
    const episodes = allEpisodes.filter((e) => e.animeId === x.id);
    const statistics = getEpisodeStatistics(episodes);
    const itemSeason = isYear
      ? `${x.season.year}`
      : `${x.season.season} ${x.season.year}`;

    return {
      ...x,
      isCarryOver: itemSeason !== yearOrSeasonName,
      episodes,
      statistics
    };
  });
}
