import React, { useState, useEffect } from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Personal from '../components/Personal';
import SEO from '../components/SEO';
import FoeLink from '../components/FoeLink';

import { rhythm } from '../utils/typography';
import getSeasonName from '../utils/getSeasonName';
import niceDate from '../utils/niceDate';

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
        <h3
          className="season-link"
          style={{
            fontSize: rhythm(1),
            marginTop: rhythm(1),
            marginBottom: rhythm(1 / 4)
          }}
        >
          {text}
        </h3>
      </Link>
    </li>
  );
}

const CURRENTLY_AIRING = `Currently Airing`;

export default ({ data }) => {
  const [showMore, setShowMore] = useState(null);

  useEffect(() => {
    if (window.__theme) {
      setShowMore(false);
    }
  }, []);

  const allowMore = !showMore && showMore !== null;
  const info = data.allDataJson;
  const items = info.edges.map((x) => x.node);

  const seasonal = items.filter((x) => x.season !== CURRENTLY_AIRING);
  const yearCount = seasonal
    .map((x) => x.season.slice(0, 4))
    .filter((x, i, a) => a.indexOf(x) === i).length;

  let airing = items
    .filter((x) => x.season === CURRENTLY_AIRING)
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  airing = showMore ? airing : airing.slice(0, 4);

  return (
    <Layout>
      <SEO title="Home" />
      <aside>
        <Personal />
      </aside>
      <div>
        <h2 id="airing">
          <Link to="/#airing">Currently Airing</Link>
        </h2>
        <ul
          style={{ listStyleType: 'none', margin: 0, marginBottom: rhythm(4) }}
        >
          {airing.map((node) => {
            const wkBeg = niceDate(node.fields.slug);

            return (
              <IndexItem
                key={node.id}
                slug={node.fields.slug}
                text={`Week of ${wkBeg}`}
              />
            );
          })}
          {allowMore && (
            <FoeLink onClick={() => setShowMore(true)}>Show more weeks</FoeLink>
          )}
        </ul>
      </div>
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
          date
          fields {
            slug
          }
        }
      }
    }
  }
`;
