import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';

import { capitalise } from 'ayaka/capitalise';
import groupBy from 'ayaka/groupBy';
import Tickbox from 'meiko/Tickbox';

import Layout from '@/components/AppLayout';
import SEO from '@/components/AppSEO';
import HGTable from '@/components/Table/HGTable';
import PageAnchor from '@/components/PageAnchor';

import { useMountedOnClient } from '@/hooks/useMountedOnClient';
import seriesSorter from '@/utils/seriesSorter';
import reduceNestedList from '@/utils/reduceNestedList';
import averageRatedTotal from '@/utils/averageRatedTotal';
import generateSeriesStatistics from '@/utils/generateSeriesStatistics';
import getSeasonName from '@/utils/getSeasonName';
import includeUserSettingFilters from '@/utils/includeUserSettingFilters';
import { rhythm } from '@/utils/typography';

function selectTop(items, opts) {
  const n = opts.top ?? 3;
  const hide = opts.hideCarryOvers ?? false;
  const filtered = includeUserSettingFilters(
    items,
    (x, hasMinEpisodes) => !x.isCarryOver || (!hide && hasMinEpisodes)
  );

  return filtered.slice(0, n);
}

function SubSection({ slug, title, hideCarryOvers, items, ...props }) {
  const sectionId = `section_${slug.replace(/\//g, '')}`;
  const rows = selectTop(items, { top: 3, hideCarryOvers });
  const { average, ratedCount } = averageRatedTotal({ series: items });

  return (
    <section id={sectionId} style={{ margin: `${rhythm(1)} 0` }}>
      <header style={{ display: 'flex', alignItems: 'center' }}>
        <PageAnchor id={sectionId} />
        <Link
          to={slug}
          style={{
            textDecoration: 'none',
            color: 'inherit'
          }}
        >
          <h4 className="season-link" style={{ margin: `${rhythm(3 / 4)} 0` }}>
            {capitalise(title)}
          </h4>
        </Link>
      </header>
      <p>
        Average: {average} for {ratedCount} rated series
      </p>
      <HGTable hideSeason {...props} items={rows} />
    </section>
  );
}

function Section({ title, items }) {
  const mounted = useMountedOnClient();
  const [hideCarryOvers, setHideCarryOvers] = useState(false);

  const sectionId = `section_${title}`;
  const seasonCount = items.length;
  const hasAllSeasons = seasonCount === 4;
  const hideCarryOversId = `hideCarryOvers_${title}`;

  const seasons = items.map((x) => ({
    season: x.season,
    items: generateSeriesStatistics(
      getSeasonName(x.season),
      x.series,
      x.episodes
    ).sort(seriesSorter)
  }));

  const allSeries = reduceNestedList(items, 'series');
  const allEpisodes = reduceNestedList(items, 'episodes');
  const allSeasons = generateSeriesStatistics(
    title,
    allSeries,
    allEpisodes
  ).sort(seriesSorter);
  const { average, ratedCount } = averageRatedTotal({ series: allSeasons });

  return (
    <section id={sectionId} style={{ margin: `${rhythm(1)} 0` }}>
      <header
        style={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <PageAnchor id={sectionId} />
        <Link
          to={`/${title}/`}
          style={{
            textDecoration: 'none',
            color: 'inherit'
          }}
        >
          <h3 className="season-link" style={{ margin: `${rhythm(3 / 4)} 0` }}>
            {title}
            {hasAllSeasons ? ' - Overview' : ''}
          </h3>
        </Link>
        <div className="flex-spacer"></div>
        {mounted && (
          <div>
            <Tickbox
              className="hide-carry-overs"
              id={hideCarryOversId}
              name={hideCarryOversId}
              checked={hideCarryOvers}
              text={' Hide carry overs'}
              onChange={(e) => setHideCarryOvers((p) => !p)}
            />
          </div>
        )}
      </header>
      <p>
        Average: {average} for {ratedCount} rated series
      </p>

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
          <HGTable items={selectTop(allSeasons, { top: 5, hideCarryOvers })} />
        </React.Fragment>
      )}

      {seasons.map((entry, i) => {
        const name = getSeasonName(entry.season, false);
        return (
          <SubSection
            key={entry.season}
            slug={`/${entry.season}/`}
            title={`${name} ${title}`}
            items={entry.items}
            hideCarryOvers={hideCarryOvers}
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
          <Section key={year} title={year} items={items} />
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
