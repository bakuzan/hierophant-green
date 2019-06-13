import React from 'react';
import { Link, graphql } from 'gatsby';
import { css } from '@emotion/core';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import { rhythm } from '../utils/typography';
import getSeasonName from '../utils/getSeasonName';

export default ({ data }) => {
  console.log('index > ', data);
  const info = data.allDataJson;
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <h2
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Seasons
        </h2>
        <div>{info.totalCount} Posts</div>
        {info.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h4
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {getSeasonName(node.season)}
              </h4>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allDataJson(sort: { fields: [season], order: DESC }) {
      totalCount
      edges {
        node {
          id
          season
          fields {
            slug
          }
        }
      }
    }
  }
`;
