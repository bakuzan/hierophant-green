import PropTypes from 'prop-types';
import React from 'react';
import Img from 'gatsby-image';

import Layout from './Layout';
import SEO from './SEO';
import Table from './Table';
import NewTabLink from './NewTabLink';
import Navigation from './Navigation';
import YearOverview from './YearOverview';

import getSeriesStats from '../utils/getSeriesStats';
import getSeasonName from '../utils/getSeasonName';
import averageRatedTotal from '../utils/averageRatedTotal';
import { rhythm } from '../utils/typography';

const rhsAlign = { textAlign: 'right' };
const seasonHeaders = [
  { text: '#', style: { ...rhsAlign } },
  { text: 'Title' },
  { text: 'Rating', style: { ...rhsAlign } },
  { text: 'Average', style: { ...rhsAlign } },
  { text: 'Highest', style: { ...rhsAlign } },
  { text: 'Lowest', style: { ...rhsAlign } },
  { text: 'Mode', style: { ...rhsAlign } }
];

function BaseTemplate({ title, series, overview, pageContext }) {
  const items = series.sort((a, b) => b.average - a.average);
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
          In the event I have yet to rate a series, the rating will appear as a
          hyphen (-).{'\n\r'}This is usually the case for series that are still
          airing. {'\n\r'}In the cases where multiple ratings are tied in the
          mode calculation, one will be arbitrarily selected.
        </p>
        <Table headers={seasonHeaders}>
          {() =>
            items.map((s, i) => {
              const number = i + 1;
              const stats = getSeriesStats(s);

              return (
                <tr key={s.id}>
                  <td column-title="#" className="cell cell--rhs">
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div>{number}</div>
                      {s.season && <div>{getSeasonName(s.season, false)}</div>}
                    </div>
                  </td>
                  <td column-title="Title" className="cell">
                    <div style={{ display: 'flex' }}>
                      <Img
                        style={{ flex: `0 0 96px` }}
                        {...s.image.childImageSharp}
                      />
                      <NewTabLink
                        style={{ margin: `0 ${rhythm(1 / 2)}` }}
                        href={`https://myanimelist.net/anime/${s.malId}`}
                      >
                        {s.title}
                      </NewTabLink>
                    </div>
                  </td>
                  <td column-title="Rating" className="cell cell--rhs">
                    {stats.rating}
                  </td>
                  <td column-title="Average" className="cell cell--rhs">
                    {stats.average}
                  </td>
                  <td column-title="Highest" className="cell cell--rhs">
                    {stats.highest}
                  </td>
                  <td column-title="Lowest" className="cell cell--rhs">
                    {stats.lowest}
                  </td>
                  <td column-title="Mode" className="cell cell--rhs">
                    {stats.mode}
                  </td>
                </tr>
              );
            })
          }
        </Table>
      </div>
      <Navigation {...pageContext} />
    </Layout>
  );
}

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
  )
};

export default BaseTemplate;
