import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Table from '../components/Table';
import getSeasonName from '../utils/getSeasonName';
import getSeriesStats from '../utils/getSeriesStats';

const rhsAlign = { textAlign: 'right' };

const seasonHeaders = [
  { text: 'Title' },
  { text: 'Rating', style: { ...rhsAlign } },
  { text: 'Average', style: { ...rhsAlign } },
  { text: 'Highest', style: { ...rhsAlign } },
  { text: 'Lowest', style: { ...rhsAlign } },
  { text: 'Mode', style: { ...rhsAlign } }
];

export default ({ data }) => {
  const entry = data.dataJson;
  const items = entry.series.sort((a, b) => b.rating - a.rating);
  const seasonName = getSeasonName(entry.season);
  console.log('SEASON', entry);

  return (
    <Layout>
      <SEO title={seasonName} />
      <div>
        <h2>{seasonName}</h2>
        <Table headers={seasonHeaders}>
          {items.map((s) => {
            const stats = getSeriesStats(s);
            return (
              <tr key={s.id}>
                <td>{s.title}</td>
                <td style={rhsAlign}>{s.rating || '-'}</td>
                <td style={rhsAlign}>{stats.average}</td>
                <td style={rhsAlign}>{stats.highest}</td>
                <td style={rhsAlign}>{stats.lowest}</td>
                <td style={rhsAlign}>{stats.mode}</td>
              </tr>
            );
          })}
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
        malId
        rating
        episodeRatings
      }
    }
  }
`;
