import React from 'react';
import Img from 'gatsby-image';

import Layout from './Layout';
import SEO from './SEO';
import Table from './Table';
import NewTabLink from './NewTabLink';
import Navigation from './Navigation';

import getSeriesStats from '../utils/getSeriesStats';
import { rhythm } from '../utils/typography';
import { roundToTwo } from '../utils/helpers';

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

function BaseTemplate({ title, series, pageContext }) {
  const items = series.sort((a, b) => b.average - a.average);

  const rated = series.filter((x) => x.rating !== 0);
  const ratedCount = rated.length;
  const average = roundToTwo(
    rated.reduce((p, c) => p + c.rating, 0) / ratedCount
  );

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
        <p style={{ whiteSpace: 'pre-line' }}>
          In the event I have yet to rate a series, the rating will appear as a
          hyphen (-).{'\n\r'}This is usually the case for series that are still
          airing. {'\n\r'}In the cases where multiple ratings are tied in the
          mode calculation, one will be arbitrarily selected.
        </p>
        <Table headers={seasonHeaders}>
          {({ tdStyle }) =>
            items.map((s, i) => {
              const number = i + 1;
              const stats = getSeriesStats(s);

              return (
                <tr key={s.id}>
                  <td style={{ ...tdStyle, ...rhsAlign }}>{number}</td>
                  <td style={tdStyle}>
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
                  <td style={{ ...tdStyle, ...rhsAlign }}>{stats.rating}</td>
                  <td style={{ ...tdStyle, ...rhsAlign }}>{stats.average}</td>
                  <td style={{ ...tdStyle, ...rhsAlign }}>{stats.highest}</td>
                  <td style={{ ...tdStyle, ...rhsAlign }}>{stats.lowest}</td>
                  <td style={{ ...tdStyle, ...rhsAlign }}>{stats.mode}</td>
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

export default BaseTemplate;
