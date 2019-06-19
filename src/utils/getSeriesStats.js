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
    average: roundToTwo(average),
    highest,
    lowest,
    mode
  };
}
