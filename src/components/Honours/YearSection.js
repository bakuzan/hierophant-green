import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'gatsby';

import Tickbox from 'meiko/Tickbox';

import HGTable from '@/components/Table/HGTable';
import PageAnchor from '@/components/PageAnchor';
import SeasonSection from './SeasonSection';
import StandoutSection from './StandoutSection';

import { useMountedOnClient } from '@/hooks/useMountedOnClient';
import storage from '@/utils/storage';
import seriesSorter from '@/utils/seriesSorter';
import reduceNestedList from '@/utils/reduceNestedList';
import averageRatedTotal from '@/utils/averageRatedTotal';
import generateSeriesStatistics from '@/utils/generateSeriesStatistics';
import getSeasonName from '@/utils/getSeasonName';
import { rhythm } from '@/utils/typography';
import { selectTop, generateSeriesForEpisode } from './utils';

function YearSection({ title, items }) {
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

  const standOutRating = storage.getKey('standoutEpisodeRating');
  const standOutEpisodes = generateSeriesForEpisode(
    title,
    allSeries,
    allEpisodes.filter((x) => x.rating >= standOutRating)
  ).filter((x) => !x.isCarryOver || !hideCarryOvers);

  return (
    <section
      id={sectionId}
      style={{
        padding: `0 ${rhythm(3 / 4)} ${rhythm(1 / 8)}`,
        margin: `${rhythm(1)} 0`
      }}
    >
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
        {isNaN(average)
          ? `Average rating unavailable`
          : `Average: ${average} for ${ratedCount} rated series`}
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
          <SeasonSection
            key={entry.season}
            slug={`/${entry.season}/`}
            title={`${name} ${title}`}
            items={entry.items}
            hideCarryOvers={hideCarryOvers}
            hideRatingColumn={i + 1 >= seasonCount}
          />
        );
      })}

      {hasAllSeasons && (
        <StandoutSection sectionId={sectionId} items={standOutEpisodes} />
      )}
    </section>
  );
}

YearSection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default YearSection;
