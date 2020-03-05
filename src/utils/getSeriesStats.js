import { roundToTwo } from './helpers';

export default function getSeriesStats({ rating, statistics }) {
  const { average, highest, lowest, mode } = statistics;
  return {
    rating: rating || '-',
    average: roundToTwo(average),
    highest,
    lowest,
    mode
  };
}
