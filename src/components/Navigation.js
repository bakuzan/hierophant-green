import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

import getSeasonName from '../utils/getSeasonName';

function resolveLinkText(info) {
  if (info.isYear) {
    return `${info.year} Overview`;
  }

  return getSeasonName(info.season);
}

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
              ← {resolveLinkText(previous)}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {resolveLinkText(next)} →
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
