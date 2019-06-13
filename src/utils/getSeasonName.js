import { seasonNames } from '../consts';
import { capitalise } from './helpers';

export default function getSeasonName(value, includeYear = true) {
  const [year, month] = value.includes('-') ? value.split('-') : ['', value];

  return capitalise(
    `${seasonNames[month]}${includeYear && year ? ` ${year}` : ''}`
  );
}
