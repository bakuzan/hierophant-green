import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Personal from '../components/Personal';
import SEO from '../components/SEO';

import { rhythm } from '../utils/typography';
import getSeasonName from '../utils/getSeasonName';

function IndexItem({ slug, text }) {
  return (
    <li style={{ display: 'flex' }}>
      <Link
        to={slug}
        style={{
          textDecoration: 'none',
          color: 'inherit'
        }}
      >
        <h2
          className="season-link"
          style={{
            fontSize: rhythm(1),
            marginTop: rhythm(1),
            marginBottom: rhythm(1 / 4)
          }}
        >
          {text}
        </h2>
      </Link>
    </li>
  );
}

export default ({ data }) => {
  const info = data.allDataJson;
  const items = info.edges.map((x) => x.node);
  const yearCount = items
    .map((x) => x.season.slice(0, 4))
    .filter((x, i, a) => a.indexOf(x) === i).length;

  return (
    <Layout>
      <SEO title="Home" />
      <aside>
        <Personal />
      </aside>
      <div>
        <div>
          {info.totalCount} seasons, over {yearCount} years
        </div>
        <ul
          style={{ listStyleType: 'none', margin: 0, marginBottom: rhythm(4) }}
        >
          {items.reduce((p, node) => {
            const hasFullYear = node.season.includes('-10');
            const year = node.season.slice(0, 4);

            return [
              ...p,
              hasFullYear && (
                <IndexItem
                  key={`${node.id}-year`}
                  slug={`/${year}/`}
                  text={`${year} Overview`}
                />
              ),
              <IndexItem
                key={node.id}
                slug={node.fields.slug}
                text={getSeasonName(node.season)}
              />
            ];
          }, [])}
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
