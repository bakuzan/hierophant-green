import { roundToTwo } from './helpers';
import { MIN_EPISODES } from '@/consts';

export default function averageRatedTotal({ season, series }) {
  const items = series.filter(
    (x) => !x.episodes || x.episodes.length > MIN_EPISODES
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
