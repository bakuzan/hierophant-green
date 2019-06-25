import React from 'react';
import { graphql } from 'gatsby';

import BaseTemplate from '../components/BaseTemplate';

export default ({ pageResources, ...props }) => {
  const { data } = pageResources.json;
  const seasons = data.allDataJson.nodes;
  const series = seasons.reduce((p, c) => [...p, ...c.series], []);
  const year = props['*'];

  return (
    <BaseTemplate {...props} title={`Overview of ${year}`} series={series} />
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
