import startOfDay from 'ayaka/startOfDay';
import endOfDay from 'ayaka/endOfDay';

import reduceNestedList from '@/utils/reduceNestedList';
import { getEpisodeStatistics } from '@/utils/generateSeriesStatistics';

const extraDaySeasons = [8, 11];

export function createWeekOptions(season, showFilters) {
  if (!showFilters) {
    return [];
  }

  const options = [{ value: 0, text: 'All' }];
  const optionLimit = 13;
  const weeks = Array(optionLimit)
    .fill(null)
    .map((_, i) => i + 1);

  let initDate = new Date(`${season}-01T00:00:00.000Z`);

  for (let week of weeks) {
    const isLimit = week === optionLimit;
    const dayOffset =
      isLimit && extraDaySeasons.includes(initDate.getMonth()) ? 7 : 6;

    const startDate = startOfDay(initDate);
    const endDate = endOfDay(startDate);
    endDate.setDate(endDate.getDate() + dayOffset);

    options.push({
      value: week,
      text: `Week ${week}`,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString()
    });

    initDate = new Date(endDate);
    initDate.setDate(initDate.getDate() + 1);
  }

  return options.filter(
    (x) => !x.startDate || x.startDate < endOfDay(new Date()).toISOString()
  );
}

export function generateSeriesForWeekFilter(items, option) {
  if (!option || option.value === 0) {
    return items;
  }

  return reduceNestedList(items, 'episodes')
    .filter((x) => x.date >= option.startDate && x.date <= option.endDate)
    .map((x) => {
      const series = items.find((s) => s.id === x.animeId);
      const statistics = getEpisodeStatistics(
        series.episodes.filter((x) => x.date <= option.endDate)
      );

      return {
        id: x.id,
        animeId: x.animeId,
        episode: x.episode,
        rating: x.rating,

        title: series.title,
        image: series.image,
        malId: series.malId,
        statistics,
        episodes: [x]
      };
    });
}
