import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import HGTable from '@/components/Table/HGTable';

import groupBy from '@/utils/groupBy';
import seriesSorter from '@/utils/seriesSorter';
import { rhythm } from '@/utils/typography';
import { capitalise } from '@/utils/helpers';
import { seasonNames } from '@/consts';

const seasonNumbers = Object.keys(seasonNames)
  .sort()
  .reverse();

function SubSection({ slug, title, ...props }) {
  return (
    <section style={{ margin: `${rhythm(1)} 0` }}>
      <header>
        <Link
          to={slug}
          style={{
            textDecoration: 'none',
            color: 'inherit'
          }}
        >
          <h4 className="season-link">{capitalise(title)}</h4>
        </Link>
      </header>
      <HGTable hideSeason {...props} />
    </section>
  );
}

function Section({ title, items }) {
  const seasonCount = seasonNumbers
    .map((num) =>
      items.some((x) => x.season === `${title}-${num}`) ? num : null
    )
    .filter((x) => x !== null).length;

  const hasAllSeasons = seasonCount === 4;

  return (
    <section style={{ margin: `${rhythm(1)} 0` }}>
      <header>
        <Link
          to={`/${title}/`}
          style={{
            textDecoration: 'none',
            color: 'inherit'
          }}
        >
          <h3 className="season-link">
            {title}
            {hasAllSeasons ? ' - Overview' : ''}
          </h3>
        </Link>
      </header>

      {!hasAllSeasons && (
        <p>
          Once all seasons for the year are available, a top 5 ranking for the
          year table will be displayed.
          <br /> Below are top 3 rankings for each season in {title}. <br />
          Unfinished seasons will not display the overall rating column.
        </p>
      )}
      {hasAllSeasons && (
        <React.Fragment>
          <p>
            Below is a top 5 ranking for the year of {title}.
            <br />
            Following that each individual season for {title} has a top 3
            ranking.
          </p>
          <HGTable items={items.slice(0, 5)} />
        </React.Fragment>
      )}

      {seasonNumbers.map((num, i) => {
        const season = `${title}-${num}`;

        if (!items.some((x) => x.season === season)) {
          return null;
        }

        return (
          <SubSection
            key={num}
            slug={`/${season}/`}
            title={seasonNames[num]}
            items={items.filter((x) => x.season === season).slice(0, 3)}
            hideRatingColumn={i + 1 >= seasonCount}
          />
        );
      })}
    </section>
  );
}

export default ({ data }) => {
  const seasons = data.allDataJson.nodes ?? [];
  const groups = groupBy(seasons, (x) => x.season.split('-')[0]);

  const years = Array.from(groups.entries()).map(([key, items]) => [
    key,
    items
      .reduce(
        (p, c) => [...p, ...c.series.map((x) => ({ ...x, season: c.season }))],
        []
      )
      .sort(seriesSorter)
  ]);

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
          <Section key={year} title={year} items={items} />
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allDataJson(
      filter: { date: { eq: null } }
      sort: { order: DESC, fields: season }
    ) {
      nodes {
        id
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
          average
          highest
          lowest
          mode
        }
      }
    }
  }
`;
