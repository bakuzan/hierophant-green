import { capitalise } from 'ayaka/capitalise';
import { seasonNames } from '../consts';

export default function getSeasonName(value, withYear = true) {
  const [year, month] = value.split('-');

  const m = seasonNames[month] ?? '';
  const y = year ?? '';

  const mCapped = capitalise(m);
  return withYear ? `${mCapped} ${y}` : mCapped;
}
