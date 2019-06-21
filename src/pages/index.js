import React from 'react';
import { Link, graphql } from 'gatsby';

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
          style={{
            display: 'inline-block',
            margin: `${rhythm(3 / 4)} 0px`
          }}
        >
          Seasons
        </h2>
        <div>{info.totalCount} covered</div>
        <ul
          style={{ listStyleType: 'none', margin: 0, marginBottom: rhythm(4) }}
        >
          {info.edges.map(({ node }) => (
            <li key={node.id} style={{ display: 'flex' }}>
              <Link
                to={node.fields.slug}
                style={{
                  textDecoration: 'none',
                  color: 'inherit'
                }}
              >
                <h4
                  className="season-link"
                  style={{
                    marginTop: rhythm(1),
                    marginBottom: rhythm(1 / 4)
                  }}
                >
                  {getSeasonName(node.season)}
                </h4>
              </Link>
            </li>
          ))}
        </ul>
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
