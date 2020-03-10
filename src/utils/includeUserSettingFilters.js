import { MIN_EPISODES_DEFAULT } from '@/consts';
import storage from '@/utils/storage';

const hasMinEpisodes = (item, minEpisodes) =>
  item.episodes && item.episodes.length >= minEpisodes;

export default function includeUserSettingFilters(
  arr,
  fn = (_, hasCondition) => hasCondition
) {
  const minEpisodes = storage.getKey('minEpisodes') ?? MIN_EPISODES_DEFAULT;
  return arr.filter((x) => fn(x, hasMinEpisodes(x, minEpisodes)));
}
