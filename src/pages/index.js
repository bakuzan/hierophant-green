import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import { rhythm } from '../utils/typography';
import getSeasonName from '../utils/getSeasonName';

export default ({ data }) => {
  const info = data.allDataJson;
  console.log('index > ', info);
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <h2
          style={{
            display: `inline-block`,
            borderBottom: `1px solid`
          }}
        >
          Seasons
        </h2>
        <div>{info.totalCount} Posts</div>
        {info.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              style={{
                textDecoration: 'none',
                color: 'inherit'
              }}
            >
              <h4
                style={{
                  marginBottom: rhythm(1 / 4)
                }}
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
