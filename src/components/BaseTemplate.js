import PropTypes from 'prop-types';
import React from 'react';

import Layout from './Layout';
import SEO from './SEO';
import Navigation from './Navigation';
import YearOverview from './YearOverview';
import HGTable from './Table/HGTable';

import averageRatedTotal from '@/utils/averageRatedTotal';
import seriesSorter from '@/utils/seriesSorter';

function BaseTemplate({
  title,
  series,
  overview,
  hideRatingColumn,
  getSeason,
  customDescriptiveText,
  pageContext
}) {
  const { average, ratedCount } = averageRatedTotal({ series });
  const items = series.sort(seriesSorter);

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
        <HGTable
          hideRatingColumn={hideRatingColumn}
          getSeason={getSeason}
          items={items}
        />
      </div>
      <Navigation {...pageContext} />
    </Layout>
  );
}

BaseTemplate.defaultProps = {
  customDescriptiveText: ''
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
  getSeason: PropTypes.func
};

export default BaseTemplate;
