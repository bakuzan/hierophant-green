import { roundToTwo } from './helpers';

export default function averageRatedTotal({ season, series }) {
  const rated = series.filter((x) => x.rating !== 0);
  const ratedCount = rated.length;
  const average = roundToTwo(
    rated.reduce((p, c) => p + c.rating, 0) / ratedCount
  );

  return {
    season,
    seriesCount: series.length,
    ratedCount,
    average
  };
}
