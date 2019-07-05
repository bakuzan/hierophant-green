import React from 'react';
import { graphql } from 'gatsby';

import BaseTemplate from '../components/BaseTemplate';
import averageRatedTotal from '../utils/averageRatedTotal';

export default ({ data, ...props }) => {
  const year = props['*'];
  const seasons = data.allDataJson.nodes;
  const overview = seasons.map(averageRatedTotal);
  const series = seasons.reduce(
    (p, c) => [...p, ...c.series.map((x) => ({ ...x, season: c.season }))],
    []
  );

  return (
    <BaseTemplate
      {...props}
      title={`Overview of ${year}`}
      overview={overview}
      series={series}
    />
  );
};

export const query = graphql`
  query($slug: String!) {
    allDataJson(filter: { fields: { slug: { regex: $slug } } }) {
      nodes {
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
  }
`;
