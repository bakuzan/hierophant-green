import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Table from '../components/Table';
import NewTabLink from '../components/NewTabLink';

import getSeasonName from '../utils/getSeasonName';
import getSeriesStats from '../utils/getSeriesStats';

const rhsAlign = { textAlign: 'right' };

const seasonHeaders = [
  { text: '#' },
  { text: 'Title' },
  { text: 'Rating', style: { ...rhsAlign } },
  { text: 'Average', style: { ...rhsAlign } },
  { text: 'Highest', style: { ...rhsAlign } },
  { text: 'Lowest', style: { ...rhsAlign } },
  { text: 'Mode', style: { ...rhsAlign } }
];

export default ({ data }) => {
  const entry = data.dataJson;
  const items = entry.series.sort((a, b) => b.average - a.average);
  const seasonName = getSeasonName(entry.season);
  console.log('SEASON', entry);

  return (
    <Layout>
      <SEO title={seasonName} />
      <div>
        <h2>{seasonName}</h2>
        <p style={{ whiteSpace: 'pre' }}>
          In the event I have yet to rate a series, the rating will appear as a
          hypen (-). {'\n\r'}In the cases where multiple ratings are tied in the
          mode calculation, one will be arbitrarily selected.
        </p>
        <Table headers={seasonHeaders}>
          {({ tdStyle }) =>
            items.map((s, i) => {
              const number = i + 1;
              const stats = getSeriesStats(s);

              return (
                <tr key={s.id}>
                  <td style={tdStyle}>{number}</td>
                  <td style={tdStyle}>
                    <NewTabLink
                      href={`https://myanimelist.net/anime/${s.malId}`}
                    >
                      {s.title}
                    </NewTabLink>
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
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    dataJson(fields: { slug: { eq: $slug } }) {
      id
      season
      series {
        id
        title
        image
        malId
        rating
        average
        highest
        lowest
        mode
        episodes {
          id
          episode
          rating
          note
        }
      }
    }
  }
`;
