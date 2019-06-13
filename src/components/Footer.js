import React from 'react';

import NewTabLink from './NewTabLink';
import { rhythm } from '../utils/typography';

function Divider() {
  return (
    <div
      style={{
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        padding: rhythm(1 / 4),
        color: `var(--primary-colour)`
      }}
    >
      -
    </div>
  );
}

function Footer() {
  return (
    <footer
      style={{
        padding: `${rhythm(1 / 5)} 0px`,
        borderTop: `1px solid var(--primary-colour)`
      }}
    >
      <div style={{ display: 'flex', alignItems: `center` }}>
        <NewTabLink href="https://github.com/bakuzan">creator</NewTabLink>
        <Divider />
        <NewTabLink href="https://github.com/bakuzan">creator</NewTabLink>
        <Divider />
        <NewTabLink href="https://github.com/bakuzan">creator</NewTabLink>
        <Divider />
        <NewTabLink href="https://github.com/bakuzan">creator</NewTabLink>
      </div>
    </footer>
  );
}

export default Footer;
