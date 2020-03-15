import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';

import RadioToggle from 'meiko/RadioToggle';
import { rhythm } from '@/utils/typography';
import { Icons } from '@/consts';

const NavLink = ({ minWidth, show = true, ...props }) => (
  <div style={{ minWidth }}>
    {show && (
      <Link
        className="hig-nav-link"
        style={{
          padding: `0 5px`,
          margin: `0 10px`
        }}
        activeStyle={{
          backgroundColor: 'var(--primary-colour)',
          color: `var(--primary-contrast)`
        }}
        {...props}
      />
    )}
  </div>
);

function Header({ siteTitle }) {
  const [theme, setTheme] = useState(null);
  const mounted = theme !== null;

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
      <Helmet
        meta={[
          {
            name: 'theme-color',
            content: theme === 'theme theme--light' ? '#ffa8c5' : '#282c35'
          }
        ]}
      />
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
      <nav
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          padding: `0 ${rhythm(1)}`
        }}
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/honours">Honours</NavLink>
        <NavLink to="/settings" minWidth="79px" show={mounted}>
          Settings
        </NavLink>
      </nav>
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
