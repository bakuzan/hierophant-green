import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

import getSeasonName from '../utils/getSeasonName';

function Navigation({ next, previous }) {
  return (
    <nav>
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          listStyle: 'none',
          padding: 0
        }}
      >
        <li>
          {previous && (
            <Link
              to={previous.fields.slug}
              rel="prev"
              style={{ marginRight: 20 }}
            >
              ←{' '}
              {previous.isYear
                ? `${previous.year} Overview`
                : getSeasonName(previous.season)}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.isYear
                ? `${next.year} Overview`
                : getSeasonName(next.season)}{' '}
              →
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

const navLinkProps = PropTypes.shape({ season: PropTypes.string.isRequired });

Navigation.propTypes = {
  next: navLinkProps,
  previous: navLinkProps
};

export default Navigation;
