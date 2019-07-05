import React from 'react';

import Table from './Table';

import getSeasonName from '../utils/getSeasonName';

const rhsAlign = { textAlign: 'right' };
const headers = [
  { text: '' },
  { text: 'Total', style: { ...rhsAlign } },
  { text: 'Rated', style: { ...rhsAlign } },
  { text: 'Average Rating', style: { ...rhsAlign } }
];

function YearOverview({ data }) {
  return (
    <div>
      <Table headers={headers}>
        {() =>
          data.map((season) => (
            <tr key={season.season}>
              <th>
                <a href={`/${season.season}`}>
                  {getSeasonName(season.season, false)}
                </a>
              </th>
              <td column-title="Total" className="cell cell--rhs">
                {season.seriesCount}
              </td>
              <td column-title="Rated" className="cell cell--rhs">
                {season.ratedCount}
              </td>
              <td column-title="Average Rating" className="cell cell--rhs">
                {season.average}
              </td>
            </tr>
          ))
        }
      </Table>
    </div>
  );
}

export default YearOverview;
