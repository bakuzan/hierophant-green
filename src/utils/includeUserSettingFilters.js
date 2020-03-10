import storage from '@/utils/storage';

const hasMinEpisodes = (item, minEpisodes) =>
  item.episodes && item.episodes.length >= minEpisodes;

export default function includeUserSettingFilters(
  arr,
  fn = (_, hasCondition) => hasCondition
) {
  const minEpisodes = storage.getKey('minEpisodes');
  return arr.filter((x) => fn(x, hasMinEpisodes(x, minEpisodes)));
}
