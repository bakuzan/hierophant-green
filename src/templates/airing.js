import React from 'react';
import { graphql } from 'gatsby';

import BaseTemplate from '../components/BaseTemplate';
import niceDate from '../utils/niceDate';

export default ({ data, ...props }) => {
  const entry = data.dataJson;
  const date = niceDate(entry.date);
  const seasonName = `Currently Airing (As of ${date})`;

  return (
    <BaseTemplate
      {...props}
      hideRatingColumn
      customDescriptiveText={`All shows currently airing as of ${date} are displayed.
      The data below covers all episodes up to, but not including ${date}.`}
      title={seasonName}
      series={entry.series}
    />
  );
};

export const query = graphql`
  query($slug: String!) {
    dataJson(fields: { slug: { eq: $slug } }) {
      id
      season
      date
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
