import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

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
  const data = useStaticQuery(graphql`
    query FooterMetaQuery {
      site {
        siteMetadata {
          generatedDate
          malUrl
          tierListUrl
          repoUrl
          githubUrl
        }
      }
    }
  `);

  const info = data.site.siteMetadata;
  const [date, time] = info.generatedDate.split('T');

  return (
    <footer
      style={{
        padding: `${rhythm(1 / 5)} 0px`,
        borderTop: `1px solid var(--primary-colour)`
      }}
    >
      <div style={{ display: 'flex', alignItems: `center` }}>
        <NewTabLink href={info.githubUrl}>creator</NewTabLink>
        <Divider />
        <NewTabLink href={info.repoUrl}>source</NewTabLink>
        <Divider />
        <NewTabLink href={info.malUrl}>myanimelist</NewTabLink>
        <Divider />
        <NewTabLink href={info.tierListUrl}>make a tier list</NewTabLink>
      </div>
      <div>
        Last updated{' '}
        {date
          .split('-')
          .reverse()
          .join('-')}{' '}
        {time.slice(0, 5)} UTC
      </div>
    </footer>
  );
}

export default Footer;
