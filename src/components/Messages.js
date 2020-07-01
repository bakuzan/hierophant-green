import PropTypes from 'prop-types';
import React from 'react';

import { Icons } from '@/consts';

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
          {props.isYear ? `${props.season}: ` : ''}
          {x.message}
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
      seasons: PropTypes.arrayOf(PropTypes.string).isRequired
    })
  ),
  season: PropTypes.string
};

export default Messages;
