import React from 'react';
import { graphql } from 'gatsby';

import groupBy from 'ayaka/groupBy';

import Layout from '@/components/AppLayout';
import SEO from '@/components/AppSEO';
import YearSection from '@/components/Honours/YearSection';

export default ({ data }) => {
  const seasons = data.allDataJson.nodes ?? [];
  const groups = groupBy(seasons, (x) => x.season.split('-')[0]);
  const years = Array.from(groups.entries());

  return (
    <Layout>
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
          <YearSection key={year} title={year} items={items} />
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allDataJson(sort: { order: DESC, fields: season }) {
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
