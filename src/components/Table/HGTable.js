import './Table.scss';
import PropTypes from 'prop-types';
import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import NewTabLink from 'meiko/NewTabLink';

import Table from './index';
import getSeriesStats from '@/utils/getSeriesStats';
import getEpisodeText from '@/utils/getEpisodeText';

const rhsAlign = { textAlign: 'right' };
const seasonHeaders = [
  { text: '#', style: { ...rhsAlign } },
  { text: 'Title' },
  { text: 'Rating', style: { ...rhsAlign } },
  { text: 'Average', style: { ...rhsAlign } },
  { text: 'Highest', style: { ...rhsAlign } },
  { text: 'Lowest', style: { ...rhsAlign } },
  { text: 'Mode', style: { ...rhsAlign } }
];

function HGTable({
  hideRatingColumn,
  items,
  hideSeason,
  getSeason,
  overrideHeaders
}) {
  let headers = overrideHeaders ?? seasonHeaders;
  headers = hideRatingColumn
    ? headers.filter((x) => x.text !== 'Rating')
    : headers;

  return (
    <Table headers={headers}>
      {() =>
        items.map((s, i) => {
          const number = i + 1;
          const image = getImage(s.image);
          const stats = getSeriesStats(s);
          const season = getSeason(s.isCarryOver, s.season);
          const episodesText = getEpisodeText(s.episodes, s.totalEpisodes);

          return (
            <tr key={s.id}>
              <td
                column-title="#"
                className="cell cell--rhs cell--highlight-on-small"
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>{number}</div>
                  {!hideSeason && season && (
                    <div style={{ fontSize: `0.75rem` }}>{season}</div>
                  )}
                </div>
              </td>
              <td column-title="Title" className="cell">
                <div className="image-wrapper">
                  <GatsbyImage
                    style={{ flex: `0 0 96px` }}
                    image={image}
                    alt={s.title}
                  />
                  <div className="title-episode-wrapper">
                    <NewTabLink
                      style={{ display: 'flex', justifyContent: 'flex-start' }}
                      href={`https://myanimelist.net/anime/${s.malId}`}
                    >
                      {s.title}
                    </NewTabLink>
                    <div style={{ fontSize: `0.75rem` }}>{episodesText}</div>
                  </div>
                </div>
              </td>
              {!hideRatingColumn && (
                <td column-title="Rating" className="cell cell--rhs">
                  {stats.rating}
                </td>
              )}
              <td column-title="Average" className="cell cell--rhs">
                {stats.average}
              </td>
              <td column-title="Highest" className="cell cell--rhs">
                {stats.highest}
              </td>
              <td column-title="Lowest" className="cell cell--rhs">
                {stats.lowest}
              </td>
              <td column-title="Mode" className="cell cell--rhs">
                {stats.mode}
              </td>
            </tr>
          );
        })
      }
    </Table>
  );
}

HGTable.defaultProps = {
  style: {},
  hideRatingColumn: false,
  hideSeason: false,
  getSeason: (isCarryOver, season) =>
    isCarryOver ? `${season.season} ${season.year}` : null,
  overrideHeaders: null
};

HGTable.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  hideRatingColumn: PropTypes.bool,
  hideSeason: PropTypes.bool,
  getSeason: PropTypes.func,
  overrideHeaders: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired
    })
  )
};

export default HGTable;
