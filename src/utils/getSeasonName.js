import { seasonNames } from '../consts';
import { capitalise } from './helpers';

export default function getSeasonName(value, withYear = true) {
  const [year, month] = value.split('-');

  const m = seasonNames[month] ?? '';
  const y = year ?? '';

  const mCapped = capitalise(m);
  return withYear ? `${mCapped} ${y}` : mCapped;
}
