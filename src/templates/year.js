import React from 'react';
import { graphql } from 'gatsby';

import BaseTemplate from '@/components/BaseTemplate';
import averageRatedTotal from '@/utils/averageRatedTotal';
import generateSeriesStatistics from '@/utils/generateSeriesStatistics';
import reduceNestedList from '@/utils/reduceNestedList';
import { MIN_EPISODES } from '@/consts';

export default ({ data, ...props }) => {
  const year = props.path.replace(/\//g, '');
  const seasons = data.allDataJson.nodes;

  const overview = seasons.map(averageRatedTotal);
  const series = reduceNestedList(seasons, 'series');
  const episodes = reduceNestedList(seasons, 'episodes');

  const items = generateSeriesStatistics(year, series, episodes).filter(
    (x) => x.episodes.length > MIN_EPISODES
  );

  return (
    <BaseTemplate
      {...props}
      title={`Overview of ${year}`}
      series={items}
      overview={overview}
      getSeason={(_, season) => `${season.season} ${season.year}`}
    />
  );
};

export const query = graphql`
  query($slug: String!) {
    allDataJson(filter: { fields: { slug: { regex: $slug } } }) {
      nodes {
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
  }
`;
