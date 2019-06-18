import { roundToTwo } from './helpers';

export default function getSeriesStats({
  rating,
  average,
  highest,
  lowest,
  mode,
  episodes
}) {
  return {
    rating: rating || '-',
    average: Number(roundToTwo(average)).toFixed(2),
    highest,
    lowest,
    mode
  };
}
