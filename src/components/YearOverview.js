import React from 'react';
import { Link } from 'gatsby';

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
  const sorted = data.sort((a, b) => (a.season > b.season ? 1 : -1));

  return (
    <div>
      <Table headers={headers}>
        {() =>
          sorted.map((season) => (
            <tr key={season.season}>
              <th>
                <Link to={`/${season.season}`}>
                  {getSeasonName(season.season, false)}
                </Link>
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
