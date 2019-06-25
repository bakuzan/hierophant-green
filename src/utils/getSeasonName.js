import { seasonNames } from '../consts';
import { capitalise } from './helpers';

export default function getSeasonName(value) {
  const [year, month] = value.split('-');

  const m = seasonNames[month] || '';
  const y = year ? ` ${year}` : '';

  return capitalise(`${m}${y}`);
}
