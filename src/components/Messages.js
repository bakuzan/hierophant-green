import PropTypes from 'prop-types';
import React from 'react';

import { Icons } from '@/consts';
import getSeasonName from '@/utils/getSeasonName';

const TypeStyles = {
  error: {
    container: { boxShadow: `0 0 5px 0 red` },
    icon: { color: 'red' }
  },
  information: {
    container: { boxShadow: `0 0 5px 0 blue` },
    icon: { color: 'blue' }
  },
  warning: {
    container: { boxShadow: `0 0 5px 0 orange` },
    icon: { color: 'orange' }
  }
};

function Messages(props) {
  return props.items.map((x) => {
    const icon = Icons[x.type];
    const label = `${x.type} message`;
    const typeStyle = TypeStyles[x.type];
    const seasons = x.seasons
      .filter((s) => s.includes(props.year))
      .map((s) => getSeasonName(s))
      .join(', ');

    return (
      <div
        className="special-message"
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '5px',
          ...typeStyle.container
        }}
      >
        {icon && (
          <div
            style={{
              fontSize: '2rem',
              marginRight: '5px',
              ...typeStyle.icon
            }}
            aria-label={label}
            title={label}
          >
            <span aria-hidden="true">{icon}</span>
          </div>
        )}
        <div style={{ whiteSpace: 'pre-line' }}>
          {props.isYear ? `${seasons}: ` : ''}
          {props.isYear ? x.yearMessage ?? x.message : x.message}
        </div>
      </div>
    );
  });
}

Messages.defaultProps = {
  isYear: false
};

Messages.propTypes = {
  isYear: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      yearMessage: PropTypes.string,
      seasons: PropTypes.arrayOf(PropTypes.string).isRequired
    })
  ),
  season: PropTypes.string,
  year: PropTypes.string
};

export default Messages;
