import React from 'react';
import { graphql } from 'gatsby';

import BaseTemplate from '@/components/BaseTemplate';
import getSeasonName from '@/utils/getSeasonName';
import generateSeriesStatistics from '@/utils/generateSeriesStatistics';
import includeUserSettingFilters from '@/utils/includeUserSettingFilters';
import { getCurrentSeason } from '@/utils/helpers';

const currentSeason = getCurrentSeason();

export default ({ data, ...props }) => {
  const entry = data.dataJson;
  const seasonName = getSeasonName(entry.season);
  const isCurrentSeason = entry.season === currentSeason;

  const messages = data.allInformationJson.nodes.filter((x) =>
    x.seasons.includes(entry.season)
  );

  const items = includeUserSettingFilters(
    generateSeriesStatistics(seasonName, entry.series, entry.episodes),
    function settingsFilter(item, hasMinimumEpisodes) {
      const isFinished = item.episodes.some(
        (x) => x.episode === item.totalEpisodes
      );

      return hasMinimumEpisodes || (!isFinished && isCurrentSeason);
    }
  );

  return (
    <BaseTemplate
      {...props}
      messages={messages}
      title={seasonName}
      series={items}
      season={entry.season}
      showFilters
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
        yearMessage
        seasons
      }
    }
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
