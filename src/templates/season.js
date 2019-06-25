import React from 'react';
import { graphql } from 'gatsby';

import BaseTemplate from '../components/BaseTemplate';
import getSeasonName from '../utils/getSeasonName';

export default ({ data, ...props }) => {
  const entry = data.dataJson;
  const seasonName = getSeasonName(entry.season);

  return <BaseTemplate {...props} title={seasonName} series={entry.series} />;
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
