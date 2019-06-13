import PropTypes from 'prop-types';
import React from 'react';

function NewTabLink({ children, ...props }) {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

NewTabLink.displayName = 'NewTabLink';
NewTabLink.propTypes = {
  href: PropTypes.string.isRequired
};

export default NewTabLink;
