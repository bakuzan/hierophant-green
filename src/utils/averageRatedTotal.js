import { roundToTwo } from './helpers';
import includeUserSettingFilters from './includeUserSettingFilters';

export default function averageRatedTotal({ season, series }) {
  const items = includeUserSettingFilters(
    series,
    (x, hasMinEpisodes) => !x.episodes || hasMinEpisodes
  );

  const rated = items.filter((x) => x.rating !== 0);
  const ratedCount = rated.length;
  const ratingSum = rated.reduce((p, c) => p + c.rating, 0);
  const average = roundToTwo(ratingSum / ratedCount);

  return {
    season,
    seriesCount: items.length,
    ratedCount,
    average
  };
}
