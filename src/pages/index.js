import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '@/components/AppLayout';
import SEO from '@/components/AppSEO';
import Personal from '@/components/Personal';

import { rhythm } from '../utils/typography';
import getSeasonName from '../utils/getSeasonName';

function IndexItem({ slug, text }) {
  return (
    <li style={{ display: 'flex' }}>
      <Link
        to={slug}
        style={{
          textDecoration: 'none',
          color: 'inherit',
          marginTop: rhythm(1),
          marginBottom: rhythm(1 / 4)
        }}
      >
        <h3
          className="season-link"
          style={{
            fontSize: rhythm(1),
            margin: 0
          }}
        >
          {text}
        </h3>
      </Link>
    </li>
  );
}

export default function HomePage({ data }) {
  const currentYear = new Date().getFullYear().toString();
  const info = data.allDataJson;
  const seasonal = info.nodes;

  const yearCount = seasonal
    .map((x) => x.season.slice(0, 4))
    .filter((x, i, a) => a.indexOf(x) === i).length;

  return (
    <Layout>
      {/* eslint-disable-next-line react/jsx-pascal-case */}
      <SEO title="Home" />
      <aside>
        <Personal />
      </aside>

      <div>
        <h2 id="history">
          <Link to="/#history">Season History</Link>
        </h2>
        <div>
          {seasonal.length} seasons, over {yearCount} years
        </div>
        <ul
          style={{ listStyleType: 'none', margin: 0, marginBottom: rhythm(4) }}
        >
          {seasonal.reduce((p, node) => {
            const year = node.season.slice(0, 4);
            const hasFullYear =
              node.season.includes('-10') && year !== currentYear;

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
}

export const query = graphql`
  query {
    allDataJson(sort: { fields: [season], order: DESC }) {
      totalCount
      nodes {
        id
        season
        fields {
          slug
        }
      }
    }
  }
`;
