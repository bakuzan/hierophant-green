import './Table.scss';
import PropTypes from 'prop-types';
import React from 'react';

function Table({ style, headers, children, ...props }) {
  return (
    <table style={{ ...style }} {...props}>
      <thead>
        <tr>
          {headers.map(({ text, ...x }) => (
            <th key={text} {...x} style={{ ...(x.style || {}) }}>
              {text}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children && children()}</tbody>
    </table>
  );
}

Table.defaultProps = { style: {} };
Table.propTypes = {
  style: PropTypes.object,
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired
    })
  ).isRequired,
  children: PropTypes.func
};

export default Table;
