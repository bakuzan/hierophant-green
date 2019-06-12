import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

export default ({ data }) => {
  const entry = data.dataJson;
  const items = entry.series.sort((a, b) => b.rating - a.rating);
  console.log('SEASON', entry);

  return (
    <Layout>
      <div>
        <h2>{entry.season}</h2>
        <ul>
          {items.map((s) => (
            <li key={s.id}>
              {s.title} - {s.rating}
            </li>
          ))}
        </ul>
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
