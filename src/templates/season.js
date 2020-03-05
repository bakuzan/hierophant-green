import React from 'react';
import { graphql } from 'gatsby';

import BaseTemplate from '@/components/BaseTemplate';
import getSeasonName from '@/utils/getSeasonName';
import generateSeriesStatistics from '@/utils/generateSeriesStatistics';

export default ({ data, ...props }) => {
  const entry = data.dataJson;
  const seasonName = getSeasonName(entry.season);

  const items = generateSeriesStatistics(
    seasonName,
    entry.series,
    entry.episodes
  );
  console.log('Season : ', items);
  return <BaseTemplate {...props} title={seasonName} series={items} />;
};

export const query = graphql`
  query($slug: String!) {
    dataJson(fields: { slug: { eq: $slug } }) {
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
        totalEpisodes
        season {
          year
          season
        }
      }
      episodes {
        id
        date
        episode
        rating
        animeId
      }
    }
  }
`;
