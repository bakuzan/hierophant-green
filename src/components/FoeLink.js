import React from 'react';

function FoeLink({ className, ...props }) {
  const classes = ['foe-link', className].filter((x) => !!x).join(' ');

  return <button type="button" className={classes} {...props}></button>;
}

export default FoeLink;
