import React from 'react';
import { Link, graphql } from 'gatsby';
import { css } from '@emotion/core';

import Layout from '../components/Layout';
import Personal from '../components/Personal';
import SEO from '../components/SEO';

import { rhythm } from '../utils/typography';
import getSeasonName from '../utils/getSeasonName';

export default ({ data }) => {
  const info = data.allDataJson;

  return (
    <Layout>
      <SEO title="Home" />
      <aside>
        <Personal />
      </aside>
      <div>
        <h2
          css={css`
            display: inline-block;
            margin: ${rhythm(3 / 4)} 0px;
          `}
        >
          Seasons
        </h2>
        <div>{info.totalCount} covered</div>
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
                  &:hover {
                    color: var(--link-colour);
                  }
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
