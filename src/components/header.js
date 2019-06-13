import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

import RadioToggle from './RadioToggle';
import { rhythm } from '../utils/typography';
import { Icons } from '../consts';

function Header({ siteTitle }) {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => {
      setTheme(window.__theme);
    };
  }, []);

  return (
    <header
      style={{
        marginBottom: rhythm(1)
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: `0 auto`,
          maxWidth: 960,
          padding: `${rhythm(1)} ${rhythm(3 / 4)}`
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link to="/">{siteTitle}</Link>
        </h1>
        {theme !== null && (
          <RadioToggle
            label="Switch between Dark and Light mode"
            name="theme"
            icons={[Icons.moon, Icons.sun]}
            checked={theme === 'theme theme--dark'}
            onChange={(checked) =>
              window.__setPreferredTheme(
                checked ? 'theme theme--dark' : 'theme theme--light'
              )
            }
          />
        )}
      </div>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
