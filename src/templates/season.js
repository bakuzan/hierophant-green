import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Table from '../components/Table';
import NewTabLink from '../components/NewTabLink';

import getSeasonName from '../utils/getSeasonName';
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

export default ({ data }) => {
  const entry = data.dataJson;
  const items = entry.series.sort((a, b) => b.average - a.average);
  const seasonName = getSeasonName(entry.season);

  const rated = entry.series.filter((x) => x.rating !== 0);
  const ratedCount = rated.length;
  const seasonAverage = roundToTwo(
    rated.reduce((p, c) => p + c.rating, 0) / ratedCount
  );

  return (
    <Layout>
      <SEO title={seasonName} />
      <div>
        <h2>{seasonName}</h2>
        {!!ratedCount && (
          <p>
            Average: {seasonAverage} for {ratedCount} rated series
          </p>
        )}
        <p style={{ whiteSpace: 'pre-line' }}>
          In the event I have yet to rate a series, the rating will appear as a
          hypen (-).{'\n\r'}This is usually the case for series that are still
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
        image {
          childImageSharp {
            fixed(width: 96, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        malId
        rating
        average
        highest
        lowest
        mode
      }
    }
  }
`;
