import PropTypes from 'prop-types';
import React from 'react';

import Icons from 'meiko/constants/icons';

function PageAnchor({ id, ...props }) {
  return (
    <a {...props} style={{ margin: `0 10px` }} href={`#${id}`}>
      {Icons.link}
    </a>
  );
}

PageAnchor.displayName = 'PageAnchor';
PageAnchor.propTypes = {
  id: PropTypes.string.isRequired
};

export default PageAnchor;
