import './Table.scss';
import PropTypes from 'prop-types';
import React from 'react';
import Img from 'gatsby-image';

import Table from './index';
import NewTabLink from '@/components/NewTabLink';
import getSeriesStats from '@/utils/getSeriesStats';
import getSeasonName from '@/utils/getSeasonName';
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

function HGTable({ hideRatingColumn, items, hideSeason }) {
  const headers = hideRatingColumn
    ? seasonHeaders.filter((x) => x.text !== 'Rating')
    : seasonHeaders;

  return (
    <Table headers={headers}>
      {() =>
        items.map((s, i) => {
          const number = i + 1;
          const stats = getSeriesStats(s);

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
                  {!hideSeason && s.season && (
                    <div>{getSeasonName(s.season, false)}</div>
                  )}
                </div>
              </td>
              <td column-title="Title" className="cell">
                <div style={{ display: 'flex' }}>
                  <Img
                    style={{ flex: `0 0 96px` }}
                    {...s.image.childImageSharp}
                  />
                  <NewTabLink
                    style={{ margin: `0 ${rhythm(1 / 2)}` }}
                    href={`https://myanimelist.net/anime/${s.malId}`}
                  >
                    {s.title}
                  </NewTabLink>
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
  hideSeason: false
};

HGTable.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  hideRatingColumn: PropTypes.bool,
  hideSeason: PropTypes.bool
};

export default HGTable;
