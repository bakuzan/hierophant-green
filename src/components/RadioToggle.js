import './RadioToggle.scss';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';

import { Icons } from '../consts';

const defaultIcons = [Icons.cross, Icons.tick];
const cx = (...l) => l.filter((x) => !!x).join(' ');

function RadioToggle({ className, label, icons = defaultIcons, ...props }) {
  const [focused, setFocus] = useState(false);
  const ref = useRef();

  const classes = cx(
    `radio-toggle`,
    props.checked && 'radio-toggle--checked',
    focused && 'radio-toggle--focused',
    className
  );

  return (
    <div
      className={classes}
      onClick={(event) => {
        const checkbox = ref.current;
        const { target } = event;

        if (target !== checkbox) {
          event.preventDefault();
          checkbox.focus();
          checkbox.click();
        }
      }}
    >
      <div className="radio-toggle__options">
        <div className="radio-toggle__option radio-toggle__checked">
          {icons[0]}
        </div>
        <div className="radio-toggle__option radio-toggle__unchecked">
          {icons[1]}
        </div>
      </div>
      <div className="radio-toggle__control" />
      <input
        {...props}
        ref={ref}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(e) => {
          const { checked, name } = e.target;
          props.onChange(checked, name);
        }}
        className="radio-toggle__for-screenreader"
        type="checkbox"
        aria-label={label}
      />
    </div>
  );
}

RadioToggle.displayName = 'RadioToggle';
RadioToggle.propTypes = {
  label: PropTypes.string.isRequired,
  icons: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired
};

export default RadioToggle;
