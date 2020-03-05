import './Table.scss';
import PropTypes from 'prop-types';
import React from 'react';
import Img from 'gatsby-image';

import NewTabLink from 'meiko/NewTabLink';

import Table from './index';
import getSeriesStats from '@/utils/getSeriesStats';
import getEpisodeText from '@/utils/getEpisodeText';
import { rhythm } from '@/utils/typography';

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

function HGTable({ hideRatingColumn, items, hideSeason, getSeason }) {
  const headers = hideRatingColumn
    ? seasonHeaders.filter((x) => x.text !== 'Rating')
    : seasonHeaders;

  return (
    <Table headers={headers}>
      {() =>
        items.map((s, i) => {
          const number = i + 1;
          const stats = getSeriesStats(s);
          const season = getSeason(s.isCarryOver, s.season);
          const episodesText = getEpisodeText(s.episodes);

          return (
            <tr key={s.id}>
              <td column-title="#" className="cell cell--rhs">
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
                <div style={{ display: 'flex' }}>
                  <Img
                    style={{ flex: `0 0 96px` }}
                    {...s.image.childImageSharp}
                  />
                  <div style={{ margin: `0 ${rhythm(1 / 2)}` }}>
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
    isCarryOver ? `${season.season} ${season.year}` : null
};

HGTable.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  hideRatingColumn: PropTypes.bool,
  hideSeason: PropTypes.bool,
  getSeason: PropTypes.func
};

export default HGTable;
