import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';

import formatDateForDisplay from 'ayaka/formatDateForDisplay';
import SelectBox from 'meiko/SelectBox';
import Tickbox from 'meiko/Tickbox';

import Layout from '@/components/AppLayout';
import SEO from '@/components/AppSEO';
import Navigation from './Navigation';
import YearOverview from './YearOverview';
import HGTable from './Table/HGTable';

import { useMountedOnClient } from '@/hooks/useMountedOnClient';
import averageRatedTotal from '@/utils/averageRatedTotal';
import seriesSorter from '@/utils/seriesSorter';
import {
  createWeekOptions,
  generateSeriesForWeekFilter
} from '@/utils/weekFilter';

const rhsAlign = { textAlign: 'right' };
const weekHeaders = [
  { text: '#', style: { ...rhsAlign } },
  { text: 'Title' },
  { text: 'Episode Rating', style: { ...rhsAlign } },
  { text: 'Series Average', style: { ...rhsAlign } },
  { text: 'Series Highest', style: { ...rhsAlign } },
  { text: 'Series Lowest', style: { ...rhsAlign } },
  { text: 'Series Mode', style: { ...rhsAlign } }
];

function BaseTemplate({
  season,
  title,
  series,
  overview,
  hideRatingColumn,
  getSeason,
  customDescriptiveText,
  showFilters,
  pageContext
}) {
  const [week, setWeek] = useState(0);
  const [hideCarryOvers, setHideCarryOvers] = useState(false);
  const mounted = useMountedOnClient();
  const weekOptions = useMemo(() => createWeekOptions(season, showFilters), [
    season,
    showFilters
  ]);

  const isAllWeeks = week === 0;
  const option = weekOptions.find((x) => x.value === week);
  const filteredSeries = generateSeriesForWeekFilter(
    series.filter((x) => !x.isCarryOver || !hideCarryOvers),
    option
  );

  const items = filteredSeries.sort(seriesSorter);
  const { average, ratedCount } = averageRatedTotal({ series });

  return (
    <Layout>
      <SEO title={title} />
      <div>
        <h2>{title}</h2>
        {!!ratedCount && (
          <p>
            Average: {average} for {ratedCount} rated series
          </p>
        )}
        {overview && <YearOverview data={overview} />}
        <p style={{ whiteSpace: 'pre-line' }}>
          {customDescriptiveText}
          {!hideRatingColumn &&
            `In the event I have yet to rate a series, the rating will appear as a hyphen (-).
            This is usually the case for series that are still airing.`}
          {'\n\r'}In the cases where multiple ratings are tied in the mode
          calculation, one will be arbitrarily selected.
          {'\n\r'}Entries are sorted by average desc, rating desc, mode desc,
          and title asc.
        </p>
        {showFilters && mounted && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: `var(--primary-colour)`,
              color: `var(--primary-contrast)`,
              padding: `5px`,
              margin: `10px 0`
            }}
          >
            <div style={{ margin: `0 5px`, minWidth: `200px` }}>
              <SelectBox
                style={{
                  backgroundColor: `var(--primary-colour)`,
                  color: `var(--primary-contrast)`
                }}
                className="select-box--with-background"
                id="weeks"
                name="weeks"
                text="Show week(s)"
                value={week}
                onChange={(e) => setWeek(Number(e.target.value))}
              >
                {weekOptions.map((x) => (
                  <option key={x.value} value={x.value}>
                    {x.text}
                  </option>
                ))}
              </SelectBox>
            </div>
            <div style={{ margin: `0 5px` }}>
              <Tickbox
                className="hide-carry-overs hide-carry-overs--with-background"
                id="hideCarryOvers"
                name="hideCarryOvers"
                checked={hideCarryOvers}
                text={' Hide carry overs'}
                onChange={(e) => setHideCarryOvers((p) => !p)}
              />
            </div>
          </div>
        )}
        {!isAllWeeks && (
          <p>
            You are currently viewing the season filtered to episodes watched
            between {formatDateForDisplay(option.startDate)} and{' '}
            {formatDateForDisplay(option.endDate)} inclusive. All series
            statistic columns are cumulative for the season up to and including{' '}
            {option.text}.
          </p>
        )}
        {!items.length && (
          <p>
            <strong>
              There are no items to display for the current filters selected.
            </strong>
          </p>
        )}
        {isAllWeeks ? (
          <HGTable
            hideRatingColumn={hideRatingColumn}
            getSeason={getSeason}
            items={items}
          />
        ) : (
          <HGTable
            overrideHeaders={weekHeaders}
            getSeason={getSeason}
            items={items}
          />
        )}
      </div>
      <Navigation {...pageContext} />
    </Layout>
  );
}

BaseTemplate.defaultProps = {
  customDescriptiveText: '',
  showFilters: false
};

BaseTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  series: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      rating: PropTypes.number,
      average: PropTypes.number,
      highest: PropTypes.number,
      lowest: PropTypes.number,
      mode: PropTypes.number
    })
  ).isRequired,
  overview: PropTypes.arrayOf(
    PropTypes.shape({
      season: PropTypes.string.isRequired,
      seriesCount: PropTypes.number.isRequired,
      ratedCount: PropTypes.number.isRequired,
      average: PropTypes.string.isRequired
    })
  ),
  hideRatingColumn: PropTypes.bool,
  customDescriptiveText: PropTypes.string,
  getSeason: PropTypes.func,
  showFilters: PropTypes.bool,
  season: PropTypes.string
};

export default BaseTemplate;
