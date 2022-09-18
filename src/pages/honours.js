import React from 'react';
import { graphql } from 'gatsby';

import groupBy from 'ayaka/groupBy';

import Layout from '@/components/AppLayout';
import SEO from '@/components/AppSEO';
import YearSection from '@/components/Honours/YearSection';

export default function HonoursPage({ data }) {
  const messages = data.allInformationJson.nodes ?? [];
  const seasons = data.allDataJson.nodes ?? [];
  const groups = groupBy(seasons, (x) => x.season.split('-')[0]);
  const years = Array.from(groups.entries());

  return (
    <Layout>
      {/* eslint-disable-next-line react/jsx-pascal-case */}
      <SEO title="Honours" />
      <div>
        <header>
          <h2>Honours</h2>
        </header>
        <p>
          Below are the best series of each season that currently has data on
          the site.
          <br /> These are automated based on the on the sort order of average
          desc, rating desc, mode desc, and title asc.
        </p>
        {years.map(([year, items]) => (
          <YearSection
            key={year}
            title={year}
            items={items}
            messages={messages}
          />
        ))}
      </div>
    </Layout>
  );
}

export const query = graphql`
  {
    allInformationJson {
      nodes {
        key
        type
        message
        yearMessage
        seasons
      }
    }
    allDataJson(sort: { order: DESC, fields: season }) {
      nodes {
        season
        series {
          id
          title
          image {
            childImageSharp {
              gatsbyImageData(width: 96, height: 150, layout: FIXED)
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
