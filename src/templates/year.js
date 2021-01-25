import React from 'react';
import { graphql } from 'gatsby';

import BaseTemplate from '@/components/BaseTemplate';
import averageRatedTotal from '@/utils/averageRatedTotal';
import generateSeriesStatistics from '@/utils/generateSeriesStatistics';
import reduceNestedList from '@/utils/reduceNestedList';
import includeUserSettingFilters from '@/utils/includeUserSettingFilters';

export default ({ data, ...props }) => {
  const year = props.path.replace(/\//g, '');
  const seasons = data.allDataJson.nodes;

  const messages = data.allInformationJson.nodes.filter((x) =>
    x.seasons.some((s) => s.includes(year))
  );

  const overview = seasons.map((s) =>
    averageRatedTotal({
      season: s.season,
      series: s.series.map((x) => ({
        ...x,
        episodes: s.episodes.filter((e) => e.animeId === x.id)
      }))
    })
  );

  const series = reduceNestedList(seasons, 'series');
  const episodes = reduceNestedList(seasons, 'episodes');
  const items = includeUserSettingFilters(
    generateSeriesStatistics(year, series, episodes)
  );

  return (
    <BaseTemplate
      {...props}
      messages={messages}
      title={`Overview of ${year}`}
      series={items}
      year={year}
      overview={overview}
      getSeason={(_, season) => `${season.season} ${season.year}`}
      showFilters={{ hideCarryOvers: true }}
    />
  );
};

export const query = graphql`
  query($slug: String!) {
    allInformationJson {
      nodes {
        key
        type
        message
        seasons
      }
    }
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
